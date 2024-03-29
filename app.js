const subscribe = document.querySelector('#subscribe');
const submit = document.querySelector('#submit');
const sub = document.querySelector('#subscribe')
const email = document.querySelector('#email');
const emailSent = document.querySelector('#email-sent');
const errorLabel = document.querySelector('.error-label');

const preview = document.querySelector('.preview');
const success = document.querySelector('.success');

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailAddress;

sub.addEventListener('click', (event) =>{
  event.preventDefault();
  emailAddress = email.value;
  
  if(emailAddress && emailAddress.match(validRegex)){
    preview.classList.add('hidden');
    success.classList.remove('hidden');
    emailSent.innerText = emailAddress;
    email.value=''
    
  }else{
    errorLabel.classList.remove('hidden');
    email.classList.add('button-error');
  }
  
})

submit.addEventListener('click', (event) =>{
  event.preventDefault();
  emailAddress = email.value;
  success.classList.add('hidden');
  preview.classList.remove('hidden');
  errorLabel.classList.add('hidden');
  email.classList.remove('button-error');
 
  console.log(emailAddress);
})
