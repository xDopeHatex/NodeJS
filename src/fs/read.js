import { readFile } from "fs/promises";

const filePathAndName = "./src/fs/files/fileToRead.txt";

const read = async () => {
  try {
    console.log(await readFile(filePathAndName, "utf-8"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
