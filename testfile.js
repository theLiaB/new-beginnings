const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(matrix1[1][3]);
/*
7.271 Create a function called 'valueInMatrix' that takes 4 arguments: 
number, row, column, matrix. 
It should return true if the number is found at the specified 
row and column in the 2D array matrix, otherwise false. 
For example, the number 10 is found at row 3, column 2 in the previous matrix.
*/
const valueInMatrix = (number, row, column, matrix) =>
    matrix[row - 1][column - 1] === number;

console.log(valueInMatrix(2, 1, 2, matrix1));
console.log(valueInMatrix(10, 3, 2, matrix1));

console.log(valueInMatrix(6, 1, 1, matrix1));
console.log(valueInMatrix(10, 2, 1, matrix1));