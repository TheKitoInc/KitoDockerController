'use strict';

if (process.argv.length != 3) {
  console.error('Usage: node index.js <dockerPath>');
  process.exit(1);
}

const dockerPath = process.argv[2];
const main = require(__dirname + '/src/main.js');

main(dockerPath);
