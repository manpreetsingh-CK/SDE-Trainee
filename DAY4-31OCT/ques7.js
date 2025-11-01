//Write a function doubleValues that takes an array of numbers and 
// returns a new array where each number is doubled. Use the map method.

const number=[1,20,30,44,55];
const doubleValues=(number)=>{
    return number.map(function(num){
        return num*2;
    });
}

const result=doubleValues(number);
console.log(result)