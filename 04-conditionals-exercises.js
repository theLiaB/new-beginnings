//wondering where the extra space between lines is coming from - Lia

// Practice with a single number
const num = 12;

// Ignore any lines that look like this
process.stdout.write("1. ");

/*
1. Only print the following message if num is greater than 10.
Try changing the value of num to make sure your code works.
*/
if (num > 10) {
    console.log("num is greater than 10");
}

process.stdout.write("\n2. ");
/*
2. Only print the message 'num is less than 100' when appropriate.
*/
if (num < 100) {
    console.log("num is less than 100");
}

process.stdout.write("\n3. ");
/*
3. Now do the same with 'num is a positive number'.
*/
if (num >= 0) {
    console.log("num is positive");
}

process.stdout.write("\n4. ");
/*
4. 'num is between 10 and 100' (exclusive)
*/
if (num > 10 && num < 100) {
    console.log("num is b/w 10 and 100");
}

process.stdout.write("\n5. ");
/*
5. 'num is even'
*/
if (num % 2 === 0) {
    console.log("num is even");
} else {
    console.log("num is odd");
}

process.stdout.write("\n6. ");
/*
6. 'num is an even number between 20 and 30' (inclusive)
*/
if (num % 2 === 0 && ((num) => 20) && num <= 30) {
    console.log("num is even and between 20 and 30");
}

process.stdout.write("\n7. ");
/*
7. 'num is odd or negative'
*/
if (num % 2 === 1 || num < 0) {
    console.log("num is odd or negative");
}

// Practice comparing numbers
const x = 3;
const y = 5;

process.stdout.write("\n8. ");
process.stdout.write("The bigger number is: ");
/*
8. Print either x or y, whichever is bigger.
*/
if (x > y) {
    console.log("x");
} else {
    console.log("y");
}

process.stdout.write("\n9. ");
/*
9. Print either the message 'x and y are equal' or 'x and y are not equal'.
*/
if (x === y) {
    console.log("x and y are equal");
} else {
    console.log("x and y are not equal");
}

// Let's add another number into the mix.
const z = 10;

process.stdout.write("\n10. ");
process.stdout.write("The biggest number is: ");
/*
10. Print either x, y, or z, whichever is bigger.
Remember to change the values of x, y, and z to make sure it works!
*/
if (x > y && x > z) {
    console.log("x");
} else if (y > x && y > z) {
    console.log("y is biggest");
} else {
    console.log("z");
}

// Practice with more operators
const walletInCents = 126;
const priceInDollars = -1.25;

process.stdout.write("\n11. ");
/*
11. Print 'Exact amount!' when the wallet contains the exact amount for the price. Print 'More than enough.' when there is more than enough money in the wallet. Print 'Not enough money.' when there is not enough money in the wallet.

Notice that the wallet is in cents and the price is in dollars, so you'll have to do a bit of work to compare them.
*/
const priceInCents = priceInDollars * 100;
if (priceInCents === walletInCents) {
    console.log("Exact amount!");
} else if (priceInCents < walletInCents) {
    console.log("More than enough");
} else {
    console.log("Not enough money");
}

process.stdout.write("\n12. ");
/*
12. Do the same thing as in 11, but let's add in some error handling. In the case where the wallet is negative, print 'Wallet cannot be negative.' When the price is negative, print 'Price cannot be negative.' Think about the importance of the order of the */
if (walletInCents < 0 && priceInCents < 0) {
    console.log("neither price or wallet value can be negative");
} else if (walletInCents < 0) {
    console.log("wallet cannot be negative");
} else if (priceInCents < 0) {
    console.log("price cannot be negative");
} else if (priceInCents === walletInCents) {
    console.log("Exact amount!");
} else if (priceInCents < walletInCents) {
    console.log("More than enough");
} else {
    console.log("Not enough money");
}

// Practice comparing strings
let username = "Alice";
let password = "1234";
const expectedUsername = "Alice";
const expectedPassword = "1234";

process.stdout.write("\n13. ");
/*
13. To simulate authentication, we have a username, a password, and expected values for each. The login is successful if the username and password match the expected values. Otherwise, either the username is wrong or the password is wrong. Print appropriate messages for each of the 3 cases. (Don't worry about the case where the username and password are both wrong; one of the other cases will catch it.)
*/
if (expectedUsername === username && expectedPassword === password) {
    console.log("Logged in!");
} else if (expectedUsername !== username) {
    console.log("username is wrong");
} else {
    console.log("password is wrong");
}

// Practice nesting conditionals
const a = -1;
const b = 1;

process.stdout.write("\n14. ");
/*
14. Print the appropriate message for any of the following cases comparing a and b:

Matching positive numbers.
Matching negative numbers.
No match of positive numbers.
No match of negative numbers.
No match.
*/
if (a === b) {
    if (a > 0) {
        console.log("Matching + #s");
    } else {
        console.log("Matching - #s");
    }
} else if (a > 0 && b > 0) {
    console.log("No match of positive numbers");
} else if (a < 0 && b < 0) {
    console.log("No match of negative numbers");
} else {
    console.log("No match");
}

// Practice with more information
const myUsername = "Zarya";
const myPassword = "9876";
const salary = 80000;

const employeeUsername = "Zarya";
const employeePassword = "9876";
const ceoUsername = "Xyrho";
const ceoPassword = "hunter2";
const juniorSalaryMinimum = 50000;
const juniorSalaryMaximum = 70000;
const intermediateSalaryMinimum = 75000;
const intermediateSalaryMaximum = 90000;
const seniorSalaryMinimum = 95000;
const seniorSalaryMaximum = 120000;
const ceoSalaryMinimum = 110000;

process.stdout.write("\n15. ");
/*
15. We have another authentication, but this time with a salary as well. 
We want to print a personalized welcome message to users who log in. 
For example, if the username and password match the employee username and 
password and their salary is within the junior range, print 'Welcome, junior employee Zarya.'
 In the case where the salary is not within any of the set ranges, simply print 
 'Welcome, employee Zarya.' If the username and password match the CEO credentials 
 but the salary is below the CEO's minimum salary, we have an imposter! For an invalid login, 
 just print 'Invalid login.' (don't worry about whether it was the username or password that didn't match).

If you notice you're repeating a certain condition more than once, try nesting if statements to avoid the repeitition.
*/
if (myUsername === employeeUsername && myPassword === employeePassword) {
    if (salary <= juniorSalaryMaximum && salary >= juniorSalaryMinimum) {
        console.log("Welcome, junior employee Zarya.");
    } else if (salary < juniorSalaryMinimum) {
        console.log("You`re underpaid!");
    } else {
        console.log("Welcome, employee Zarya.");
    }
} else if (myPassword === ceoPassword && myUsername === ceoUsername) {
    if (salary >= ceoSalaryMinimum) {
        console.log("Welcome, CEO!");
    } else {
        console.log("Imposter!");
    }
} else {
    console.log("Invalid login!");
}

/*Thoughts on how to divide up the problem response:Error handling right away and do happy path after or the opposite.
Benefit of doing error handling first is that there isn't digging down into the code block to get to changing things.
Also consider going around the user journey. *\

// Practice complex conditions


/*
16. Print a message saying whether the credit card number is valid or not. A valid credit card in this system must have all of the following properties:

- It is exactly 5 digits
- doesn't begin with any 0's
- Tripling it gives an even number
- It is divisible by either 5 or 7
*/

process.stdout.write("\n16. ");
const creditCard = [1, 2, 4, 7, 7];

if (creditCard[0] === 0) {
    console.log("card number can't start with 0");
} else if (creditCard.length < 5) {
    console.log("card number is too short");
} else if (creditCard.length > 5) {
    console.log("card number is too long");
} else if (creditCard.length > 5) {
    console.log("card number is too long");
} else if (creditCard % 2 === 1) {
    console.log("card number *3 is not even");
} else {
    console.log(creditCard);
}
/* Missing - Tripling it gives an even number and It is divisible by either 5 or 7.
I can't figure out hwo ot convert fro an array to a single number comprised of the array in order */