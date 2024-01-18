import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

await pipeline(
  createReadStream("data.txt"),
  createGzip(),
  createWriteStream("data.txt.gz"),
);
console.log("Pipeline succeeded.");
