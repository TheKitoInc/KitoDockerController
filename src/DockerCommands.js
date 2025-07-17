const System = require(__dirname + '/System.js');
const { getImageNameFromPath } = require(__dirname + '/Utils.js');

module.exports.buildImage = async function (buildPath) {
  const imageName = getImageNameFromPath(buildPath);
  return System.execAsync(`docker build -t ${imageName} ${buildPath}`);
};
