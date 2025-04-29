
// exercicio 3
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


// exercicio 4
function horoscopoInterativo() {

    let signo = prompt("Digite o seu sígno: ")

    let numeroAleatorio = Math.floor(Math.random() * 3) + 1

    switch (numeroAleatorio) {

        case 1:
            alert("Hoje é um ótimo dia para buscar novos desafios " + signo)
            brake

        case 2:
            alert("Hoje é um péssimo dia para buscar novos desafios " + signo)
            brake

        case 3:
            alert("Hoje é um dia normal " + signo)
            brake
    }
}

// exercicio 10
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


// exercicio 14
let contador = 0

function contadorCliques(){

    contador++
}
function mostrarContador(){
    alert(contador + " cliques")
    contador = 0
}

function jogoNumeroSecreto(){

    let numeroAleatorio = Math.floor(Math.random() * 100)
    let numeroDigitado = Number(prompt("Digite um número: "))

    if (numeroDigitado == numeroAleatorio) {

        alert("Você acertou!")
    
    }else{
        alert("Tente novamente! O número era " + numeroAleatorio)
    }

}

// exercicio 18


