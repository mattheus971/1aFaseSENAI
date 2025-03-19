//11) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura,
//realizar o cálculo e mostrar o resultado na tela.
 
programa {
  funcao inicio() {
    
    real peso, altura, imc

    escreva ("Digite seu peso (kg): ")
    leia (peso)

    escreva ("Digite sua altura (m): ")
    leia (altura)

    imc = peso / (altura * altura)

    escreva ("O seu IMC é ", imc)

  }
}
