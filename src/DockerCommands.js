const System = require(__dirname + '/System.js');
const { getImageNameFromPath } = require(__dirname + '/Utils.js');

module.exports.buildImage = async function (buildPath) {
  const imageName = getImageNameFromPath(buildPath);
  if (!imageName) {
    throw new Error(`Could not determine image name from path: ${buildPath}`);
  }
  console.log(`Building Docker image: ${imageName} from path: ${buildPath}`);
  return System.execAsync(`docker build -t "${imageName}" "${buildPath}"`);
};

module.exports.startContainer = async function (imageName) {
  if (!imageName) {
    throw new Error('Image name is required to start a container');
  }
  console.log(`Starting Docker container from image: ${imageName}`);
  return System.execAsync(
    `docker run --rm -d --name "${imageName}" "${imageName}"`
  );
};

module.exports.stopContainer = async function (containerName) {
  if (!containerName) {
    throw new Error('Container name is required to stop a container');
  }
  console.log(`Stopping Docker container: ${containerName}`);
  return System.execAsync(`docker stop "${containerName}"`);
};

module.exports.removeContainer = async function (containerName) {
  if (!containerName) {
    throw new Error('Container name is required to remove a container');
  }
  console.log(`Removing Docker container: ${containerName}`);
  return System.execAsync(`docker rm "${containerName}"`);
};
