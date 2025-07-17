const chokidar = require("chokidar");
module.exports.createWatcher = function (buildPath, callback) {
  console.log(`Creating watcher for: ${buildPath}`);

  const watcher = chokidar.watch(buildPath, {
    ignoreInitial: false,
    persistent: true,
  });

  watcher.on("all", (event, filePath) => {
    callback(event, filePath);
  });

  return watcher;
};
