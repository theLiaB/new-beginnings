const head = (array1) => {
    return array1[0];
};
console.log(
    "1 is the first character in array [1,2,4,5]",
    head([1, 3, 4, 5]) === 1
);
console.log(
    "1 is the first character in array [abc, 123, doremi] ",
    head(["abc", 123, "doremi"]) === "abc"
);