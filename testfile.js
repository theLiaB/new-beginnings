const needToBuy = (string, strings) =>
    strings.includes(string) ? false : true;

const sampleRay2 = ["dog", "car", "lamp"];
console.log(
    "sampleRay2 says we have a dog:",
    needToBuy("dog", sampleRay2) === false
);
console.log(
    "sampleRay2 says we need a tiger:",
    needToBuy("tiger", sampleRay2) === true
);