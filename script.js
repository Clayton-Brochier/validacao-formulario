// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
        input.addEventListener("focus", (e) => {
        label.classList.add("required-popup")
    });
    
    // Ocultar popup de campo obrigatório
        input.addEventListener("blur", (e) => {
        label.classList.remove("required-popup")
    });
};

mostrarPopup(usernameInput, usernameLabel)


// Validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value
    if (valor.length < 3) {
        //Valor incorreto        
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "O username precisa ter 3 ou mais caracteres!"
        usernameHelper.classList.add("visible")
    } else {
        //Valor correto        
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
});

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

mostrarPopup(emailInput, emailLabel)


// Validar email
emailInput.addEventListener("change", (e) =>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        //e-mail válido
        emailInput.classList.remove("error")
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else{
        //e-mail incorreto
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = 'O e-mail precisa conter os caracteres "@" e ".com"'
        emailHelper.classList.add("visible")
    }
})
