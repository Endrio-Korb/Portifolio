var ver_mais = document.getElementById("ver-mais")
const projetos = document.querySelectorAll(".projetos-ocultos")

function verMais(e) {
    
    projetos.forEach ( (projeto) => {
        projeto.classList.toggle("projetos-ocultos")
    })
}




const elementos = document.querySelectorAll(".hidden")


const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if ( entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
elementos.forEach( (elemento) => myObserver.observe(elemento))


