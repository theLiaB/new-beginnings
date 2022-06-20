const goodColor = (string, strings) =>
    strings.includes(string) ? true : false;

const sampleRay1 = ["silver", "green", "blue", "purple", "gold"];
console.log(
    "sampleRay1 has blue in it:",
    goodColor("blue", sampleRay1) === true
);
console.log(
    "sampleRay1 doesn't have yellow in it:",
    goodColor("yellow", sampleRay1) === false
);