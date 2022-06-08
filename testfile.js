const areaDifference = ([length1, width1], [length2, width2]) => {
    const area1 = length1 * width1;
    const area2 = length2 * width2;
    console.log(Math.abs(area1 - area2));
};
areaDifference([1, 2], [3, 3]);