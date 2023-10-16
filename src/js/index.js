const btn = document.querySelector(".button-from");
const formulario = document.querySelector(".elementos-form");
const mensagenErro = document.querySelector(".message")
const texto_erro  = document.querySelector('.texto_erro')
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email")
    const valor_email = email.value
    if(validateEmail(valor_email)){
        formulario.style.display = "none";
        console.log(validateEmail(valor_email));
        mensagenErro.style.display = "flex";
    }
    else{
        email.classList.add('input-alert-color');
        // email.style.borderColor = "#FF0000";
        // email.style.backgroundColor = "#ef9a9a";
        // email.style.color = "#FF0000";
        texto_erro.style.display = "flex";
        
    }
});
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};