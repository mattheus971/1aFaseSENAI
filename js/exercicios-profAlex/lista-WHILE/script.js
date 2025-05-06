
// exercicio 1/////////////////////////////////////
function paresUmAVinte() {
    let numero = 1;
    while (numero <= 20) {
        if (numero % 2 == 0) {
            alert("O número " + numero + " é Par!");
        }
        numero++;
    }
}

// exercicio 2//////////////////////////////////////
function imparesUmAVinte() {
    let numero = 1;
    while (numero <= 20) {
        if (numero % 2 != 0) {
            alert("O número " + numero + " é Impar!");
        }
        numero++;
    }
}

// exercicio 3////////////////////////////////////////
function olaMundo() {
    let contador = 1
    while (contador <= 5) {
        alert('Olá Mundo! ' + contador)
        contador++
    }
}

// exercicio 4///////////////////////////////////////
function exercicioQuatro() {

    let contador = 0
    while (contador <= 50) {

        alert("Contador: " + contador)
        contador += 5
    }
}

// exercicio 5///////////////////////////////////////
function exercicioCinco() {

    let contador = 100
    while (contador >= 0) {

        alert("Contador: " + contador)
        contador -= 10
    }
}

// exercicio 6///////////////////////////////////////
function exercicioSeis() {

    let contador = 0;
    while (contador <= 30) {
        if (contador % 3 == 0) {
            alert("Múltiplo de 3: " + contador);
        }
        contador++;
    }
}

// exercicio 7//////////////////////////////////////
function exercicioSete() {

    let contador = 1
    while (contador <= 10) {
        let quadrado = contador * contador
        alert("Quadro de " + contador + " é " + quadrado)
        contador++
    }
}

// exercicio 8/////////////////////////////////////
function exercicioOito() {

    let contador = 1
    while (contador <= 10) {
        let quadrado = contador * contador * contador
        alert("Quadro de " + contador + " é " + quadrado)
        contador++
    }

}

// exercicio 9/////////////////////////////////////
function exercicioNove() {

    contador = 1
    while (contador <= 15) {
        if (contador % 2 == 0) {
            alert(contador + ": Par")

        } else {
            alert(contador + ": Impar")
        }
        contador++
    }
}

// exercicio 10/////////////////////////////////////
function exercicioDez() {

    let contador = 0;
    while (contador <= 100) {
        if (contador % 4 == 0) {
            alert("Múltiplo de 4: " + contador);
        }
        contador++;
    }
}

// exercicio 11/////////////////////////////////////
function exercicioOnze() {

    let contador = 1
    while (contador <= 10) {
        alert("Número: " + contador)
        contador++
    }
}

// exercicio 12////////////////////////////////////
function exercicioDoze() {

    let contador = 1
    while (contador <= 20) {
        if (contador % 3 == 0) {
            alert(contador + ": Fizz")
            
        }
        contador++
    }
}

// exercicio 13//////////////////////////////////
function exercicioTreze() {

    let contador = 1
    while (contador <= 20) {
        if (contador % 5 == 0) {
            alert(contador + ": Buzz")
            
        }
        contador++
    }
}