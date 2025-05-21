function calcular() {
    let notaUm = Number(document.getElementById("notaUm").value)
    let notaDois = Number(document.getElementById("notaDois").value)
    let notaTres = Number(document.getElementById("notaTres").value)
    let notaQuatro = Number(document.getElementById("notaQuatro").value)
    let notaCinco = Number(document.getElementById("notaCinco").value)

    let tagResultado = document.getElementById("resultado")

    
let resultado =  (notaUm + notaDois + notaTres + notaQuatro + notaCinco) / 5
    
    tagResultado.innerText = "Sua média é " + resultado

}