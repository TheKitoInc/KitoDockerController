const System = require(__dirname + '/System.js');
const { getImageNameFromPath } = require(__dirname + '/Utils.js');

module.exports.buildImage = async function (buildPath) {
  const imageName = getImageNameFromPath(buildPath);
  if (!imageName) {
    throw new Error(`Could not determine image name from path: ${buildPath}`);
  }
  console.log(`Building Docker image: ${imageName} from path: ${buildPath}`);
  return System.execAsync(`docker build -t ${imageName} ${buildPath}`);
};
