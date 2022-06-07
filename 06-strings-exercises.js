/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// Practice using string index

/*
6.1 Print the third letter of the alphabet string.
*/
const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[2]);

/*
6.11 Print the last letter of the alphabet string, without using the length property.
*/
console.log(alphabet[25]);
/*
6.12 Create a function called 'numLetter' that takes a number, n, and returns the nth letter of the alphabet. If n is 3, it should return the third letter, 'c'.
Remember to write some lines of code to test if your function works correctly.
*/
const numLetter = (n) => {
    return alphabet[n - 1];
};

console.log("The 3rd letter of the alphabet is c: ", numLetter(3) === "c");
console.log("The 5th letter of the alphabet is not c: ", numLetter(5) !== "c");

/*
6.13 Create a function called 'isAtIndex' that takes a character, a number, and a string. 
It should return true if the character is found at the index number of the string, otherwise false.
The following lines should help test if your function works correctly. They should print true.
*/
const isAtIndex = (inputChar, inputNum, inputStr) => {
    if (inputStr[inputNum] === inputChar) {
        return true;
    } else {
        return false;
    }
};

console.log("e is at index 1 in hello:", isAtIndex("e", 1, "hello") === true);
console.log("e is at index 4 in Alice:", isAtIndex("e", 4, "Alice") === true);

// Practice using length
/*6.2 Print the length of the alphabet string.*/
console.log(alphabet.length);

/*6.21 Print the last letter of the alphabet string, using the length property.*/
console.log(alphabet[alphabet.length - 1]);

/*6.22 Try to figure out the length of the string c in your head, then print it to see if you got it right.*/
const a = "alpha";
const b = "bet";
const c = a + b;
console.log(c.length);

// Practice using methods

/*6.3 Create a function called 'inAlphabet' that takes a string and returns true if it is included in the alphabet, otherwise false. 
It only needs to work on lowercase letters.
Use the includes() method.
The following lines should help test if your function works correctly. They should print true.*/

const inAlphabet = (isInAlphabestInput) => {
    if (alphabet.includes(isInAlphabestInput)) {
        return true;
    } else {
        return false;
    }
};

console.log("a is in the alphabet:", inAlphabet("a") === true);
console.log("lmno is in the alphabet:", inAlphabet("lmno") === true);
console.log("1 is not in the alphabet:", inAlphabet("1") === false);

/*
6.301 Create a function called 'isDigit' that takes a digit as a string and 
returns true if it is included in the following string, otherwise false.
The following lines should help test if your function works correctly. They should print true.*/
const digits = "1234567890";
const isDigit = (testDigit) => {
    if (digits.includes(testDigit)) {
        return true;
    } else {
        return false;
    }
};
console.log("1 is a digit:", isDigit("1") === true);
console.log("9 is a digit:", isDigit("9") === true);
console.log("a is not a digit:", isDigit("a") === false);

/*6.302 Create a function called 'isInTrouble' that takes a name and returns true 
if it is included in the email text.*/

const email = `Hello all.

As you know, last quarter was suboptimal. We did not meet the expected revenue and things need to change. There are a few people invited to a special meeting at 1PM today in the conference room. From engineering, Dilbert, Wally, and Alice. Asok the intern. Mordac from management.

If your name was not stated, continue work as usual. Sincerely, PHB.`;

const isInTrouble = (nameOfEmployee) => {
    if (email.includes(nameOfEmployee)) {
        return true;
    } else {
        return false;
    }
};
console.log("Wally is in trouble:", isInTrouble("Wally") === true);
console.log("Steve is not in trouble", isInTrouble("Steve") === false);

/*6.303 Create a function called 'badLanguage' that takes a message and 
returns true if it contains any bad language, otherwise false. 
The bad language phrases are: butt face, poopy head, and snot brain.*/
const badLanguage = (message) => {
    if (
        message.includes("butt face") ||
        message.includes("poopy head") ||
        message.includes("snot brain")
    )
        return true;
    else {
        return false;
    }
};

console.log("butt is bad language", badLanguage("butt face") === true);
console.log("pickles is not bad language", badLanguage("pickles") === false);

/*6.31 Create a function called 'IsBasicQuestion' that takes a sentence and returns true if it is a 
basic question, otherwise false. A basic question begins with one of the five Ws
 (Who, What, When, Where, Why) and ends with a question mark.*/
const IsBasicQuestion = (question) => {
    if (
        (question.startsWith("Who") ||
            question.startsWith("What") ||
            question.startsWith("When") ||
            question.startsWith("Where") ||
            question.startsWith("Why")) &&
        question.endsWith("?")
    )
        return true;
    else {
        return false;
    }
};
console.log(
    "`Who is your father` is a basic question",
    IsBasicQuestion("Who is your father?") === true
);
console.log(
    "`Do you have pepsi?` is not a basic question",
    IsBasicQuestion("Do you have pepsi?") === false
);
console.log(
    "`Do you have coke` is not a question",
    IsBasicQuestion("Do you have coke") === false
);
/*
6.32 Create a function called 'validURL' that takes a string and returns true if it is a valid URL,
 otherwise false. For our sake, a valid URL must start with either "http://" or "https://" and 
 end with any of: ".com", ".ca", or ".org".*/
const validURL = (inputString) => {
    if (
        (inputString.startsWith("http://") || inputString.startsWith("https://")) &&
        (inputString.endsWith(".com") ||
            inputString.endsWith(".ca") ||
            inputString.endsWith(".org"))
    ) {
        return true;
    } else {
        return false;
    }
};

console.log(
    "http://lia.com is a valid URL",
    validURL("http://lia.com") === true
);
console.log(
    "htt://lia.com is not a valid URL",
    validURL("htt://lia.com") === false
);
console.log(
    "http://lia.cm is not a valid URL",
    validURL("http://lia.cm") === false
);
/*6.33 Create a function called 'firstSpace' that takes a string and 
returns the index of its first space character, or -1 if there is no space.
*/

const firstSpace = (lookForSpace) => {
    if (lookForSpace.includes(" ")) {
        return lookForSpace.indexOf(" ");
    } else {
        return -1;
    }
};

console.log(
    "this sentence's first space is at index 4",
    firstSpace("this sentence has spaces") === 4
);
console.log(
    "Thissentencehasnospaces",
    firstSpace("Thissentencehasnospaces") === -1
);

/*6.331 Create a function called 'firstOfLast' that takes a full name 
(e.g. "John Smith") and returns the first letter of the last name (e.g. "S").
 How can you use the firstSpace() function to make this easier?
*/
const firstOfLast = (fullName) => {
    return fullName.slice(firstSpace(fullName) + 1, firstSpace(fullName) + 2);
};

console.log(
    "John Smith's last name's first letter is S",
    firstOfLast("John Smith") === "S"
);
console.log(
    "Julie Andrews Dawson's last name's first letter is A",
    firstOfLast("Julie Andrews Dawson") === "A"
);

/*6.332 Create a function called 'initials' that takes a full name (e.g. "Jane Doe") 
and returns the initials (e.g. "J.D."). How can you use firstOfLast() to make this easier?
*/

const initials = (fullN) => {
    return fullN[0] + "." + firstOfLast(fullN) + ".";
};

console.log(
    "John Smith's initials are J.S.",
    initials("John Smith") === "J.S."
);
console.log(
    "Julie Andrews Dawson's initials are not J.D.",
    initials("Julie Andrews Dawson") !== "J.D."
);

/*6.34 Create a function called 'capitalize' that takes a word (e.g. "hello") and returns the same word, but with the first letter capitalized (e.g. "Hello").
 */
const capitalize = (wordUp) => {
    const newWordUp = wordUp.toUpperCase();
    return newWordUp[0];
};
console.log(
    "john's first letter in upper case is J",
    capitalize("john") === "J"
);
console.log(
    "sally's first letter in upper case is not A",
    capitalize("sally") === "S"
);

/*6.35 Create a function called 'rhetorical' that takes a rhetorical question and returns the same question, but ending with a period instead of a question mark.
 */
const rhetorical = (rQuest) => {
    return rQuest.slice(0, rQuest.length - 1) + ".";
};

console.log(
    "what's your problem? turns into what's your problem.",
    rhetorical("what's your problem?") === "what's your problem."
);

/*6.36 Create a function called 'couldBeWord' that takes a made up word and returns true 
if it could be a word, otherwise false. Only made up words containing at least one vowel 
(a, e, i, o, u) could be words.
 */
const couldBeWord = (couldBWord) => {
    if (
        couldBWord.includes("a") === true ||
        couldBWord.includes("e") === true ||
        couldBWord.includes("i") === true ||
        couldBWord.includes("o") === true ||
        couldBWord.includes("u") === true
    ) {
        return true;
    } else {
        return false;
    }
};

console.log("this is a word", couldBeWord("this") === true);
console.log("thss is not a word", couldBeWord("thss") === false);

/*6.37 Create a function called 'fixSentence' that takes a sentence and returns the fixed version. 
The first letter should be capitalized, 
and a period should be added if the original does not end with punctuation (period, question mark, or exclamation mark).
*/
const fixSentence = (sentence) => {
    const firstL = sentence.charAt(0);
    const capitalize = firstL.toUpperCase();
    //looks at the first character and capitalizes it no matter what

    const end = sentence.charAt(sentence.length - 1);
    if (end === "." || end === "?" || end === "!") {
        return capitalize + sentence.slice(1, sentence.length);
    } else {
        return capitalize + sentence.slice(1, sentence.length) + ".";
    }
};

console.log(fixSentence("hello there"));
console.log(fixSentence("hesa?"));
console.log(fixSentence("hes shs rer."));
console.log(fixSentence("?hes shs rer"));

/*6.38 Create a function called 'alternating' that takes a number and returns 
an alternating string of that many 1s and 0s.
                1: 1
                2: 10
                3: 101
                4: 1010
                5: 10101
                ... */

const alternating = (inNum) => {};
console.log(alternating(7));

/*6.4 Create a function called 'hasDigit' that takes a string and returns 
true if it contains any digits, otherwise false.
 */

const hasDigit = (string) => {
    if (
        string.includes(1) ||
        string.includes(2) ||
        string.includes(3) ||
        string.includes(4) ||
        string.includes(5) ||
        string.includes(6) ||
        string.includes(7) ||
        string.includes(8) ||
        string.includes(9) ||
        string.includes(0)
    ) {
        return true;
    } else {
        return false;
    }
};

console.log("feifibe032hj4r had digits", hasDigit("feifibe032hj4r") === true);
console.log("feif does not have digits", hasDigit("feif") === false);

/* 6.41 Create a function called 'hasPunctuation' that takes a string and
returns true if it contains any punctuation (., !, ?), otherwise false.
 */

const hasPunctuation = (punct) => {
    if (
        punct.includes(",") ||
        punct.includes(".") ||
        punct.includes("?") ||
        punct.includes("!")
    ) {
        return true;
    } else {
        return false;
    }
};

hasDigit("feifibe032hj4r!!");
hasDigit("feif234");
console.log(
    "feifibe032hj,4r! had punctuation",
    hasPunctuation("feifibe032hj,4r!") === true
);
console.log(
    "feif234 does not have punctuation",
    hasPunctuation("feif234") === false
);

/*6.42 Create a function called 'validPassword' that takes a password and 
returns true if it is valid, otherwise false.
                A valid password must:
                - be at least 6 characters long
                - contain a digit
                - contain a character of punctuation (., !, ?)
                */
const validPassword = (vPass) => {
    if (
        vPass.length >= 6 &&
        hasDigit(vPass) === true &&
        hasPunctuation(vPass) === true
    ) {
        return true;
    } else {
        return false;
    }
};

console.log(
    "feifibe032hj4r! is a valid pass",
    validPassword("feifibe032hj4r!") === true
);
console.log(
    "feifurr does not have digits or punctuation",
    validPassword("feifurr") === false
);
console.log(
    "feif12 does not have punctuation",
    validPassword("feif12") === false
);
console.log("feif!! does not have digits", validPassword("feif!!") === false);
console.log("feif is too short", validPassword("feif") === false);

/* 6.43 Create a function called 'betterPassword' that takes two passwords and 
returns the better of the two. A password is considered better if it gets more points. 
Each character in the password counts for 1 point. 
Including any digits counts for an additional 5 points (flat, not for each digit). 
Including any punctuation (., !, ?) counts for an additional 10 points (flat, not for each punctuation).
 */

const betterPassword = (pass1, pass2) => {
    pass1P1 = pass1.length;
    pass2P1 = pass2.length;
    pass1P2 = hasDigit(pass1);
    pass2P2 = hasDigit(pass2);
    pass1P3 = hasPunctuation(pass1);
    pass2P3 = hasPunctuation(pass2);

    pass1Points = pass1P1 + pass1P2 + pass1P3;
    pass2Points = pass2P1 + pass2P2 + pass2P3;
    if (pass1Points > pass2Points) {
        return console.log("Password 1 is better");
    } else if (pass1Points < pass2Points) {
        return console.log("Password 2 is better");
    } else {
        return console.log("They are equal");
    }
};

betterPassword("123!!jfjfjfjfjfj", "abc");
betterPassword("abc", "123!!jfjfjfjfjfj");
betterPassword("144!!jfjfjfjfjfj", "123!!jfjfjfjfjfj");