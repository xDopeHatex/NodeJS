import { access, constants, rename as renameFile } from "fs/promises";

const wrongFileNamePathAndName = "./src/fs/files/wrongFilename.txt";
const correctFileNamePathAndName = "./src/fs/files/properFilename.md";

const rename = async () => {
  try {
    await access(correctFileNamePathAndName, constants.R_OK);

    throw Error("FS operation failed: Destination file already exists.");
  } catch (error) {
    if (error.code === "ENOENT") {
      await renameFile(wrongFileNamePathAndName, correctFileNamePathAndName);
    } else {
      throw Error("FS operation failed: Destination file already exists.");
    }
  }
};

await rename();
