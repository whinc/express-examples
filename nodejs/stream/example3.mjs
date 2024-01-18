import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const ac = new AbortController();
const { signal } = ac;
setImmediate(() => ac.abort());
try {
  const readStream = createReadStream("data.txt");
  readStream.on("open", () => console.log("readStream.on('open')"));
  await pipeline(readStream, createGzip(), createWriteStream("data.txt.gz"), {
    signal,
  });
} catch (err) {
  console.error(err); // AbortError
}
