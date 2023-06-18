import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
const fileURL = new URL("./files/fileToCompress.txt", import.meta.url);
const archiveURL = new URL("./files/archive.gz", import.meta.url);

const decompress = async () => {
  await pipeline(
    createReadStream(archiveURL),
    createGunzip(),
    createWriteStream(fileURL)
  );
};

await decompress();
