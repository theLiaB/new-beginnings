const britishNamesList = [
  "Smith",
  "Jones",
  "Williams",
  "Taylor",
  "Davies",
  "Brown",
  "Wilson",
  "Evans",
  "Thomas",
  "Johson",
];

const isBritish = (singleName) =>
  britishNamesList.some((brName) => brName === singleName);

const britishGang = (gangNames) =>
  gangNames.every(
    (britSrnm) =>
      isBritish(britSrnm) ||
      britSrnm.slice(0, 2) === "Mc" ||
      britSrnm.slice(0, 3) === "Mac"
  );

console.log("Brit Gang tests");
console.log(britishGang(["Juniper", "Marshall", "Jones"]));
