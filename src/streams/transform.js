import { Transform } from "stream";
import { pipeline } from "stream/promises";

const stringReverse = (str) => {
  return str.split("").reverse().join("");
};

class MyTransFromStream extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, stringReverse(chunk.toString()));
  }
}

const transform = async () => {
  const transformStream = new MyTransFromStream();

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
