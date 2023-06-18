import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const FILE_PATH = "./files/fileToRead.txt";
const fileURL = new URL(FILE_PATH, import.meta.url);

const read = async () => {
  await pipeline(createReadStream(fileURL), process.stdout);
};

await read();
