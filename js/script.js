
function calcularMoedas() {

    let numeroBrinquedos, moedasLevar
    numeroBrinquedos = Number(prompt("Digite o número de brinquedos que você vai levar: "))

    if (numeroBrinquedos >= 0 && numeroBrinquedos <= 3) {
        moedasLevar = numeroBrinquedos
    } else if (numeroBrinquedos > 3) {
        moedasLevar = 3
    } else {
        moedasLevar = 0
    }

    alert(moedasLevar + " moedas.")

}



