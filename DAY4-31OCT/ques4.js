// //const person = {
//     name: 'Alice',
//     age: 25,
//     address: {
//         city: 'New York',
//         country: 'NY'
//     }
// };
// Write a function that extracts the name and city properties and logs the sentence: "Alice lives in New York." It should also access and log the address object.

const person = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'New York',
        country: 'NY'
    }
};


// function extractData(person){
//     const {name,address:{city}}=person;
//     console.log(`${name} lives in ${city}.`);
//     console.log(person.address);
// }

const extractData=(person)=>{
    const {name,address:{city}}=person;
    console.log(`${name} lives in ${city}.`);
    console.log(person.address);
}   
extractData(person);
