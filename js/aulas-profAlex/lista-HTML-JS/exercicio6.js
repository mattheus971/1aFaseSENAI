function calcularImc() {
    let peso = Number(prompt("Digite o seu peso (kg): "));
    let altura = Number(prompt("Digite sua altura (m): "));

    let imc = peso / (altura * altura)
    
    alert("O seu IMC é: " + imc);

    if(imc < 18.5){

        alert("Abaixo do peso")

    }else if(imc >= 18.5 && imc < 25){

        alert("Peso normal")

    }else if(imc >= 25 && imc < 30){

        alert("Sobrepeso")

    }else{
        alert("Obesidade")
    }

}

