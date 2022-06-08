const volumeDifference = ([a1, b1, c1], [a2, b2, c2]) => {
    const vol1 = a1 * b1 * c1;
    const vol2 = a2 * b2 * c2;
    return Math.abs(vol1 - vol2);
};
console.log(
    "The difference between 6 and 210 is 204",
    volumeDifference([1, 2, 3], [5, 6, 7]) === 204
);