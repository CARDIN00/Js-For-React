const user ={
  username : "karan",
  price : 999,
  welcomeMessage : function(){
    console.log(`${this.username},welcome to website `);// this is used fir the current context of the scope
  }
}

// user.welcomeMessage();
// user.username ="Sam";
// user.welcomeMessage();

                      //ARROW FUNCTIONS
//basic syntax ... () => {}

// const addTwo = (num1 , num2) => {
//   return num1 + num2;
// }
// console.log(addTwo(3,4));


// implicit return
// const addTwo = (num1 , num2) =>  num1 + num2;
// console.log(addTwo(3,4));

