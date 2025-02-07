const { sumFunction, validImportFunction } = require("./sum");

test("adds 1 + 2 equaling 3", () => {
  expect(sumFunction(1, 2)).toBe(3);
});

test("adds 2 + 2 equaling 4", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("0 is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("throws on invalid input", () => {
  expect(() => {
    validImportFunction("1");
  }).toThrow();
});
