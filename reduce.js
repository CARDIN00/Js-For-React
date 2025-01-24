const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reduce method reduced the array to a single value

const total = mynums.reduce(sum);
console.log(total);

function sum(accumulator,element){
  return accumulator + element; 
}

const grades = [90, 80, 70, 60, 50, 75, 73,78.96,100];

const max = grades.reduce(maxgrades);
console.log(max);

const min = grades.reduce(mingrades);
console.log(min);

function maxgrades(accumulator,element){
  return Math.max(accumulator,element);
}

function mingrades(accumulator,element){
  return Math.min(accumulator,element);
}