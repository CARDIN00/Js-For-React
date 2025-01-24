const myObject ={
  js : "javaScript",
  cpp : "c++",
  rb : "ruby"
}

//For In loop
for (const key in myObject) {
 // console.log(myObject[key]);
 //console.log(`${key} is shortcut for ${myObject[key]}`);
}

//For Each Loop
// const coding = ["one", "two", "three", "four", "five"]

 coding.forEach( function (item) {
//  //console.log(item);
} )


function printMe(item){
  console.log(item);
}

coding.forEach(printMe)


