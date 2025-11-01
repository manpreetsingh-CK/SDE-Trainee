// Write a function sumAll that takes any number of arguments and 
// returns their sum. Use the rest operator to handle the arguments.

function sumAll(...parameter){
    var sum=0;
    for(var i in parameter){
        sum+=parseInt(i);
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5,6,7))