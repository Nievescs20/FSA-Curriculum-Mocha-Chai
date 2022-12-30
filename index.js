function add(value1, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return 0;
  }
  return value1 + value2;
}

module.exports = {
  add,
};
