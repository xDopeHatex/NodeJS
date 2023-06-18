import {
  writeFile,
  access,
  constants,
  mkdir,
  readdir,
  stat,
  copyFile,
} from "node:fs/promises";

import path from "node:path";

const sourceFolderPath = "./src/fs/files";
const destinationFolderPath = "./src/fs/files_copy";

async function copy() {
  try {
    await access(destinationFolderPath, constants.R_OK);

    throw new Error("FS operation failed: Destination folder already exists.");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await mkdir(destinationFolderPath);

        const files = await readdir(sourceFolderPath);

        for (const file of files) {
          const sourceFilePath = path.join(sourceFolderPath, file);
          const destinationFilePath = path.join(destinationFolderPath, file);

          const fileStats = await stat(sourceFilePath);

          if (fileStats.isDirectory()) {
            await mkdir(destinationFilePath);
            await copyFolderRecursive(sourceFilePath, destinationFilePath);
          } else {
            await copyFile(sourceFilePath, destinationFilePath);
          }
        }

        console.log("Folder contents copied successfully.");
      } catch (error) {
        console.error("FS operation failed:", error);
      }
    } else {
      throw error;
    }
  }
}

async function copyFolderRecursive(sourceFolderPath, destinationFolderPath) {
  const files = await readdir(sourceFolderPath);

  for (const file of files) {
    const sourceFilePath = path.join(sourceFolderPath, file);
    const destinationFilePath = path.join(destinationFolderPath, file);

    const fileStats = await stat(sourceFilePath);

    if (fileStats.isDirectory()) {
      await mkdir(destinationFilePath);
      await copyFolderRecursive(sourceFilePath, destinationFilePath);
    } else {
      await copyFile(sourceFilePath, destinationFilePath);
    }
  }
}

copy();
