
// exercicio 3///////////////////////////////////
function gerarNomeSuperHeroi() {

    let nome = prompt("Digite o seu nome: ")

    let numeroAleatorio = Math.floor(Math.random() * 3) + 1

    switch (numeroAleatorio) {

        case 1:
            alert(nome + " Homem de ferro")
            brake

        case 2:
            alert(nome + " Homem aranha")
            brake

        case 3:
            alert(nome + " Homem de aço")
            brake
    }
}


// exercicio 4//////////////////////////////////////
function horoscopoInterativo() {

    let signo = prompt("Digite o seu sígno: ")

    let numeroAleatorio = Math.floor(Math.random() * 3) + 1

    switch (numeroAleatorio) {

        case 1:
            alert("Hoje é um ótimo dia para buscar novos desafios " + signo)
            break

        case 2:
            alert("Hoje é um péssimo dia para buscar novos desafios " + signo)
            break

        case 3:
            alert("Hoje é um dia normal " + signo)
            break
    }
}


// exercicio 10//////////////////////////////////
function jogoParImpar() {


    let escolhaJogador = prompt("Escolha (Par ou Impar): ").toLowerCase();

    let numero = Number(prompt("Digite um número de 0 a 10: "));

    if ((escolhaJogador === "par" || escolhaJogador === "impar") && numero >= 0 && numero <= 10) {

        let numeroAleatorio = Math.floor(Math.random() * 11);
        let soma = numero + numeroAleatorio;

        if (soma % 2 === 0 && escolhaJogador === "par") {
            alert("Você ganhou! A soma foi " + soma);
        } else if (soma % 2 !== 0 && escolhaJogador === "impar") {
            alert("Você ganhou! A soma foi " + soma);
        } else {
            alert("Você perdeu! A soma foi " + soma);
        }

    } else {
        alert("Entrada inválida! Escolha entre 'Par' ou 'Impar' e um número de 0 a 10.");
    }
}


// exercicio 14///////////////////////////////////
let contador = 0

function contadorCliques() {

    contador++
}
function mostrarContador() {
    alert(contador + " cliques")
    contador = 0
}

function jogoNumeroSecreto() {

    let numeroAleatorio = Math.floor(Math.random() * 100)
    let numeroDigitado = Number(prompt("Digite um número: "))

    if (numeroDigitado == numeroAleatorio) {

        alert("Você acertou!")

    } else {
        alert("Tente novamente! O número era " + numeroAleatorio)
    }

}


// exercicio 18////////////////////////////////////
function gerarCaracterAleatorio() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"

    const numeroAleatorio = Math.floor(Math.random() * caracteres.length)

    return caracteres.charAt(numeroAleatorio)
}

function mostrarSenha() {

    let quantidadeCaracteres = Number(prompt("Digite a quantidade de caracteres da senha (de 6 a 16): "))
    let senha = ""

    if (quantidadeCaracteres >= 6 && quantidadeCaracteres <= 16) {

        while (quantidadeCaracteres > 0) {

            senha = senha + gerarCaracterAleatorio()
            quantidadeCaracteres--
        }

        alert("Sua senha é: " + senha)
    } else {
        alert("A senha de ter de 6 a 16 caracteres! Tente novamente.")
    }
}


//exercicio 20/////////////////////////////////////////
function miniQuiz() {
    
    let perguntaUm = "O Sol é uma estrela do tipo anã branca."
    let perguntaDois = "O Brasil é o maior país da América do Sul."
    let perguntaTres = "A água ferve a 90°C em condições normais de pressão atmosférica."
    let perguntaQuatro = "A invenção da lâmpada elétrica é atribuída a Thomas Edison."
    let perguntaCinco = "Os golfinhos são mamíferos."

    pontuacao = 0
    respostaUm = prompt(perguntaUm + " V ou F?").toLowerCase()
    if (respostaUm == "f") {
        pontuacao++
    }

    respostaDois = prompt(perguntaDois + " V ou F?").toLowerCase()
    if (respostaDois == "v") {
        pontuacao++
    }

    respostaTres = prompt(perguntaTres + " V ou F?").toLowerCase()
    if (respostaTres == "f") {
        pontuacao++
    }

    respostaQuatro = prompt(perguntaQuatro + " V ou F?").toLowerCase()
    if (respostaQuatro == "v") {
        pontuacao++
    }

    respostaCinco = prompt(perguntaCinco + " V ou F?").toLowerCase()
    if (respostaCinco == "v") {
        pontuacao++
    }

    alert("Você acertou " + pontuacao + " perguntas.")
}


//exercicio 30 //////////////////////////////////////////
function sorteDoDia(){
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1

    switch (numeroAleatorio) {
        case 1:
            alert("1. Acredite em você, pois o maior desafio já foi vencido: começar.")
            break;
    
        case 2:
            alert("2. Cada passo, por menor que seja, te aproxima do seu sonho.")
            break;

        case 3:
            alert("3. O sucesso começa quando você decide tentar.")
            break;

        case 4:
            alert("4. Não tenha medo de recomeçar, a jornada é sua.")
            break;

        case 5:
            alert("5. O impossível é só uma opinião, não uma realidade.")
            break;
    }
}

