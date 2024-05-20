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
