// sengleton(from constructor)


const symbol =Symbol("key")
//object leterals
const jsUser ={
  name: "karan",
  "full name" :"karan singh",
  [symbol] : "myKey1",// to use the symbol we need to use the square brackets
  age : 21,
  location :"ajaf",
  isLoggedIn : false
}

console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[symbol])

jsUser.location = "ajfbjdf"

jsUser.greeting =function(){
  console.log("hello JS user");
}

jsUser.greetingTow = function(){
  console.log(`hello JS user, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTow())
