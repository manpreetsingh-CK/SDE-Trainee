
// 13. Flatten Nested Arrays
// Write a function flattenArray that takes a nested array and returns a flattened array. Use recursion and/or ES6 methods to solve this problem.
// Example:
// flattenArray([1, [2, [3, [4, 5]]]]); // Output: [1, 2, 3, 4, 5]

function flattenArrayFxn(arr){
    var newArr=[];
    arr.forEach(element => {
        if(Array.isArray(element)){
            newArr=newArr.concat(flattenArrayFxn(element));
        }else{
            newArr.push(element);
        }
    });
    return newArr;
}

var arr=[1, [2, [3, [4, 5]]]];
console.log(flattenArrayFxn(arr));