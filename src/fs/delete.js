import { rm } from "fs/promises";

const fileToDeletePathAndName = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  try {
    await rm(fileToDeletePathAndName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
