import AsyncIterable from "asynciterable";

/**
 * Create an async iterable from a stream
 * @param  {ReadableStream} stream the stream to transform
 * @return {AsyncIterable} converted iterator
 */
export default function aiFromStream(stream) {
  return new AsyncIterable((write, end, error) => {
    stream.on("data", write);
    stream.on("end", end);
    stream.on("error", error);
  });
}
