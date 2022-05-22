const password = document.querySelector('#password');
const passwordC = document.querySelector('#confirm-password');
const required = document.querySelector('.required-txt');
const button = document.querySelector('.form-cta button');
const form = document.querySelector('form');
console.log(form);

passwordC.addEventListener( "input", passwordMatch);
password.addEventListener( "input", passwordMatch);

function passwordMatch(){
    if (password.value != passwordC.value){
        required.style.visibility= 'visible';
        //password.classList.add('not-valid');
        passwordC.classList.add('not-valid');
    }else{
        required.style.visibility= 'hidden';
        password.classList.remove('not-valid');
        passwordC.classList.remove('not-valid');
    }

}

form.addEventListener('submit', e => {
    
    if(password.value != passwordC.value){
        
        alert('Passwords do not match!');
        e.preventDefault();
    }
});