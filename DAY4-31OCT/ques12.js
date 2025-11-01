// 12. Deep Clone Objects
// Write a function deepClone that creates a deep copy of a given object. Ensure that nested objects and arrays are properly cloned without retaining references to the original object.
// Example:
// const obj = { a: 1, b: { c: 2 } };
// const clonedObj = deepClone(obj);
// clonedObj.b.c = 42;
// console.log(obj.b.c); // Output: 2

//1st method using stuctured clone
// function deepClone(obj) {

//     var deepCopy=structuredClone(obj);
//     return deepCopy;

// }

// var obj={ a: 1, b: { c: 2 } };
// var deepCopy=deepClone(obj);
// deepCopy.b.c=7;

// console.log(deepCopy.b.c)
// console.log(obj.b.c)

//2nd method
var obj = { a: 1, b: { c: 2 } };

var deepCopy=JSON.parse(JSON.stringify(obj));
deepCopy.b.c=7;
console.log(obj.b.c)

console.log(deepCopy.b.c)
