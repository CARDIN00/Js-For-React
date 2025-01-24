function changeText(event){
  console.log(event);
  let fpara = document.getElementById('fpara');
  fpara.textContent ="hello karan";}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText);



let paras = document.querySelectorAll('p');
function clickpara(event){
    alert("cliked para :" + event.target.textContent);
}
for(let i=0;i<paras.length;i++){
    paras[i].addEventListener('click',clickpara);
}
