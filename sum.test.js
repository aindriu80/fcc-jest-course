const {
  sumFunction,
  validImportFunction,
  fetchDataFunction,
  fetchPromiseFunction,
} = require("./sum");

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

test("The data matches 'peanut butter'", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchDataFunction(callback);
});

test("The data matches 'jam bread'", () => {
  return expect(fetchPromiseFunction()).resolves.toBe("jam bread");
});

// Following test is designed to fail
// test("the fetch promise returns with an error", () => {
//   return expect(fetchPromiseFunction()).rejects.toThrow("error");
// });

test("Async/Await - the data says 'jam bread'", async () => {
  const data = await fetchPromiseFunction();
  expect(data).toBe("jam bread");
});

test("Mock implemenation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});

test("Spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
