// Practice calling a function with no arguments

/*
5.1 Call the following function.
*/
const sayHello = () => {
    console.log("Hello, world!");
};
sayHello();

/*
5.11 Call the following function.
*/
const sayHelloLonger = () => {
    console.log("Hello!");
    console.log("Bonjour!");
    console.log("Guten Tag!");
};
sayHelloLonger();

// Practice creating a function with no arguments

/*
5.2 Create a function so the following line of code prints the message 'Welcome!'
*/

const sayWelcome = () => {
    console.log("Welcome!");
};
sayWelcome();

// Practice calling a function with one argument

/*
5.3 Call the following function, providing a language as the argument.
*/
const sayHelloLanguage = (language) => {
    if (language === "English") {
        console.log("Hello!");
    } else if (language === "French") {
        console.log("Bonjour!");
    } else if (language === "German") {
        console.log("Guten Tag!");
    } else {
        console.log("Unknown language");
    }
};
sayHelloLanguage("French");

// Practice creating a function with one argument

/*
5.4 Create a function called 'greet' that takes a name as an argument.
Call the function a few times to achieve the same goal as the following lines of code.
*/
const greet = (personName) => {
    console.log("Hello, " + personName + "!");
};
greet("Bob");
greet("alice");

/*
5.41 Create a function called 'isPositive' that takes a number as an argument and returns true if the number is positive (greater than 0), otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const isPositive = (trial) => trial > 0;

console.log("10 is positive:", isPositive(10) === true);
console.log("-10 is not positive:", isPositive(-10) === false);

/*
5.411 Create a function called 'isNegative' that takes a number as an argument and returns true if the number is negative (less than 0), otherwise false.

The following lines should help test if your function works correctly.
*/
const isNegative = (num) => num < 0;

console.log("10 is not negative:", isNegative(10) === false);
console.log("-10 is negative:", isNegative(-10) === true);

/*
        5.42 Create a function called 'isEven' that takes a number as an argument and returns true if the number is even, otherwise false.
        Write some lines of code to test if your function works correctly.
                 */
const isEven = (evenNumTest) => evenNumTest % 2 === 0;

console.log("1 is not even:", isEven(1) === false);
console.log("10 is even:", isEven(10) === true);

/*
5.421 Create a function called 'isOdd' similar to isEven. Can you use isEven to make this function?
*/

const isOdd = (testNumber) => !isEven(testNumber);

console.log("2 is not odd:", isOdd(2) === false);
console.log("1 is odd:", isOdd(1) === true);

/*
5.43 Create a function called 'isValidCreditCard' that takes a credit card number 
and returns true if it is valid, otherwise false.
Refer to the credit card exercise in conditionals.
*/

const isValidCreditCard = (creditCard) => {
    const cardNumber = Number(creditCard.join(""));
    const tripleCardNumber = cardNumber * 3;
    if (
        creditCard[0] === 0 ||
        creditCard.length < 5 ||
        creditCard.length > 5 ||
        tripleCardNumber % 2 === 1 ||
        (cardNumber % 5 !== 0 && cardNumber % 7 !== 0)
    ) {
        return false;
    } else {
        return true;
    }
};
console.log(
    "card number 87192 is valid:",
    isValidCreditCard([8, 7, 1, 9, 2]) === true
);
console.log(
    "card number 87193 is invalid:",
    isValidCreditCard([8, 7, 1, 9]) === false
);
console.log(
    "card number 87193 is invalid:",
    isValidCreditCard([8, 7, 1, 8, 3]) === true
);
/*
5.44 Create a function called 'dollarsToCents' that takes a value in dollars and returns the corresponding value in cents.
 */
const dollarsToCents = (dollars) => {
    return dollars * 100;
};

console.log("2 dollars is 200 cents:", dollarsToCents(2) === 200);
console.log("4 dollars is not 500 cents:", dollarsToCents(4) !== 500);

/*
5.45 Create a function called 'fToC' that takes a temperature in Fahrenheit and returns the temperature in Celsius.
*/
const fToC = (Fahrenheit) => {
    return Math.round((Fahrenheit - 32) * (5 / 9));
};

console.log("-30 F is about -34.4 C:", fToC(-30) === -34);
console.log("-20 F is not -30 C", fToC(-20) !== -30);
/*
5.451 Create a function called 'cToF' that takes a temperature in Celsius and returns the temperature in Fahrenheit.
*/
const cToF = (Celsius) => {
    return Math.round(Celsius * (9 / 5) + 32);
};

console.log("-34.4 C is about -30 F:", cToF(-34.4) === -30);
console.log("-30 C is not -20 F", cToF(-30) !== -20);
// Practice calling a function with multiple arguments

/*
 5.5 Call the following function, providing a name and a language.
*/
const greetLanguage = (name, language) => {
    if (language === "English") {
        console.log("Hello, " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour, " + name + "!");
    } else if (language === "German") {
        console.log("Guten Tag, " + name + "!");
    } else {
        console.log("Unknown language");
    }
};
greetLanguage("Henry", "French");
greetLanguage("Marie", "German");

/*
5.51 Write some lines of code to test if the following function multiplies 3 numbers together correctly.
*/
const multiplyAll = (a, b, c) => {
    return a * b * c;
};

console.log("1*2*3 = 6 :", multiplyAll(1, 2, 3) === 6);
console.log("7*8*9 = 5 :", multiplyAll(7, 8, 9) === 5);
// Practice creating a function with multiple arguments

/*
5.6 Create a function called 'languageGreeting' that takes a name and a language and returns a greeting instead of printing it.
The following lines should help test if your function works correctly. They should print true.
*/

const languageGreeting = (name1, language1) => {
    if (language1 === "English") {
        return "Hello, " + name1 + "!";
    } else if (language1 === "French") {
        return "Bonjour, " + name1 + "!";
    } else if (language1 === "German") {
        return "Guten Tag, " + name1 + "!";
    } else {
        return "Unknown language";
    }
};

console.log(
    "English greeting works:",
    languageGreeting("Alice", "English") === "Hello, Alice!"
);
console.log(
    "French greeting works:",
    languageGreeting("Alice", "French") === "Bonjour, Alice!"
);
console.log(
    "German greeting works:",
    languageGreeting("Alice", "German") === "Guten Tag, Alice!"
);
console.log(
    "Unknown language works:",
    languageGreeting("Alice", "gibberish") === "Unknown language"
);

/*
5.61 Create a function called 'lovers' that takes two names and returns a string that the first name loves the second name.

The following lines should help test if your function works correctly. They should print true.
*/
const lovers = (love1, love2) => {
    return love1 + " loves " + love2;
};
console.log("Alice loves Bob:", lovers("Alice", "Bob") === "Alice loves Bob");
console.log("Bob loves Alice:", lovers("Bob", "Alice") === "Bob loves Alice");

/*
5.62 Create a function called 'convertTemperature' that takes a number and either 'FtoC' or 'CtoF', and returns the converted temperature. How can you use the functions from 5.45 and 5.451 to make this easier?

The following lines should help test if your function works correctly. They should print true. */
const convertTemperature = (numToConvert, functionName) => {
    if (functionName === "FtoC") {
        return fToC(numToConvert);
    } else if (functionName === "CtoF") {
        return cToF(numToConvert);
    }
};

console.log("32 F = 0 C:", convertTemperature(32, "FtoC") === 0);
console.log("0 C = 32 F:", convertTemperature(0, "CtoF") === 32);

/*
5.63 Create a function called 'divisibleBy' that takes two numbers and returns true if the first number is divisible by the second, otherwise false.

The following lines should help test if your function works correctly. They should print true.*/

const divisibleBy = (numtoDiv, divideByThisNum) =>
    numtoDiv % divideByThisNum === 0;

console.log("5 is not divisible by 3:", divisibleBy(5, 3) === false);
console.log("1 is divisible by 1:", divisibleBy(1, 1) === true);
console.log("6 is divisible by 2:", divisibleBy(6, 2) === true);
console.log("6 is divisible by 3:", divisibleBy(6, 3) === true);

/*
5.64 Create a function called 'bonusTime' that takes a number (salary) and a boolean (bonus). If the second argument is true, return the salary multiplied by 10, otherwise the original salary.
Write some lines of code to test if your function works correctly.*/

const bonusTime = (salary, bonus) => {
    if (bonus === true) {
        return salary * 10;
    } else {
        return salary;
    }
};

console.log(
    "salary of 20 000 with bonus is 200 000:",
    bonusTime(20000, true) === 200000
);
console.log(
    "salary of 20 000 without bonus is 20 000:",
    bonusTime(20000, false) === 20000
);

/*
5.65 Create a function called 'rps' for playing the game Rock, Paper, Scissors. It should take two arguments, which should each be either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, return 1. If the first hand loses, return -1. In the case of a draw, return 0.
Write some lines of code to test if your function works correctly.*/

const rps = (first, second) => {
    if (
        (first === "rock" && second === "scissors") ||
        (first === "scissors" && second === "paper") ||
        (first === "paper" && second === "rock")
    ) {
        return 1;
    } else if (
        (second === "rock" && first === "scissors") ||
        (second === "scissors" && first === "paper") ||
        (second === "paper" && first === "rock")
    ) {
        return -1;
    } else {
        return 0;
    }
};

console.log(
    "rock, scissors and paper beats scissors, paper and rock respectively",
    rps("rock", "scissors") === 1
);
console.log(
    "scissors, paper and rock are respectively beaten by rock, scissors and paper",
    rps("rock", "paper") === -1
);
console.log("two of the same response make a tie", rps("paper", "paper") === 0);