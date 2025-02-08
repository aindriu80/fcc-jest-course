function sumFunction(a, b) {
  return a + b;
}

function validImportFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

function fetchDataFunction(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 2000);
}

function fetchPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("jam bread"), 1000);
  });
}

module.exports = {
  sumFunction,
  validImportFunction,
  fetchDataFunction,
  fetchPromiseFunction,
};
