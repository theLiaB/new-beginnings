const fixSentence = (sentence) => {
    const firstL = sentence.charAt(0);
    const capitalize = firstL.toUpperCase();
    //looks at the first character and capitalizes it no matter what
    if (
        sentence.charAt(sentence.length - 1) !== "." ||
        sentence.charAt(sentence.length - 1) !== "?" ||
        sentence.charAt(sentence.length - 1) !== "!"
    ) {
        console.log(sentence.charAt(sentence.length - 1) !== "!");
        return capitalize + sentence.slice(1, sentence.length) + ".";
    } else {
        return capitalize + sentence.slice(1, sentence.length);
    }
};

console.log(fixSentence("hello there"));
console.log(fixSentence("hesa?"));
console.log(fixSentence("hes shs rer!"));
console.log(fixSentence("?hes shs rer"));