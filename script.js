// função do menu abrir e fechar

let menu = document.getElementById("menu")
let iconemenu = document.getElementById("icone-menu")
let iconex = document.getElementById("iconex")

const abrirfecharmenu = () => {
    if (menu.classList.contains("menu")) {
        menu.classList.remove("menu")
        menu.classList.add("menu-aberto")
        iconex.style.display = "none"
        iconemenu.style.display = "inline"

    } else {
        menu.classList.remove("menu-aberto")
        menu.classList.add("menu")
        iconex.style.display = "inline"
        iconemenu.style.display = "none"
    }

}

// fazer quando passar o mouse mostrar o conteudo do card

let conteudocard1 = document.getElementById("sobre-card")
let card = document.getElementById("card")

const mostrarcards = () => {
    if (conteudocard1.contains.style.display = "none") {
        conteudocard1.style.display = "inline"
        card.style.display = "none"
    } else {
        conteudocard1.style.display = "none"
    }
}