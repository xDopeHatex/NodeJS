import { cpus } from "os";
import { Worker } from "worker_threads";

const WORKER_URL = new URL("./worker.js", import.meta.url);

const performCalculations = async () => {
  const calcFibonacci = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(WORKER_URL, { workerData });

      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });

  const calc = new Array(cpus().length)
    .fill(null)
    .map((v, i) => calcFibonacci(i + 10));
  const data = await Promise.all(calc);
  console.log(data);
};

await performCalculations();
