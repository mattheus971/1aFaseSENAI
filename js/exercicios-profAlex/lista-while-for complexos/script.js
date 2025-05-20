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

function exercicioDoisPontoDois() {
    alert("Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue perguntando");

    let aceitouTermos = ""
    let idade = 0

    while (aceitouTermos !== "sim" && idade < 18) {
        aceitouTermos = prompt("Você aceitou os termos? (sim/não)").toLowerCase()
        idade = Number(prompt("Digite sua idade: "))
    }
    alert("Acesso permitido.")
}

function exercicioDoisPontoTres() {
    alert("Solicite dois números até que ambos sejam pares.")

    let numeroUm = 1
    let numeroDois = 1

    while (numeroUm % 2 !== 0 || numeroDois % 2 !== 0) {
        numeroUm = Number(prompt("Digite o primeiro número:"))
        numeroDois = Number(prompt("Digite o primeiro número:"))

        if (numeroUm % 2 !== 0 || numeroDois % 2 !== 0) {
            alert("Ambos os números devem ser pares");
        }
    }
    alert("Números aceitos!");
}

function exercicioDoisPontoQuatro() {

    alert("Peça uma letra até que ela não seja “a” e não seja “b”.")

    let letra = ""

    while (letra !== "a" && letra !== "b") {
        letra = prompt("Digite uma letra: ")

    }
}

function exercicioDoisPontoCinco() {

    alert("Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.")

    let numero = 0

    let numeroValido = false

    while (numeroValido == false) {
        let numero = Number(prompt("Digite um número: "))

        if (numero >= 10 && numero <= 20 || numero == 50) {
            numeroValido = true
        }
    }
}

function exercicioDoisPontoSeis() {

    alert("Peça login e senha até que ambos estejam corretos.")

    let dadosCorretos = false

    while (dadosCorretos == false) {
        let login = prompt("Digite o Login: ")
        let senha = prompt("Digite a senha: ")

        if (login == "admin123" && senha == "123") {
            dadosCorretos = true
        }
    }
}

function exercicioDoisPontoSete() {

    alert("Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta não for “não”.")

    let resposta = ""

    while (resposta !== "não") {

        resposta = prompt("Você deseja continuar? ").toLowerCase()
        if (resposta == "sim") {
            resposta = "sim"
        }
    }
}

function exercicioDoisPontoOito() {

    alert("Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10.")

    let valorUm
    let valorDois

    let valoresValidos = false

    while (valoresValidos == false) {
        valorUm = prompt("Digite um valor: ")
        valorDois = prompt("Digite outro valor: ")

        if (valorUm % 3 == 0 && valorDois > 10 || valorUm > 10 && valorDois % 3 == 0) {
            valoresValidos = true
        }
    }
}

function exercicioDoisPontoNove() {

    alert("Peça login e senha até que ambos estejam corretos.")

    let dadosCorretos = false

    while (dadosCorretos == false) {
        let login = prompt("Digite o Login: ")
        let senha = prompt("Digite a senha: ")

        if (login == "admin" && senha == "321") {
            dadosCorretos = true
        }
    }
}

function exercicioDoisPontoDez() {

    alert("Enquanto não forem preenchidos nome e idade, continue solicitando.")

    let nome
    let idade

    while (!nome && !idade) {
        nome = prompt("Digite o seu nome: ")
        idade = prompt("Digite sua idade: ")
    }
}

function exercicioTresPontoUm() {

    alert("Imprima todos os números de 1 a 100 que são pares e múltiplos de 3.")

    contador = 1

    while (contador <= 100) {
        if (contador % 2 == 0) {
            alert("Par: " + contador)
        } else if (contador % 3 == 0) {
            alert("Multiplo de três: " + contador)
        }
        contador++
    }
}

function exercicioTresPontoDois() {

    alert("Imprima os números de 1 a 50 que são ímpares ou múltiplos de 7.")

    contador = 1

    while (contador <= 50) {
        if (contador % 2 !== 0) {
            alert("Impar: " + contador)
        } else if (contador % 7 == 0) {
            alert("Multiplo de sete: " + contador)
        }
        contador++
    }
}

function exercicioTresPontoTres() {

    alert("Mostre todos os números entre 1 e 30 que não são divisíveis por 2 e por 3.")

    let contador = 1

    while (contador <= 30) {
        if (contador % 2 == 0) {
            alert("Divisivel por dois: " + contador)

        } else if (contador % 3 == 0) {
            alert("Divisel por três: " + contador)

        }
        contador++
    }
}

function exercicioTresPontoQuatro() {

    alert("De 1 a 100, exiba apenas os que estão entre 10 e 20 ou entre 90 e 100.")

    let contador = 1

    while (contador <= 100) {
        if (contador >= 10 && contador <= 20 || contador >= 90 && contador <= 100) {
            alert(contador)

        }
        contador++
    }
}

function exercicioTresPontoCinco() {

    alert("De 0 a 20, imprima apenas os números múltiplos de 4 e não múltiplos de 8.")

    let contador = 1

    while (contador <= 20) {
        if (contador % 4 == 0) {
            alert("Multiplo de quatro: " + contador)

        } else if (contador % 8 !== 0) {
            alert("Não multiplo de oito: " + contador)
        }
        contador++
    }
}

function exercicioTresPontoSeis(){

    alert(". Percorra de 0 a 50 e exiba os números onde (número > 30 e número < 40) ou (número % 10 === 0)")

    contador = 1

}





