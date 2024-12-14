const body = document.querySelector("body");
const colorCode = document.querySelector(".color");
const changeColorBtn = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getBackGroubdColrHandles = function(){
   body.style.backgroundColor = getRandomHexColor();
   colorCode.textContent = body.style.backgroundColor
   }

changeColorBtn.addEventListener('click', getBackGroubdColrHandles)
