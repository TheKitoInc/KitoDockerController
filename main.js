const fs = require('fs');
const path = require('path');

const UniqueQueue = require(__dirname + '/UniqueQueue.js');
console.log('Queue module loaded.', UniqueQueue);

const watcher = require(__dirname + '/watcher.js');
const debounce = require(__dirname + '/debounce.js');

const buildQueue = new UniqueQueue();
const buildImage = require(__dirname + '/BuildImage.js');
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
    Containers.remove(Utils.getImageNameFromPath(buildPath));

    return;
  }

  if (!fs.statSync(buildPath).isDirectory()) {
    return;
  }

  const buildFile = path.join(buildPath, 'Dockerfile');
  if (!fs.existsSync(buildFile)) {
    return;
  }

  Containers.add(Utils.getImageNameFromPath(buildPath));

  buildQueue.enqueue(buildPath);
}

async function buildThread() {
  while (running) {
    const buildPath = buildQueue.dequeue();

    if (buildPath === null) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      continue;
    }

    const success = await buildImage(buildPath);
    if (success) {
      handleNewImageBuild(buildPath);
    }
  }
}

function handleNewImageBuild(buildPath) {
  Containers.restart(Utils.getImageNameFromPath(buildPath));
}
