
// let nome, email, senha
incializar()

let usuarios = []

// let nomesTeste = ["Usuário 1", "Usuário 2","Usuário 3"]



function cadastrar() {
    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value
    }
    usuarios.push(usuario)
    limparInputs()
    mostrarLogin()
    alert("Cadastro realizado! ")
}

function logar() {
    email = document.getElementById('inpLogEmail').value
    senha = document.getElementById('inpLogSenha').value

    for (let i = 0; i < usuarios.length; i++) {
        if (email === usuarios[i].email && senha === usuarios[i].senha) {
            alert("Usuario logado! Olá " + usuarios[i].nome)
            limparInputs()
            mostrarProdutos()
        } //else {
        //     alert("Dados incorretos.")
        // }         
    }
}

function mostrarLogin() {
    esconderTodos()
    document.getElementById('container-login').style.display = "flex"
    document.getElementById('inpLogEmail').focus()
}

function mostrarCadastro() {
    esconderTodos()
    document.getElementById('container-cadastro').style.display = "flex"
    document.getElementById('inpCadNome').focus()
}

function mostrarProdutos() {
    esconderTodos()
    document.getElementById('container-produtos').style.display = "flex"
    document.getElementById('navbar').style.display = "flex"
}

function esconderTodos() {
    document.getElementById('container-login').style.display = "none"
    document.getElementById('container-cadastro').style.display = "none"
    document.getElementById('container-produtos').style.display = "none"
}

function limparInputs() {
    document.getElementById('inpCadNome').value = ""
    document.getElementById('inpCadEmail').value = ""
    document.getElementById('inpCadSenha').value = ""
    document.getElementById('inpLogEmail').value = ""
    document.getElementById('inpLogSenha').value = ""
}

function incializar() {
    mostrarLogin()
}
