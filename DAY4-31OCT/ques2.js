//ques2:Create a function greet that takes two parameters, name and message. If the message is not provided, it should default to "Welcome!". Use default parameters in your implementation.

function greet(name,message="Welcome"){
    console.log(`${name} ${message}`)
}
greet("MSD")
greet("MSD","Hello there!")