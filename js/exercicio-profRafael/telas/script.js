
// let nome, email, senha

let usuario = {
    nome: '',
    email: '',
    senha: ''
}

function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.senha = document.getElementById('inpCadSenha').value
    alert("Usuário cadastrado! ")
    limparInputs()
    mostrarLogin()
}

function logar(){
    nome = document.getElementById('inpLogNome').value
    senha  = document.getElementById('inpLogSenha').value

    if(nome === usuario.nome && senha === usuario.senha){
        alert("Usuario logado!")
        limparInputs()
        mostrarProdutos()
    }else{
        alert("Dados incorretos.")
    }
}

function mostrarLogin(){
    esconderTodos()
    document.getElementById('container-login').style.display = "flex"
    document.getElementById('inpLogNome').focus()
}

function mostrarCadastro(){
    esconderTodos()
    document.getElementById('container-cadastro').style.display = "flex"
    document.getElementById('inpCadNome').focus()
}

function mostrarProdutos(){
    esconderTodos()
    document.getElementById('container-produtos').style.display = "flex"
}

function esconderTodos(){
    document.getElementById('container-login').style.display = "none"
    document.getElementById('container-cadastro').style.display = "none"
    document.getElementById('container-produtos').style.display = "none"
}

function limparInputs(){
    document.getElementById('inpCadNome').value = ""
    document.getElementById('inpCadEmail').value = ""
    document.getElementById('inpCadSenha').value = ""
    document.getElementById('inpLogNome').value = ""
    document.getElementById('inpLogSenha').value = ""
}

