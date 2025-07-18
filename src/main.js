'use strict';

const fs = require('fs');
const path = require('path');

const UniqueQueue = require(__dirname + '/UniqueQueue.js');
console.log('Queue module loaded.', UniqueQueue);

const watcher = require(__dirname + '/watcher.js');
const debounce = require(__dirname + '/debounce.js');

const buildQueue = new UniqueQueue();
const dockerCommands = require(__dirname + '/DockerCommands.js');
const dockerController = require(__dirname + '/DockerController.js');
const Containers = require(__dirname + '/Containers.js');
const Utils = require(__dirname + '/Utils.js');

let running = true;

module.exports = function (dockerPath) {
  if (!fs.existsSync(dockerPath)) {
    throw new Error(`Docker path does not exist: ${dockerPath}`);
  }

  if (!fs.statSync(dockerPath).isDirectory()) {
    throw new Error(`Docker path is not a directory: ${dockerPath}`);
  }

  console.log(`Watching Docker path: ${dockerPath}`);
  const watcherInstance = watcher.createWatcher(
    dockerPath,
    (event, filePath) => {
      const pathRelative = path.relative(dockerPath, filePath);
      const pathName = pathRelative.split(path.sep)[0];
      const buildPath = path.join(dockerPath, pathName);
      debounce.debounce(
        buildPath,
        () => handleDirectoryChange(buildPath),
        1000
      );
    }
  );

  process.on('SIGINT', () => {
    console.log('Shutting down...');
    watcherInstance.close();
    running = false;
    process.exit(0);
  });

  buildThread();
};

function handleDirectoryChange(buildPath) {
  if (!fs.existsSync(buildPath)) {
    dockerController.stopContainer(Utils.getImageNameFromPath(buildPath));

    return;
  }

  if (!fs.statSync(buildPath).isDirectory()) {
    return;
  }

  const buildFile = path.join(buildPath, 'Dockerfile');
  if (!fs.existsSync(buildFile)) {
    return;
  }

  buildQueue.enqueue(buildPath);
}

async function buildThread() {
  while (running) {
    const buildPath = buildQueue.dequeue();

    if (buildPath === null) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      continue;
    }

    // Do one build at a time
    await handleBuildImage(buildPath);
  }
}

async function handleBuildImage(buildPath) {
  if (!Utils.isValidDockerPath(buildPath)) {
    console.warn(`Invalid Docker path: ${buildPath}`);
    return;
  }

  try {
    console.log(`Processing build for: ${buildPath}`);
    await dockerCommands.buildImage(buildPath).then(success => {
      console.log(`Build completed for ${buildPath}:`);
      handleNewImageBuild(buildPath);
    });
    console.log(`Build image command executed for: ${buildPath}`);
  } catch (error) {
    console.error(`Error processing build for ${buildPath}:`, error);
  }
}

async function handleNewImageBuild(buildPath) {
  const imageName = Utils.getImageNameFromPath(buildPath);
  if (!imageName) {
    console.error(`Could not determine image name from path: ${buildPath}`);
    return;
  }

  try {
    await dockerCommands.stopContainer(imageName);
    console.log(`Stopped existing container for image: ${imageName}`);
  } catch (error) {
    console.error(`Error stopping container for image ${imageName}:`, error);
  }

  try {
    await dockerCommands.removeContainer(imageName);
    console.log(`Removed existing container for image: ${imageName}`);
  } catch (error) {
    console.error(`Error removing container for image ${imageName}:`, error);
  }
  return dockerCommands.startContainer(imageName);
}
