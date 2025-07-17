const os = require('os');
const Docker = require('dockerode');

let dockerOptions = {};

if (process.platform === 'win32') {
  // Docker Desktop on Windows uses named pipe
  dockerOptions.socketPath = '//./pipe/docker_engine';
} else if (process.platform === 'darwin' || process.platform === 'linux') {
  // macOS and Linux use Unix socket
  dockerOptions.socketPath = '/var/run/docker.sock';
} else {
  throw new Error('Unsupported platform: ' + process.platform);
}

const docker = new Docker(dockerOptions);
/*/ Example usage
docker
  .listContainers({ all: true })
  .then(containers => {
    console.log('Containers:', containers);
  })
  .catch(err => {
    console.error('Docker error:', err);
  });
*/
