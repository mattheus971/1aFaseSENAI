function calcular() {
    let nome = document.getElementById("nome").value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let tagResultado = document.getElementById("resultado")


    let imc = peso / (altura * altura)
    tagResultado.innerText = "Olá " + nome + ", seu IMC  é: " + imc.toFixed(2)

}