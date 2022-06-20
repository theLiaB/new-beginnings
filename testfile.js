const bigMatrix = [
    [45, 39, 89, 67, 7, 71, 85, 44, 47, 39],
    [89, 32, 81, 19, 43, 17, 47, 10, 6, 58],
    [8, 59, 79, 3, 14, 21, 83, 18, 27, 49],
    [24, 32, 72, 3, 22, 32, 5, 69, 15, 61],
    [64, 31, 73, 28, 5, 98, 6, 29, 90, 4],
    [54, 6, 92, 92, 56, 84, 81, 7, 53, 62],
    [6, 33, 41, 77, 23, 3, 46, 19, 57, 40],
    [3, 79, 65, 30, 79, 54, 25, 53, 35, 71],
    [60, 1, 54, 49, 44, 61, 42, 50, 18, 43],
    [91, 46, 7, 50, 95, 14, 45, 4, 98, 22],
];
console.log(bigMatrix[bigMatrix.length - 1].length);
/*7.36 Create a function called 'isEmpty' that takes an array and returns true if it is empty, otherwise false.
 */
const isEmpty = (array) => (array.length > 0 ? true : false);

const noRay = [];
console.log("bigMatrix has items in it:", isEmpty(bigMatrix) === true);
console.log("noRay has no items in it:", isEmpty(noRay) === false);