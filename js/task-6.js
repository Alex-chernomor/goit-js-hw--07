const control = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const input = control.children[0];
const createBtn = control.children[1];
const destroyBtn = control.children[2];

const elementBox = document.createElement('div')

let sizeEl = 30;


const createElem = function(){
  
  const element = document.createElement('div');

  element.style.height = `${sizeEl}px`;
  element.style.width = `${sizeEl}px`;
  element.style.marginBottom = '5px';
  element.style.backgroundColor = getRandomHexColor();
  
  elementBox.append(element);
}

const handleCreateEl = function(){
  handleDestoyBtn()
  if(input.value>100 || input.value<0 || input.value===""){
    alert("This is wrong!!Choose from 1 to 100!")
  } else {  
    for(let i = 1; i<=input.value; i++){
      createElem();
      sizeEl += 10;
    };
  };
  boxes.append(elementBox)
  input.value = "";
};

const handleDestoyBtn = function(){
  elementBox.innerHTML = "";
  sizeEl = 30;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

createBtn.addEventListener('click', handleCreateEl)
destroyBtn.addEventListener('click', handleDestoyBtn)