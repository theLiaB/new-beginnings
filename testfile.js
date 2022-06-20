const matrix2 = [
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["i", "j", "k", "l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
];
console.log(matrix2[0].length);

/*7.34 Create a function called 'last' that takes an array and returns its last element.*/
const last = (array) => {
    inEnvelope = array[array.length - 1];
    return inEnvelope[inEnvelope.length - 1];
};
console.log(last(matrix2));