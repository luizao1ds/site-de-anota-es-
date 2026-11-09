const slides = document.querySelectorAll(".slide");

let indice = 0;

function trocarImagem() {

    slides[indice].classList.remove("ativo");

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("ativo");
}

// Troca a imagem a cada 4 segundos
setInterval(trocarImagem, 4000);