import { fork } from "child_process";

const scriptURL = new URL("./files/script.js", import.meta.url);

const spawnChildProcess = async (args) => {
  const childProcess = fork(scriptURL, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
