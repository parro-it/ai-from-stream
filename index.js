import AsyncIterable from "asynciterable";

export default function aiFromStream(stream) {
  return new AsyncIterable((write, end, error) => {
    stream.on("data", write);
    stream.on("end", end);
    stream.on("error", error);
  });
}
