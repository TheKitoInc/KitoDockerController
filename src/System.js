const childProcess  = require('child_process');

function testCommand(command) {
  if (!command || typeof command !== 'string') {
    throw new Error('Invalid command provided');
  }
}

function combineOptions(options) {
  return {
    stdio: 'inherit', // Default to inherit for stdout/stderr
    shell: true,      // Allow full shell syntax like redirection, etc.
    ...options        // Spread any additional options
  };
}

function execSync(command, options = {}) {
  testCommand(command);
  
  try {
    console.log(`Executing command: ${command}`);
    childProcess.execSync(command, combineOptions(options));
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
    throw error;
  }
}

function execAsync(command, options = {}) {
  testCommand(command);

  // Split the command into executable and args for spawn
  const [cmd, ...args] = command.split(' ');

  return new Promise((resolve, reject) => {
    const child = childProcess.spawn(cmd, args, combineOptions(options));

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      console.error(`Failed to start command: ${command}`, error);
      reject(error);
    });
  });
}

module.exports = { execSync, execAsync };
