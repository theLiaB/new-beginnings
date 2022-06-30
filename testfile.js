const irishGroup = (testSurnames) =>
  testSurnames.every((testSrnm) => testSrnm.slice(0, 2) === "Mc");

console.log("irishGroup tests");
console.log(irishGroup(["McJune", "McMac"]));
console.log(irishGroup(["McFlurry", "McMain", "McFranks"]));
console.log(!irishGroup(["McFlurry", "Main", "Franks"]));
