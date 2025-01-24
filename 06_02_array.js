const marverl_heros =["x", "y", "z"]
const ds_heros=["a","b"]

// marverl_heros.push(ds_heros)// here another array was taken in as a data(4 th element)
// console.log(marverl_heros)

// const allHeros = marverl_heros.concat(ds_heros)
// console.log(allHeros)

// const allHeros =[...marverl_heros,...ds_heros]
// console.log(allHeros)

const anotherArr =[1,2,3,[4,5,6],[6,7[8,9]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr)