import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const FILE_PATH = "./files/fileToWrite.txt";
const fileURL = new URL(FILE_PATH, import.meta.url);

const write = async () => {
  const writeStream = createWriteStream(fileURL, { flags: "a" });

  await pipeline(process.stdin, writeStream);
};

await write();
