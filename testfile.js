const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

console.log(matrix1[1][1] === 6);
console.log(matrix1[2][1]);

const valueInMatrix = (number, row, column, matrix) => {
    return matrix[row][column] === number;
};

console.log(valueInMatrix(6, 1, 1, matrix1));
console.log(valueInMatrix(10, 2, 1, matrix1));