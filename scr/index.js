const botao = document.querySelector(".btn-poderes")

const elementoPlataformas = document.querySelector(".btn-poderes .poderes")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
})