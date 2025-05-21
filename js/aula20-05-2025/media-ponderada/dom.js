function calcular() {
    let notaUm = Number(document.getElementById("notaUm").value)
    let pesoUm = Number(document.getElementById("pesoUm").value)
    let notaDois = Number(document.getElementById("notaDois").value)
    let pesoDois = Number(document.getElementById("pesoDois").value)
    let notaTres = Number(document.getElementById("notaTres").value)
    let pesoTres = Number(document.getElementById("pesoTres").value)
    let notaQuatro = Number(document.getElementById("notaQuatro").value)
    let pesoQuatro = Number(document.getElementById("pesoQuatro").value)
    let notaCinco = Number(document.getElementById("notaCinco").value)
    let pesoCinco = Number(document.getElementById("pesoCinco").value)    

    let tagResultado = document.getElementById("resultado")

    let somaPesos = pesoUm + pesoDois + pesoTres + pesoQuatro + pesoCinco;
let resultado =  ((notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres) + (notaQuatro * pesoQuatro) + (notaCinco * pesoCinco)) / somaPesos;
    
    tagResultado.innerText = "Sua média é " + resultado

}