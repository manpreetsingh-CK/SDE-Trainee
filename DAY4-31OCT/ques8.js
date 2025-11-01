
// Write a function findMax that takes an array of numbers and returns the largest number in the array. Use the spread operator.
// Example:
// findMax([3, 5, 7, 2, 8]); // Output: 8

var no=[1,2,3,4,9,10];

function findMax(){
    return Math.max(...no)
}
console.log(findMax());