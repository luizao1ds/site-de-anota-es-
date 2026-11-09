// usuario: moises
// senha: 123

let botao = document.getElementById("botao")

botao.onclick = function(){ 
let Usuário = document.getElementById("Usuário")
let Senha = document.getElementById("Senha")
if (Usuário.value == "moises" && Senha.value == "123") {
    window.location.href = "index.html";
}
else {
    alert ("Usuário ou Senha incorreto")
}

}

