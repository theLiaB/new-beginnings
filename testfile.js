/*7.511 Create a function called 'firstIsRepeated' that 
takes an array and returns true if the first element 
exists more than once in the array, otherwise false.
*/
const firstIsRepeated = (array) => {
    const end = array.slice(1);
    return end.includes(array[0]);
};
console.log(firstIsRepeated([1, 2, 3, 4, 4, 2, 4]));