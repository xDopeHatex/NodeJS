import { writeFile, access, constants } from "node:fs/promises";

const pathWithFile = "./src/fs/files/fresh.txt";

const create = async () => {
  try {
    await writeFile(pathWithFile, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed: File already exists.");
  }
};

await create();
