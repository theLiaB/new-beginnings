const hasNull = (array) => (array.includes(null) ? true : false);

const noRay2 = [null, "5", 8];
console.log("noRay2 has null in it", hasNull(noRay2) === true);