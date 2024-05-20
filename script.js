// função do menu abrir e fechar

let menu = document.getElementById("menu")
let iconemenu = document.getElementById("icone-menu")
let iconex = document.getElementById("iconex")

const abrirfecharmenu = () => {
    if (menu.classList.contains("menu")) {
        menu.classList.remove("menu")
        menu.classList.add("menu-fechado")
        iconex.style.display = "none"
        iconemenu.style.display = "inline"

    } else {
        menu.classList.remove("menu-fechado")
        menu.classList.add("menu")
        iconex.style.display = "inline"
        iconemenu.style.display = "none"
    }

}

// fazer quando passar o mouse mostrar o conteudo do card

let card = document.getElementById("card1")
let botao = document.getElementById("botao")

const mostrarcards = () => {

    if (card.classList.contains("card")) {
        card.classList.remove("card")
        card.classList.add("sobre-card")
    } else {
        card.classList.add("card")
        card.classList.remove("sobre-card")
        botao.innerHTML
    }
}

// bglh do formulario

const solicitarinputs = (event) => {

    let valorcampoemail = document.getElementById("campo-email").value
    let valorcamponome = document.getElementById("campo-nome").value
    let valorcampotelefone = document.getElementById("campo-telefone").value

    let dadosinput = {
        nome: valorcamponome,
        email: valorcampoemail,
        telefone: valorcampotelefone
    }

    fetch("http://localhost:3000/solicitacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosinput)

    })
        .then(resposta => {
            console.log(resposta)

            // limoar campos

            document.querySelector("#contato form").reset()

            // mostrar alert com mensagem de sucesso
            alert("Solicitação cadastrada")

        })
        .catch(erro => {
            // caso erro mostrar alert com mensagem erro
            console.log(erro)
            alert("Erro desconhecido")
        })

    event.preventDefault()
}
