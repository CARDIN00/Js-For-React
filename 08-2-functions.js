function calculateCartPrice(...num1){
  return num1;
}
// console.log(calculateCartPrice(21,32,34,43))

const user ={//this is an object
  username: "karan",
  price : 199
}

function handleObject(anyobject){
  console.log( `username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)   //call the function

// handleObject({
//   username :"karam",
//   price : 211
// })

const myNewArray =[100,200,300,400]

function returnSecondValue(getarray){//function to return 2nd value in array.
  return getarray[1]
}

console.log(returnSecondValue(myNewArray));