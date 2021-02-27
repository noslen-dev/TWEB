function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

// toogle e validação
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("foforrm--hidden");
        createAccountForm.classList.add("m--hidden");
    });

    loginForm.addEventListener("submit", e => {
         e.preventDefault();
         let username = document.getElementById("username").value;
         let password = document.getElementById("password").value;
         if ( loginForm.username.value == "test" && loginForm.password.value == "test"){
            window.open("sucesso.html");  //abrir a pagina de sucesso
            window.close(); //fechar a do form
         }
         else
            setFormMessage(loginForm, "error", "Nome de utilizador ou password inválidos");
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        let username = document.getElementById("signupUsername").value;
        if (createAccountForm.username.value == "cris")
           alert("conta já criada");
   });



});


