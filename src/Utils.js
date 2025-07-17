const path = require('path');
const fs = require('fs');

/**
 * Convert a build path into a Docker-compatible image name.
 * Example: "/projects/My App" → "my-app"
 *
 * @param {string} buildPath
 * @returns {string}
 */
function getImageNameFromPath(buildPath) {
  return path
    .basename(buildPath)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // collapse non-alphanumerics to "-"
    .replace(/^-+|-+$/g, ''); // trim leading/trailing "-"
}

function isValidDockerPath(buildPath) {
  const pathDockerfile = path.join(buildPath, 'Dockerfile');
  if (!fs.existsSync(pathDockerfile)) {
    console.warn(`Dockerfile not found at: ${pathDockerfile}`);
    return false;
  }

  const stats = fs.statSync(pathDockerfile);
  return stats.isFile();
}

module.exports = {
  getImageNameFromPath,
  isValidDockerPath,
};
