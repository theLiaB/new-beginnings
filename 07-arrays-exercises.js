/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Practice creating arrays

/*
7.1 Create a variable to hold an array of numbers and print it.
*/
const arraysForEveryone = [1, 4, 5, 6];
console.log(arraysForEveryone);

/*
7.11 Print an array of your top 3 favorite colors (as strings) without creating a variable.
*/
console.log(["purple", "orange", "green"]);

/*
7.12 Print an array of 4 different types of values.
*/
const variedArray = [2, "yellow", true, undefined];
console.log(variedArray);
/*
7.13 Print a 2-dimensional array of numbers.
*/
const dArray = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(dArray);

// Practice using array index

/*
7.2 Print the fourth name (Dave) of the array.
*/
const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"];
console.log(names[3]);
/*
7.21 Print the last name of the array, without using the length property.
*/
console.log(names[5]);

/*
7.22 Print each of the names at even indexes of the array.
*/
console.log(names[0], names[2], names[4]);
/*
7.23 Create a function called 'head' that takes an array and returns its first element. 
What does it return when given an empty array? Remember to write tests!*/

const head = (array1) => array1[0];
console.log(
  "1 is the first value in array [1,2,4,5]",
  head([1, 3, 4, 5]) === 1
);
console.log(
  "abc is the first value in array [abc, 123, doremi] ",
  head(["abc", 123, "doremi"]) === "abc"
);
console.log(
  "if we call head() with no input we get an 'undefined' response",
  head([]) === undefined
);

/*
7.24 Create a function called 'isAtIndex' that takes a value, a number, and an array. 
It should return true if the value is found at the index number of the array, otherwise false.
The following lines should help test if your function works correctly. They should print true.
*/
const isAtIndex = (value, num, array) => array[num] === value;

console.log("Bob is at index 1 in names:", isAtIndex("Bob", 1, names));
console.log("Bob is not at index 0 in names:", !isAtIndex("Bob", 0, names));
console.log("3 is at index 0 in these numbers:", isAtIndex(3, 0, [3, 2, 1]));
console.log(
  "2 is not at index 2 in these numbers:",
  !isAtIndex(2, 2, [3, 2, 1])
);
/*
7.25 Create a function called 'area' that takes a rectangle and returns its area. 
The rectangle is represented by an array with 2 numbers: [length, width].
The following lines should help test if your function works correctly. They should print true.
*/
const area = ([length, width]) => length * width;

console.log("area tests");
console.log(area([1, 2]) === 2);
console.log(area([2, 2]) === 4);
console.log(area([6, 3]) === 18);
console.log(area([0, 9]) === 0);

/*
7.251 Create a function called 'areaDifference' that takes two rectangles 
and returns the difference between the areas of the rectangles. 
Each rectangle is represented by an array with 2 numbers: [length, width].
*/
const areaDifference = ([length1, width1], [length2, width2]) => {
  const area1 = length1 * width1;
  const area2 = length2 * width2;
  return Math.abs(area1 - area2);
};
console.log(
  "The difference between 2 and 9 is 7",
  areaDifference([1, 2], [3, 3]) === 7
);
console.log(
  "The difference between 14 and 18 is 7",
  areaDifference([7, 2], [6, 3]) === 4
);
console.log(
  "The difference between 49 and 18 is not 9",
  areaDifference([7, 7], [6, 3]) !== 9
);
/*
7.252 Create a function called 'volumeDifference' that takes two cuboids 
and returns the difference between the volumes of the cuboids. 
Each cuboid is represented by an array with 3 numbers: [length, width, height].
The volume of a cuboid can be calculated by multiplying length x width x height.
*/
const volumeDifference = ([a1, b1, c1], [a2, b2, c2]) => {
  const vol1 = a1 * b1 * c1;
  const vol2 = a2 * b2 * c2;
  return Math.abs(vol1 - vol2);
};
console.log(
  "The difference between 6 and 210 is 204",
  volumeDifference([1, 2, 3], [5, 6, 7]) === 204
);
console.log(
  "The difference between 14 and 84 is not 204",
  volumeDifference([1, 2, 7], [2, 6, 7]) !== 204
);
/*
7.26 Create a function called 'suitValue' that takes a card suit 
(string) and returns its number value. 
The suits and their values are as follows.

clubs: 0
diamonds: 1
hearts: 2
spades: 3
*/

const suitValue = (suit) =>
  suit === "clubs" ? 0 : suit === "diamonds" ? 1 : suit === "hearts" ? 2 : 3;

console.log("spades is worth 3 points", suitValue("spades") === 3);
console.log("hearts is not worth 3 points", suitValue("hearts") !== 3);

/*
7.261 Create a function called 'highCard' that takes two cards and returns the higher card of the two. 
A card is represented by an array: [card value, card suit]. 
If two cards have different values, the card with the higher value is the higher card. 
If two cards have the same values, the card with the higher suit value is the higher card.
The card values are numbers: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (Jack), 12 (Queen), 13 (King), 14 (Ace).
The card suits are strings: clubs, diamonds, hearts, spades.
For example, given the two cards [3, 'spades'] and [4, 'hearts'], the second one is the higher card. 
Given the two cards [11, 'spades'] and [11, 'hearts'], the first one is the higher card (because the Jack of Spades beats the Jack of Hearts).
*/

const highCard = ([cardValue1, cardSuit1], [cardValue2, cardSuit2]) => {
  if (cardValue1 > cardValue2) {
    return true;
  } else if (cardValue1 === cardValue2) {
    if (suitValue(cardSuit1) > suitValue(cardSuit2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// try this with a ternary

console.log(
  "4 of Hearts is higher than 3 of Spades",
  highCard([3, "spades"], [4, "hearts"]) === false
);

console.log(
  "Jack of Spades beats the Jack of Hearts",
  highCard([11, "spades"], [11, "hearts"]) === true
);

/*7.27 Print the number 8 from the following 2D array.*/
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

// Practice using length
/*
7.3 Print the length of the names array.*/
console.log(names.length);

/*7.31 Print the last name in the array, using the length property.*/

console.log(names[names.length - 1]);

/*7.32 Print the sum of the lengths of the following arrays.*/
const groceries = [
  "rice",
  "bananas",
  "avocados",
  "blueberries",
  "spinach",
  "chickpeas",
  "canned beans",
];
const officeSupplies = ["pen", "paper", "tape", "stapler"];

console.log(groceries.length + officeSupplies.length);

/*7.33 Print the length of the first row in the following 2D array. */
const matrix2 = [
  ["a", "b", "c", "d", "e", "f", "g", "h"],
  ["i", "j", "k", "l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
];
console.log(matrix2[0].length);

/*7.34 Create a function called 'last' that takes an array and returns its last element.*/
const last = (array) => array[array.length - 1];

console.log(last(names));
console.log(last(matrix1));

//write tests with a true or false answer

/*7.35 Print the length of the last row in the following 2D array.*/
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
const isEmpty = (array) => array.length === 0;

const noRay = [];
console.log("bigMatrix has items in it:", isEmpty(bigMatrix) === false);
console.log("noRay has no items in it:", isEmpty(noRay) === true);

// Practice using the includes() method

/*7.4 Create a function called 'goodColor' that takes a single color (string) and an array of good colors (strings). It should return true if the color is in the array, otherwise false.
 */
const goodColor = (color, palette) => palette.includes(color);

const sampleRay1 = ["silver", "green", "blue", "purple", "gold"];
console.log(
  "sampleRay1 has blue in it:",
  goodColor("blue", sampleRay1) === true
);
console.log(
  "sampleRay1 doesn't have yellow in it:",
  goodColor("yellow", sampleRay1) === false
);
/*7.41 Create a function called 'needToBuy' that takes a single item (string) and an array of owned items (strings). It should return true if the item isn't in the owned list (meaning we need to buy it!), otherwise false.
 */
const needToBuy = (string, strings) => !strings.includes(string);

const sampleRay2 = ["dog", "car", "lamp"];
console.log(
  "sampleRay2 says we have a dog:",
  needToBuy("dog", sampleRay2) === false
);
console.log(
  "sampleRay2 says we need a tiger:",
  needToBuy("tiger", sampleRay2) === true
);
/*7.42 Create a function called 'hasNull' that takes an array and returns true
if any of the values are null, otherwise false.
 */
const hasNull = (array) => array.includes(null);

const noRay2 = [null, "5", 8];
console.log("noRay2 has null in it", hasNull(noRay2) === true);
console.log("sampleRay2 has no null in it", hasNull(sampleRay2) === false);
/*
7.43 Create a function called 'badMatrix' that takes a 2D array with 3 rows. 
It should return true if any of the 3 rows contain a null value, otherwise false.
*/
const badMatrix = (array) =>
  array[0].includes(null) || array[1].includes(null) || array[2].includes(null);

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
console.log("weeMatrix is a good matrix", badMatrix(weeMatrix) === false);
console.log("nullriffic is a bad matrix", badMatrix(nullriffic) === true);

/* 7.44 Create a function called 'goodMatrix' that takes a 2D array with 3 rows. It should return true if none of the 3 rows contain a null value, otherwise false.
 */
const goodMatrix = (matrix) => !badMatrix(matrix);

console.log("weeMatrix is a good matrix", goodMatrix(weeMatrix) === true);
console.log("nullriffic is a bad matrix", goodMatrix(nullriffic) === false);

/*7.45 Create a function called 'middleIndex' that takes an array and returns the index of the middle element, as per the following tests.
Tip: Look up the Math.floor() function.*/

const middleIndex = (array) => Math.floor(array.length / 2);

console.log("-- middleIndex tests");
console.log(middleIndex([1]) === 0);
console.log(middleIndex([1, 2]) === 1);
console.log(middleIndex([1, 2, 3]) === 1);
console.log(middleIndex([1, 2, 3, 4]) === 2);
console.log(middleIndex([1, 2, 3, 4, 5]) === 2);

/*7.46 Create a function called 'middle' that takes an array and returns the middle element, as per the following tests.
 */
const middle = (array) => array[middleIndex(array)];

console.log("-- middle tests");
console.log(middle([1]) === 1);
console.log(middle([1, 2]) === 2);
console.log(middle([1, 2, 3]) === 2);
console.log(middle([1, 2, 3, 4]) === 3);
console.log(middle([1, 2, 3, 4, 5]) === 3);
console.log(middle([1, 2, 3, 4, 5, 6]) === 4);

// Practice using the slice() method

/*7.5 Print the first 3 elements of the following array, using slice().
 */
const randomNumbers = [82, 31, 21, 59, 67, 2, 36, 86, 18];
console.log(randomNumbers.slice(0, 3));

/*7.501 Print the middle 3 random numbers, using slice().
 */
console.log(randomNumbers.slice(3, 6));
/*
7.502 Print the last 3 random numbers, using slice().*/
console.log(randomNumbers.slice(-3));
/*
7.51 Create a function called 'tail' that takes an array and returns the "tail" end of it; everything but the first element.
We can't use equality for comparing arrays, so it's tricky to write proper tests for functions like this, which return an array. 
For now, we can simply print the result and see if it looks right. 
The following lines should help you see if your function works correctly.
*/
const tail = (array) => array.slice(1);

console.log("-- tail tests");
console.log(tail([1, 2, 3]), "=== [2, 3]");
console.log(tail([1, 2]), "=== [2]");
console.log(tail([1]), "=== []");
console.log(tail([]), "=== []");

/*7.511 Create a function called 'firstIsRepeated' that 
takes an array and returns true if the first element 
exists more than once in the array, otherwise false.
*/
const firstIsRepeated = (array) => tail(array).includes(array[0]);

//yes, we can use the functions inside the method statement but you have to give it a value inside before the method part

console.log(firstIsRepeated([1, 2, 3, 4, 4, 2, 4]));
/*
7.52 Create a function called 'init' that takes an array and returns all the elements except the last one.
The following lines should help you see if your function works correctly. */

const init = (initArray) => initArray.slice(0, initArray.length - 1);

console.log("-- init tests");
console.log(init([1, 2, 3, 4]), "=== [1, 2, 3]");
console.log(init([1, 2, 3]), "=== [1, 2]");
console.log(init([9]), "=== []");
console.log(init([]), "=== []");

/*
7.521 Create a function called 'lastIsRepeated' that takes an array and returns true if the last element exists more than once in the array, otherwise false.
 */
const lastIsRepeated = (lastArray) =>
  lastArray.slice(0, -1).includes(lastArray[lastArray.length - 1]);

console.log(
  "The array [3,4,1,5,3,4] has a final element of 4 more than once in it",
  lastIsRepeated([3, 4, 1, 5, 3, 4])
);
console.log(
  "The array [3,7,1,5,3,4] has a final element of 4 once in it",
  lastIsRepeated([3, 7, 1, 5, 3, 4]) === false
);
/* 7.522 Create a function called 'inner' that takes an array and returns all the elements except the first and last.
 */
const inner = (innerArray) => innerArray.slice(0, -1);

console.log(
  "The array [3,4,1,5,3,4] chopped at the middle is [4,1,5,3]",
  inner([3, 4, 1, 5, 3, 4]) === true
);
console.log(
  "The array [3,7,1,5,3,4] chopped at the middle is not [4,1,5,3]",
  inner([3, 7, 1, 5, 3, 4]) === false
);

/* 7.53 Create a function called 'take' that takes a number (n) and an array. It should return the first n elements of the array.
The following lines should help you see if your function works correctly.*/

const take = (numberTake, arrayTake) => arrayTake.slice(0, numberTake);

console.log("-- take tests");
console.log(take(3, [1, 2, 3, 4]), "=== [1, 2, 3]");
console.log(take(1, [1, 2, 3, 4]), "=== [1]");
console.log(take(0, [1, 2, 3, 4]), "=== []");
console.log(take(9, [1, 2, 3, 4]), "=== [1, 2, 3, 4]");

/*7.54 Create a function called 'drop' that takes a number (n) and an array. 
It should drop the first n elements of the array and return the rest.
The following lines should help you see if your function works correctly.*/
const drop = (numberDrop, arrayDrop) => arrayDrop.slice(numberDrop);

console.log("-- drop tests");
console.log(drop(0, [1, 2, 3, 4]), "=== [1, 2, 3, 4]");
console.log(drop(1, [1, 2, 3, 4]), "=== [2, 3, 4]");
console.log(drop(2, [1, 2, 3, 4]), "=== [3, 4]");
console.log(drop(3, [1, 2, 3, 4]), "=== [4]");
console.log(drop(4, [1, 2, 3, 4]), "=== []");
console.log(drop(9, [1, 2, 3, 4]), "=== []");

/*7.55 Create a function called 'middle3' that takes an array (of at least 3 elements) and returns the middle 3 elements (as an array), as per the following tests.
The following lines should help you see if your function works correctly.*/

const middle3 = (midArray) =>
  midArray.slice(midArray.length / 2 - 1, midArray.length / 2 + 2);

console.log("-- middle3 tests");
console.log(middle3([1, 2, 3]), "=== [1, 2, 3]");
console.log(middle3([1, 2, 3, 4]), "=== [2, 3, 4]");
console.log(middle3([1, 2, 3, 4, 5]), "=== [2, 3, 4]");
console.log(middle3([1, 2, 3, 4, 5, 6]), "=== [3, 4, 5]");
console.log(middle3([1, 2, 3, 4, 5, 6, 7]), "=== [3, 4, 5]");

/*7.551 Create a function called 'middleN' that takes a number (n) and an array (of at least n elements). It should return the middle n elements.
The following lines should help you see if your function works correctly. */
const middleN = (midN, midNArray) =>
  midNArray.length >= midN
    ? midNArray.slice(
        midNArray.length / 2 - Math.floor(midN / 2),
        midNArray.length / 2 + Math.ceil(midN / 2)
      )
    : "error";

console.log("-- middleN tests");
console.log(middleN(3, [1, 2, 3, 4, 5]), "=== [2, 3, 4]");
console.log(middleN(1, [1, 2, 3, 4, 5]), "=== [3]");
console.log(middleN(1, [1, 2, 3, 4, 5, 6]), "=== [4]");

// Practice using the sort() method

/*7.6 Create a function called 'top3' that takes an array (of at least 3 strings) and returns the first 3 strings that occur in alphabetical order.
The following lines should help you see if your function works correctly.
*/
const top3 = (array) =>
  array.length >= 3 ? array.sort().slice(0, 3) : "error";

console.log("-- top3 tests");
console.log(
  top3(["apple", "date", "cherry", "banana"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  top3(["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['apple', 'apple', 'apple']"
);
console.log(
  top3(["cherry", "banana", "apple"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  top3(["date", "cherry", "banana", "Elderberry"]),
  "=== ['Elderberry', 'banana', 'cherry']"
);

/*7.61 Create a function called 'topN' that takes a number (n) and an array (of at least n strings). 
It should return the first n strings that occur in alphabetical order.
The following lines should help you see if your function works correctly.
*/
const topN = (topNum, arrayN) =>
  arrayN.length >= topNum ? arrayN.sort().slice(0, topNum) : "error";

console.log("-- topN tests");
console.log(
  topN(3, ["apple", "date", "cherry", "banana"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  topN(2, ["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['apple', 'apple']"
);
console.log(
  topN(1, ["apple", "date", "cherry", "Elderberry", "apple", "banana"]),
  "=== ['Elderberry']"
);
console.log(topN(1, ["apple"]), "=== ['apple']");

// Practice using the reverse() method

/*7.7 Create a function called 'bottom3' that takes an array (of at least 3 strings) 
and returns the last 3 strings that occur in reverse alphabetical order.
The following lines should help you see if your function works correctly.
*/
const bottom3 = (arrayBottom) =>
  arrayBottom.length >= 3 ? arrayBottom.sort().reverse().slice(0, 3) : "error";

console.log("-- bottom3 tests");
console.log(
  bottom3(["apple", "date", "cherry", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottom3(["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottom3(["apple", "banana", "cherry"]),
  "=== ['cherry', 'banana', 'apple']"
);

/*7.71 Create a function called 'bottomN' that takes a number (n) and an array (of at least n strings). 
It should return the last n strings that occur in reverse alphabetical order.
The following lines should help you see if your function works correctly.
*/
const bottomN = (botNum, botArray) =>
  botArray.length >= botNum
    ? botArray.sort().reverse().slice(0, botNum)
    : "error";

console.log("-- bottomN tests");
console.log(
  bottomN(3, ["apple", "date", "cherry", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottomN(2, ["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['date', 'cherry']"
);
console.log(
  bottomN(1, ["apple", "date", "cherry", "Elderberry", "apple", "banana"]),
  "=== ['date']"
);
console.log(bottomN(1, ["apple"]), "=== ['apple']");

// Practice adding elements to arrays

/*7.8 Print the following array with the number 4 added to the end, so we get [1, 2, 3, 4].
 */
const oneTwoThree = [1, 2, 3];
const oneTwoThreePlus = [...oneTwoThree, 4];
console.log(oneTwoThreePlus, "===[1,2,3,4]");

/*7.801 Print the following array with the number 1 added to the beginning, so we get [1, 2, 3, 4]. */
const twoThreeFour = [2, 3, 4];
const oneTwoThreeFour = [1, ...twoThreeFour];
console.log(oneTwoThreeFour);

/*7.802 Print the following array with the name 'Dave' added to the end, so we get ['Alice', 'Bob', 'Carol', 'Dave'].*/
const someNames = ["Alice", "Bob", "Carol"];
const moreNames = [...someNames, "Dave"];
console.log(moreNames, "===['Alice', 'Bob', 'Carol', 'Dave']");

/*7.803 Print the following two arrays added together, so we get ['apple', 'banana', 'cherry', 'date', 'elderberry']*/
const fruits = ["apple", "banana", "cherry"];
const moreFruits = ["date", "elderberry"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits, "=== ['apple', 'banana', 'cherry'.'date','elderberry']");

/*7.804 Print the following 2D array with another row added to the end.*/
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const matrix3plus = [...matrix3, [5, 3, 7]];
console.log(matrix3plus, "=== [[1, 2, 3],[4, 5, 6],[5, 3, 7]]");

/*7.81 Create a function called 'nullHead' that takes an array and returns a new array with the first element replaced with null.
The following lines should help you see if your function works correctly.*/

const nullHead = (arrayHead) => [null, ...arrayHead.slice(1)];

console.log("-- nullHead tests");
console.log(nullHead([1, 2, 3]), "=== [null, 2, 3]");
console.log(nullHead(["a", "b", "c"]), "=== [null, b, c]");

/*7.82 Create a function called 'append' that takes a value and an array, and returns a new array with the value added to the end.*/
const append = (constAppend, arrayAppend) => {
  return [...arrayAppend, constAppend];
};
console.log("-- append tests");
console.log(append(1, [2, 3, 4]), "=== [2, 3, 4, 1]");
console.log(append(1, []), "=== [1]");

/*7.821 Create a function called 'appendHead' that takes an array and returns a new array with its first value added to the end.*/

/*
                                    7.83 Create a function called 'swapEnds' that takes an array and returns a new array with the first and last elements swapped.

                                    Tip: Try using our head(), last(), and inner() functions to help.
                                    */

/*
                                    7.84 Create a function called 'countUp' that takes an array of numbers counting up and returns a new array with the next number added to the end.

                                    The following lines should help you see if your function works correctly.

                                    Tip: Try using our last() function to help.
                                    */

console.log("-- countUp tests");
console.log(countUp([1, 2, 3]), "=== [1, 2, 3, 4]");
console.log(countUp([25, 26, 27, 28, 29]), "=== [25, 26, 27, 28, 29, 30]");

/*
                                    7.841 Create a function called 'countMore' that takes an array of numbers in a sequence (with a constant interval) and returns a new array with the next number in the sequence added to the end.

                                    The following lines should help you see if your function works correctly.
                                    */

console.log("-- countMore tests");
console.log(countMore([1, 2, 3]), "=== [1, 2, 3, 4]");
console.log(countMore([2, 4, 6]), "=== [2, 4, 6, 8]");
console.log(countMore([1, 3, 5, 7]), "=== [1, 3, 5, 7, 9]");
console.log(countMore([10, 20, 30, 40, 50]), "=== [10, 20, 30, 40, 50, 60]");
console.log(countMore([-1, -2, -3]), "=== [-1, -2, -3, -4]");

/*
                                    7.85 Create a function called 'insertAt' that takes an index, a value, and an array. It should return a new array with the given value inserted at the given index.

                                    The following lines should help you see if your function works correctly.

                                    Tip: Try using our take() and drop() functions to help.
                                    */

console.log("-- insertAt tests");
console.log(insertAt(3, 4, [1, 2, 3, 5]), "=== [1, 2, 3, 4, 5]");
console.log(insertAt(4, 5, [1, 2, 3, 4]), "=== [1, 2, 3, 4, 5]");
console.log(insertAt(2, "c", ["a", "b", "d"]), "=== [a, b, c, d]");

/*
                                    7.86 Create a function called 'addToShoppingList' that takes a shopping list (array of strings) and an item (string). It should return a shopping list with the new item added to it. If the item is already in the shopping list, return the shopping list unchanged.
                                    */
