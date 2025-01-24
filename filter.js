// const coding = ["js","django","solidity","python","react","html"]

//   const values = coding.forEach((item) =>{
//     console.log(item);
//     return item;
//   })

//   console.log(values);

const mynums =[1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=> num > 5)
const newnums = mynums.filter((num)=> 
  {
  return num > 5
})
console.log(newnums);


const books = [
  {name:"book1",price:100},
  {name:"book2",price:200,genre : "fiction"},
  {name:"book3",price:300,genre : "non-fiction"},
  {name:"book4",price:400,genre : "fiction"},
  {name:"book5",price:500,genre : "non-fiction"},
  {name:"book6",price:600,genre : "fiction"},
  {name:"book7",price:700,genre :"science"}
];

const userbooks = books.filter((bk) => {
  return bk.genre ==="science" && bk.price > 500;
})
console.log(userbooks);