const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newnum = mynums.map((num) => {
//   return num+2;
// });
// console.log(newnum); 

// let newnum2 = mynums.map((num) => {
//   return num *2 +10;
// });
// console.log(newnum2);

// CHAINING
let newnums3 = mynums.map((num) => num *10)
.map((num)=> num *10)
.filter((num)=> num >= 15)

console.log(newnums3);