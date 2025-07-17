const list = new Set();
const prefix = 'supervised-container-';
const Supervisor = require(__dirname + '/Supervisor.js');

function mapSupervisorName(name) {
  return `${prefix}${name}`;
}

function add(imageName) {
  if (!list.has(imageName)) {
    list.add(imageName);
    console.log(`Added to container list: ${imageName}`);

    refreshSupervisor();
  }
}

function remove(imageName) {
  if (list.has(imageName)) {
    list.delete(imageName);
    console.log(`Removed from container list: ${imageName}`);

    refreshSupervisor();
  }
}

function refreshSupervisor() {
  const slist = new Map();
  list.forEach(name => {
    const mappedName = mapSupervisorName(name);
    const command = `docker run --rm --name ${mappedName} ${name}`;
    slist.set(name, command);
  });

  Supervisor.updateSupervisorConfig('dockerRunner', slist);
}

function restart(imageName) {
  if (list.has(imageName)) {
    const mappedName = mapSupervisorName(imageName);
    Supervisor.restartSupervisorTask(mappedName);
  } else {
    console.error(`Image not found in list: ${imageName}`);
  }
}

module.exports = { add, remove, restart };
