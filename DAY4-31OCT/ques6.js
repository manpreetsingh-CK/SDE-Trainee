//Write a function filterEvens that takes an array of numbers and returns 
// a new array containing only the even numbers. Use the filter method.

//filterEvens([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]

const arr=[1,2,3,4,5];

const result=arr.filter((arr)=> arr%2==0);
console.log(result)