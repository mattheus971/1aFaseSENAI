function calcularMedia() {
    let notaUm = Number(prompt("Digite a primeira nota: "))
    let notaDois = Number(prompt("Digite a segunda nota: "))
    let notaTres = Number(prompt("Digite a terceira nota: "))

    let media = (notaUm + notaDois + notaTres) / 3
   
    alert("A media é "+ media)
}

