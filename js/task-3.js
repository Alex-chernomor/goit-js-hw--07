const inputText = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

const checkInput = () =>{
    if(inputText.value.trim()===""){
        greeting.textContent = "Anonymous"
    } else {
        greeting.textContent = inputText.value
    }
}

inputText.addEventListener('input', checkInput)

