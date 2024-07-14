let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%&*_";
let charset = lowercase + uppercase + numbers + special;
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    let length = parseInt(sliderElement.value);

    // Garantir pelo menos um de cada tipo de caractere
    pass += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    pass += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
    pass += special.charAt(Math.floor(Math.random() * special.length));

    // Completar o restante da senha aleatoriamente
    for (let i = pass.length; i < length; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Embaralhar os caracteres da senha para evitar que os obrigatórios fiquem sempre nas primeiras posições
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    var passwordElement = document.getElementById('password');
    var passwordText = passwordElement.textContent || passwordElement.innerText;

    if (!navigator.clipboard) {
        alert('Seu navegador não suporta a funcionalidade de copiar para área de transferência. Você pode selecionar a senha manualmente e copiá-la');
        return;
    }

    navigator.clipboard.writeText(passwordText).then(function() {
        alert('Senha copiada para a área de transferência!');
    }, function(err) {
        console.error('Erro ao copiar a senha:', err);
    });
}

buttonElement.addEventListener("click", generatePassword);
