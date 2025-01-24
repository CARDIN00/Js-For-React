//const tinderUser = new Object(); // sigelton object
const tinderUser ={}  //not-singelton object 

tinderUser.id ="123abc"
tinderUser.name ="samk"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser ={
  email :"karan@gmail.com",
  fullname :{
    UserFullname : {
      Firstname : "Karan",
      LastName : "singh"
    }
  }
}

//console.log(regularUser.fullname.UserFullname.LastName);

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
//combine the two objects
const obj3 = Object.assign({},obj1 , obj2)

// console.log(obj3)

const users =[
  {
    id :1,
    email : "h@gmail.com"
  },
  {
    id :1,
    email : "h@gmail.com"
  },
  {
    id :1,
    email : "h@gmail.com"
  },
  {
    id :1,
    email : "h@gmail.com"
  }
]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))// to see is the value exists


//DESTRUCTURE THE OBJECTS 
const course = {
  coursename : "js in hindi",
  price : "999",
  courseInstructor :"Karan"
}

const{courseInstructor: instructor} =course
// console.log(courseInstructor);
console.log(instructor)

