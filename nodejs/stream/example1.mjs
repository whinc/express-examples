import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the ReadableStream
const readableStream = fs.createReadStream(
  path.join(__dirname, "./data.txt"),
  "utf8",
);
// Register event listeners for the input file
registerReadableStreamEventListeners(readableStream);
// The output file (WritableStream)
const writableStream = fs.createWriteStream(
  path.join(__dirname, "./output.txt"),
  "utf8",
);
// Register event listeners for the output file
registerWritableStreamEventListeners(writableStream, readableStream);

function registerReadableStreamEventListeners(
  /** @type {fs.ReadStream} */ readableStream,
) {
  readableStream.on("open", (fd) => {
    console.info(
      "open event received, file descriptor: " + fd,
      "ReadableStream.on(open).callback",
    );
  });
  readableStream.on("data", (chunk) => {
    console.info(
      "data event received: chunk size: " + chunk.length,
      "ReadableStream.on(data).callback",
    );
  });
  readableStream.on("error", (err) => {
    console.info(
      "Something has gone horribly wrong: " + err.message,
      "ReadableStream.on(error).callback",
    );
  });
  readableStream.on("close", () => {
    console.info("close event received", "ReadableStream.on(close).callback");
  });
}

function registerWritableStreamEventListeners(
  /** @type {fs.WriteStream} */ writableStream,
  /** @type {fs.ReadStream} */ readableStream,
) {
  writableStream.on("open", (fd) => {
    console.info(
      "open event received, file descriptor: " + fd,
      "WritableStream.on(open).callback",
    );
    // Connect the readableStream to the writableStream
    readableStream.pipe(writableStream);
  });
  writableStream.on("pipe", (src) => {
    console.info(
      "pipe event received, let the data flow!",
      "WritableStream.on(pipe).callback",
    );
  });
  writableStream.on("error", (err) => {
    console.info(
      "Something has gone horribly wrong: " + err.message,
      "WritableStream.on(error).callback",
    );
  });
  writableStream.on("close", () => {
    console.info("close event received", "WritableStream.on(close).callback");
  });
}
