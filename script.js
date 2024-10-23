var ver_mais = document.getElementById("ver-mais")
var projetos = document.querySelectorAll(".projetos-ocultos")

function verMais(e) {
    if (ver_mais.innerHTML == "Ver mais") {
        ver_mais.textContent = "Ver menos";
        for (let i = 0; i < projetos.length; i++) {
            projetos[i].setAttribute('class', 'grid-item projetos projetos-ativos')

        }
    } else {
        ver_mais.textContent = "Ver mais";
        for (let i = 0; i < projetos.length; i++) {
            projetos[i].setAttribute('class', 'projetos-ocultos')

        }
    }
}
