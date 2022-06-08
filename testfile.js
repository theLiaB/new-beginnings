const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

const valueInMatrix = (number, row, column, matrix) => {
    matrix[row][column] === number;
};

console.log(valueInMatrix(6, 1, 2, matrix1));
console.log(valueInMatrix(10, 3, 2, matrix1));