const middleIndex = (array) => Math.floor(array.length * 0.5);

console.log("-- middleIndex tests");
console.log(middleIndex([1]) === 0);
console.log(middleIndex([1, 2]) === 1);
console.log(middleIndex([1, 2, 3]) === 1);
console.log(middleIndex([1, 2, 3, 4]) === 2);
console.log(middleIndex([1, 2, 3, 4, 5]) === 2);