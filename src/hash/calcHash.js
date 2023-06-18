import { createHash } from "crypto";
import { readFile } from "fs/promises";

const FILE_PATH = "./files/fileToCalculateHashFor.txt";
const fileURL = new URL(FILE_PATH, import.meta.url);

const calculateHash = async () => {
  const cont = await readFile(fileURL);
  const data = createHash("sha256").update(cont);

  console.log(data.digest("hex"));
};

await calculateHash();
