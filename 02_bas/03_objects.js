//Singleton

// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name:"archana",
    "full name": "shubham dubey",
    [mySym]: "mykey1",
    age:20,
    location:"gwalior",
    email:"archanayad9399",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "shubhamdubey"
Object.freeze(jsUser)
jsUser.email = "khushiyadav1234.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);

jsUser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greetingtwo());