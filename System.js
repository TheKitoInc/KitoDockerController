const { exec } = require("child_process");

function execAsync(command, verbose = true) {
  return new Promise((resolve, reject) => {
    if (!command || typeof command !== "string") {
      console.error("Invalid command:", command);
      return reject(new Error("Invalid command"));
    }

    if (verbose) console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (verbose) {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
      }

      if (error) {
        if (verbose) {
          console.error(`Error executing command "${command}":`, error.message);
        }
        reject(error);
      } else {
        if (verbose) console.log(`Command executed successfully: ${command}`);
        resolve({ stdout, stderr });
      }
    });
  });
}

module.exports = {
  exec: execAsync,
};
