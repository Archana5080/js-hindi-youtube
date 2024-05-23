
const name = "shubham"
const repoCount = 30

console.log(`hello my name is${name} and my repo count is${repoCount}`);


const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString)

// slice method
const anotherString = gameName.slice(-8,4)
console.log(anotherString)


// TRIM()METHOD
const newStringone = "            shubham        "
console.log(newStringone)
console.log(newStringone.trim());

//replace method
const url = "https://shubham.com/shubham%20ubey"
console.log(url.replace('%20',"-"))

console.log(url.includes('sunder'))


//replace method

const oneString = "My Name is archana";
console.log(oneString.replace("My","her"));
console.log(oneString.replace('M','O'));

//repete method

const twoString = "shubham"
console.log(twoString.repeat(9))

//*****method chaining******** */
// using one string after another.order of execution will be left to right
// str.toUppercase().trim

const threeString = " arsh     "
console.log(threeString.toUpperCase().trim().repeat(10));