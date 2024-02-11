let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset ="abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@#$%&*_";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;


sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";

    for ( let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    
    }  

    function copyPassword(){
        var passwordElement = document.getElementById('password');
        var passwordText = passwordElement.textContent || passwordElement.innerText;

        if (!navigator.clipboard){
            alert('Seu navegador não suporta a funcionalidade de copiar para área de transferência.Você pode selecionar a senha manualmente e copiá-la');
            return;

        }  

        navigator.clipboard.writeText(passwordText).then(function(){
            alert('Senha copiada para a área de tranferência!');

        }, function(err){
            console.error('Erro ao copiar a senha:' , err);
        }); 
        

    }  




    
    