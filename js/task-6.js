const control = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const input = control.children[0];
const createBtn = control.children[1];
const destroyBtn = control.children[2];

let sizeEl = 30;


const createElem = function(){
  
  const element = document.createElement('div');

  element.style.height = `${sizeEl}px`;
  element.style.width = `${sizeEl}px`;
  element.style.marginBottom = '5px';
  element.style.backgroundColor = getRandomHexColor();
  
  boxes.append(element);
 }

const handleCreateEl = function(){
  if(input.value>100 || input.value<0 || input.value===""){
    alert("This is wrong!!Choose from 1 to 100!")
  } else {  
    boxes.innerHTML = "";
    sizeEl = 30;
    for(let i = 1; i<=input.value; i++){
      createElem();
      sizeEl += 10;
    };
  };
  input.value = "";
};

const handleDestoyBtn = function(){
  boxes.innerHTML = "";
  sizeEl = 30;
  input.value = "";  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

createBtn.addEventListener('click', handleCreateEl)
destroyBtn.addEventListener('click', handleDestoyBtn)