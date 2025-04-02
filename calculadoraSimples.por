
//Calculadora Simples: Crie uma calculadora simples que peça ao usuário dois números e uma operação (adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.

programa {
  funcao inicio() {
    
    real numeroUm, numeroDois, resultadoOperacao
    cadeia operacao


    escreva("Digite um número: ")
    leia(numeroUm)

    escreva("Qual operação deseja fazer (+, -, * ou /): ")
    leia(operacao)

    escreva("Digite outro numero: ")
    leia(numeroDois)
    

    escolha(operacao){

      caso "+":
      resultadoOperacao = numeroUm + numeroDois
      escreva("A soma é : ", resultadoOperacao)
      pare

      caso "-":
      resultadoOperacao = numeroUm - numeroDois
      escreva("A subtração é : ", resultadoOperacao)
      pare

      caso "*":
      resultadoOperacao = numeroUm * numeroDois
      escreva("A multiplicação é : ", resultadoOperacao)
      pare

      caso "/":
      resultadoOperacao = numeroUm / numeroDois
      escreva("A divisão é : ", resultadoOperacao)
      pare

    }







  }
}
