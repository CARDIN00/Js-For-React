

function sayMyName(){
  console.log("K")
  console.log("A")
  console.log("R")
  console.log("A")
  console.log("N")
}

//sayMyName()

// function addNumbers (num1, num2){
//   console.log(num1 +num2)
// }
function addNumbers (num1, num2){
  // let result =num1 +num2
  // return result

  return num1+ num2
}

const result = addNumbers(3,4)
// console.log("result is", result)

function loginUserMessage(username){
  if(username === undefined){
    console.log("enter a username")
  }
  return `${username} just logged in`
   
}

console.log(loginUserMessage("karan"))