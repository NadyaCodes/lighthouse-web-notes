//HOW TO CREATE OBJECTS

const o = {};

//ACCESSING AND SETTING PROPERTIES ON OBJECTS

o["key"]

//GET A LIST OF ALL KEYS 

Object.keys(o)


const person = { firstName: "Khurran" };
const firstName = person["firstName"];
console.log(firstName);
// const firstNameAgain = person[firstName];
// console.log(firstNameAgain);


// const person = { firstName: "Khurram" };
// person[firstName]; 
// // ReferenceError: firstName is not defined


// const person = { firstName: "Khurram" };
// const propertyName = "firstName";
// const firstName = person[propertyName]; 
// // interpreted as person["firstName"], and therefore works fine :)

//An alternative way to access the same value would be person.firstName.


// person["foo"];


const mary = {name: "Mary Sue"};
mary["name"] =  "Mary Jane";
mary["age"] = 22;
console.log(mary)

person["phoneNumbers"] = [234123123476, 12384630234, 123482946];
console.log(typeof person["phoneNumbers"]);

console.log(person["phoneNumbers"] instanceof Object)
console.log(person["phoneNumbers"] instanceof Array)
console.log(person["phoneNumbers"] instanceof String)