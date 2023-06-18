import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
const fileURL = new URL("./files/fileToCompress.txt", import.meta.url);
const archiveURL = new URL("./files/archive.gz", import.meta.url);

const compress = async () => {
  await pipeline(
    createReadStream(fileURL),
    createGzip(),
    createWriteStream(archiveURL)
  );
};

await compress();
