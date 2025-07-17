const fs = require("fs");
const { execSync } = require("child_process");

if (process.getuid && process.getuid() !== 0) {
  console.error("This script must be run as root.");
  process.exit(1);
}

// Helper to reload Supervisor config
function reloadSupervisor() {
  try {
    console.log("Reloading Supervisor...");
    execSync("supervisorctl reread", { stdio: "inherit" });
    execSync("supervisorctl update", { stdio: "inherit" });
  } catch (err) {
    console.error("Failed to reload Supervisor:", err.message);
  }
}

// Generate Supervisor config content from a Map
function generateSupervisorFile(commands = new Map()) {
  const lines = [];

  commands.forEach((command, name) => {
    lines.push(`[program:${name}]`);
    lines.push(`command=${command}`);
    lines.push(`autostart=true`);
    lines.push(`autorestart=true`);
    lines.push(`stderr_logfile=/var/log/supervisor/${name}.err.log`);
    lines.push(`stdout_logfile=/var/log/supervisor/${name}.out.log`);
    lines.push(`stderr_logfile_maxbytes=1MB`);
    lines.push(`stderr_logfile_backups=5`);
    lines.push(`stdout_logfile_maxbytes=1MB`);
    lines.push(`stdout_logfile_backups=5`);
    lines.push(""); // Blank line between programs
  });

  return lines.join("\n");
}

// Update Supervisor config file
function updateSupervisorConfig(configName, commands = new Map()) {
  const configPath = `/etc/supervisor/conf.d/${configName}.conf`;
  const content = generateSupervisorFile(commands);

  if (fs.existsSync(configPath)) {
    const current = fs.readFileSync(configPath, "utf8");
    if (current === content) {
      console.log("No changes to Supervisor config, skipping write.");
      return;
    }
  }

  fs.writeFileSync(configPath, content);
  console.log(`Supervisor config updated at ${configPath}`);
  reloadSupervisor();
}

// Restart a Supervisor-managed task
function restartSupervisorTask(taskName) {
  try {
    console.log(`Restarting Supervisor task: ${taskName}`);
    execSync(`supervisorctl restart ${taskName}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`Failed to restart Supervisor task ${taskName}:`, err.message);
  }
}

module.exports = {
  updateSupervisorConfig,
  restartSupervisorTask,
};
