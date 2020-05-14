const core = require("@actions/core");
const exec = require("@actions/exec");
const io = require("@actions/io");

// This action installs third-party plugins (providers) to the user plugins directory.
async function run() {
  const directory = `${process.env.HOME}/.terraform.d/plugins`;
  await io.mkdirP(directory);
  const plugins = core.getInput("plugins").trim().split("\n");
  plugins.forEach(async function (plugin) {
    const filename = plugin.match(/(terraform-provider-\w+)/)[0];
    core.info(`Downloading ${filename}`);
    const filepath = `${directory}/${filename}`;
    try {
      await exec.exec(`curl -Lo ${filepath} ${plugin}`);
      await exec.exec(`chmod 0777 ${filepath}`);
    } catch (err) {
      core.error(err);
    }
  });
}

run();
