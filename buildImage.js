const { exec } = require(__dirname + "/System.js");
const { getImageNameFromPath } = require(__dirname + "/utils.js");

module.exports = async function(buildPath) {
  const imageName = getImageNameFromPath(buildPath);

  try {
    await exec(`docker build -t ${imageName} ${buildPath}`);
    console.log(`Docker image built successfully: ${imageName}`);
    return true;
  } catch (err) {
    console.error(`Failed to build Docker image: ${imageName}`, err);
    return false;
  }
};