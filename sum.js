function sumFunction(a, b) {
  return a + b;
}

function validImportFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

module.exports = { sumFunction, validImportFunction };
