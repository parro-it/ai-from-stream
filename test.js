import test from "ava";
import aiFromStream from ".";

test("exports a function", t => {
  t.is(typeof aiFromStream, "function");
});
