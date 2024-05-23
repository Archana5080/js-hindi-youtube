// promitive

// t types: string , Number , boolean , null , undefined , symbol,bigInt
const score = 100;
const scoreValue = 100.8;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

 const bigNumber = 23344657650988766n

// reference (Non primitive)

// Array,Objects , Function

const neros = ["shaktman","neeraj","spiderman"];

let myOnj = {
    name: "shubham",
    age: 20,
}

const myFunction = function(){
console.log("he worldllo");
}

console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//********************************************Memory******************** */
//stack(primitive) , heap (Non-primitive)
let myYoutubename = "shubhamdubey.com"

let anothername = myYoutubename

console.log(anothername);

