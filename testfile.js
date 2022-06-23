const bottomN = (bottomNum, bottomArray) =>
  bottomArray >= bottomNum ? bottomArray.slice(bottomNum) : "error";

console.log("-- bottomN tests");
console.log(
  bottomN(3, ["apple", "date", "cherry", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottomN(2, ["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['date', 'cherry']"
);
console.log(
  bottomN(1, ["apple", "date", "cherry", "Elderberry", "apple", "banana"]),
  "=== ['date']"
);
console.log(bottomN(1, ["apple"]), "=== ['apple']");
