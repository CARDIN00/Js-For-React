 //for loop
 for(let index =0; index < 10; index++){
  const element = index;
 //console.log(element);
 }

// FOR OFF loop

const arr =[1,2,3,4,5];
// for (const iterator of object )
for (const val of arr){
 // console.log(num);
}

const greetings = "hellp world";
for (const i of greetings){
   //console.log(`each char is ${i}`);
}


//MAPS
const map = new Map();
map.set('IN', "India");
map.set('FR', "France");
//console.log(map);
for (const [key, value]  of map){
  //console.log(key);
  //console.log(key, ':-', value);
}

const myObjects ={
  'game1': 'GOW',
  'game2' : "RDR2"  
}

for (const [key, value] of myObjects){
  console.log(key, ':-', value);
}


