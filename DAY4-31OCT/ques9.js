// Given the following data:
// const data =[
//   {
//     name: "Bob",
//     age: 24
//   },
//   {
//     name: "Alice",
//     age: 21
//   }
// ]

// Write a function that extracts the age as  “24”  and name as “Alice” and returns a sentence: "Alice’s age is 24."

const data =[
  {
    name: "Bob",
    age: 24
  },
  {
    name: "Alice",
    age: 21
  }
]

function extractData(obj){
    const [first,second]=obj;
    const {age}=first;
    const {name}=second;


    return `${name} age is ${age}`
}

console.log(extractData(data));