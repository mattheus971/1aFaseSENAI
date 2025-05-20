function cadastrar(){
    let nome = document.getElementById("name").value
    let idade = document.getElementById("age").value
    let tagResultado = document.getElementById("resultado")

    tagResultado.innerText = "Bem vindo ao nosso sistema, " +
    nome + " você tem " + idade + " anos. É um prazer ter você aqui"
}