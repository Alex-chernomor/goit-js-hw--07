const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const mailValue = formEl.elements.email.value;
    const passValue = formEl.elements.password.value;
    
  if (mailValue.trim()=== "" || passValue === "") {
   alert('All form fields must be filled in')
} 
else {
      console.log(`Email: ${mailValue}, password: ${passValue} `);
      formEl.reset();
     }
    
})

