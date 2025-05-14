function exercicioUm() {
    alert("Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba Pode dirigir se for maior de 18 e tiver carteira")

    let idade = Number(prompt("Digite sua idade para saber se pode dirigir: "))
    let temCarteira = prompt("Você tem Carteira de Motorista? (Sim ou Não)").toLocaleLowerCase()

    if (idade >= 18 && temCarteira == "sim") {
        alert("Você pode dirigir!")

    } else {
        alert("Você não pode dirigir!")
    }

}

function exercicioDois() {

    alert("Verifique se um número digitado é positivo e par")

    let numero = Number(prompt("Digite um número: "))

    if (numero > 0 && numero % 2 == 0) {
        alert(numero + ": O número é positivo e par!")

    } else if (numero == 0) {
        alert(numero + ": O número neutro!")

    } else if (numero > 0 && numero % 2 != 0) {
        alert(numero + ": O número é positivo e impar!")

    } else if (numero < 0 && numero % 2 != 0) {
        alert(numero + ": O número é negativo e impar!")

    } else if (numero < 0 && numero % 2 == 0) {
        alert(numero + ": O número é negativo e par!")
    }
}

function exercicioTres() {

    alert("Solicite um nome de usuário e uma senha. Exiba (Acesso permitido) se o nome for (admin) ou a senha for (1234).")

    let usuario = "admin"
    let senha = "1234"
    let tentativaUsuario = prompt("Digite o usuario: ")
    let tentativaSenha = prompt("Digite a senha: ")

    if (tentativaUsuario == usuario || tentativaSenha == senha) {
        alert("Acesso Permitido.")

    } else {
        alert("Acesso Negado.")
    }
}

function exercicioQautro() {

    alert("Peça dois números. Exiba (Valores válidos) se um for positivo e o outro for negativo.")

    let numeroUm = Number(prompt("Digite um número: "))
    let numeroDois = Number(prompt("Digite outro número: "))

    if (numeroUm > 0 && numeroDois < 0 || numeroUm < 0 && numeroDois > 0) {
        alert("Valores Válidos")

    } else {
        alert("Valores inválidos")
    }
}

function exercicioCinco() {
    alert("Peça uma nota. Exiba (Aprovado) se a nota for maior que 6 e menor ou igual a 10.")

    let nota = Number(prompt("Digite uma nota: "))

    if (nota > 6 && nota <= 10) {
        alert("Aprovado")

    } else {
        alert("Reprovado")
    }
}

function exercicioSeis() {

    alert("Peça um número. Exiba (Número inválido)se ele não estiver entre 1 e 100.")

    let numero = Number(prompt("Digite um número: "))

    if (numero >= 1 && numero <= 100) {
        alert("Número Válido")

    } else {
        alert("Número Inválido")
    }
}

function exercicioSete() {

    alert("Peça a idade e se o usuário é estudante. Exiba (Meia entrada) se for menor de 18 ou estudante")

    let idade = Number(prompt("Digite sua idade: "))
    let estudante = prompt("É estudante? (sim ou não)").toLowerCase()

    if (idade < 18 || estudante == "sim") {
        alert("Meia Entrada")

    } else {
        alert("Entrada Inteira")
    }
}

function exercicioOito() {

    alert("Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não). Exiba (Cadastro completo) se ambos forem (sim)")

    let aceitouTermos = prompt("Você aceitou os termos? (sim ou não)").toLowerCase()
    let confirmouEmail = prompt("Você confirmou o email? (sim ou não)").toLowerCase()

    if (aceitouTermos == "sim" && confirmouEmail == "sim") {
        alert("Cadastro Completo")

    } else if (aceitouTermos == "não" && confirmouEmail == "sim") {
        alert("Você precisa aceitar os termos para se cadastrar")

    } else if (aceitouTermos == "sim" && confirmouEmail == "não") {
        alert("Você precisa confirmar o email para se cadastrar")

    } else {
        alert("Entradas inválidas")
    }
}

function exercicioNove() {

    alert("Peça a altura e o peso. Exiba (Apto para o esporte) se altura > 1.60m e peso entre 50 e 90 kg.")

    let altura = Number(prompt("Digite sua altura (m): "))
    let peso = Number(prompt("Digite seu peso (kg): "))

    if (altura > 1.60 && peso >= 50 && peso <= 90) {
        alert("Apto para o esporte")

    } else {
        alert("Não esta apto para o esporte")
    }
}

function exercicioDez() {

    alert("Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se for verdade, exiba (Acesso negado).")

    let idade = Number(prompt("Digite sua idade: "))
    let aceitouTermos = prompt("Aceitou os termos? (sim ou não)").toLowerCase()

    if (idade < 18 && aceitouTermos == "não") {
        alert("Acesso Negado")

    } else {
        alert("Acesso Permitido")
    }
}

function exercicioDoisPontoUm() {

    alert("Enquanto a senha digitada não for “abc123” e o número de tentativas for menor que 3, peça a senha novamente.")

    let senha = "abc123"

    for (let tentativas = 3; tentativas > 0; tentativas--) {
        let tentativaSenha = prompt("Digite a senha: ")

        if (tentativaSenha == senha) {
            alert("Acesso concedido!")
            break
        }
    }
}
