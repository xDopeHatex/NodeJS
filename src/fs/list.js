import { readdir } from "fs/promises";

const filesPath = "./src/fs/files/";

const list = async () => {
  try {
    console.log(await readdir(filesPath));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
