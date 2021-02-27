function setFormMessage(formElement, type, message) { //recebe um form
    const messageElement = formElement.querySelector(".form__message"); //seleciona o elento __message do form-->div

    messageElement.textContent = message; //texto igual à mensagem
    messageElement.classList.remove("form__message--success", "form__message--error"); //repor os estilos da mensagem-->tirar cores
    messageElement.classList.add(`form__message--${type}`/* Passar o tipo do parametro */); //meter texto "normal"
}

function setInputError(inputElement, message) { // o proprio input field
    inputElement.classList.add("form__input--error"); //vermelho
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message; // aceder ao div vazio atraves do seu pai
}
//login
function validar(form){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( form.username.value == "test" && form.password.value == "test"){
        window.open("sucesso.html");  //abrir a pagina de sucesso
        window.close(); //fechar a do form
    }
    else{
      alert("Username ou password errados"); //set error message
      return false;
      }
    }
  //fim 

document.addEventListener("DOMContentLoaded", () => { // quando o documento estiver pronto, a função é executada-Anonimus function
    const loginForm = document.querySelector("#login"); //form inteiro login
    const createAccountForm = document.querySelector("#createAccount"); //form inteiro criar conta

    document.querySelector("#linkCreateAccount").addEventListener("click", e /*referencia para os eventos*/ => { //quando clicamos no create account toogle entre forms
        e.preventDefault(); //os links nao fazem redirect--->suave
        loginForm.classList.add("form--hidden");//esconder o form
        createAccountForm.classList.remove("form--hidden"); //tornar visivel
    });

    document.querySelector("#linkLogin").addEventListener("click", e => { //mesma coisa que o de cima ao contratrio
        e.preventDefault();
        loginForm.classList.remove("form--hidden"); //adicionar classes para esconder
        createAccountForm.classList.add("form--hidden");
    });
});

