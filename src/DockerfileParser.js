const fs = require('fs');
const path = require('path');

function parseDockerfile(filePath) {
  const result = {
    volumes: [],
    ports: [],
    env: {},
    entrypoint: null,
    cmd: null,
  };

  if (!fs.existsSync(filePath)) {
    throw new Error(`Dockerfile not found at: ${filePath}`);
  }

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

  for (let line of lines) {
    line = line.trim();

    // Skip comments and empty lines
    if (!line || line.startsWith('#')) continue;

    const [instr, ...rest] = line.split(/\s+/);
    const value = rest.join(' ');

    switch (instr.toUpperCase()) {
      case 'VOLUME':
        try {
          if (value.startsWith('[')) {
            const parsed = JSON.parse(value);
            result.volumes.push(...parsed);
          } else {
            result.volumes.push(...value.split(/\s+/));
          }
        } catch (e) {
          console.warn(`Failed to parse VOLUME: ${value}`);
        }
        break;

      case 'EXPOSE':
        result.ports.push(...value.split(/\s+/));
        break;

      case 'ENV':
        const envParts = value.match(/^(\w+)=["']?(.*?)["']?$/);
        if (envParts) {
          result.env[envParts[1]] = envParts[2];
        }
        break;

      case 'ENTRYPOINT':
        result.entrypoint = value;
        break;

      case 'CMD':
        result.cmd = value;
        break;
    }
  }

  return result;
}

module.exports = {
  parseDockerfile,
};
