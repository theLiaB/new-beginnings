const badMatrix = (array) =>
    array[0].includes(null) | array[1].includes(null) | array[2].includes(null) ?
    true :
    false;

const weeMatrix = [
    [45, 39, 89, 67, 7, 71, 85, 44, 47, 39],
    [89, 32, 81, 19, 43, 17, 47, 10, 6, 58],
    [8, 59, 79, 3, 14, 21, 83, 18, 27, 49],
];
const nullriffic = [
    [45, 39, 89, 67, null],
    [89, 32, 81, 19, null, 47, 10, 6, 58],
    [8, 59, 79, 3, 14, 21, 83, 18, 27, 49],
];
console.log("weeMatrix has no null in it", badMatrix(weeMatrix) === false);
console.log("nullriffic has null in it", badMatrix(nullriffic) === true);