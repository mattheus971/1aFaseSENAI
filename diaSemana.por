
//Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo,1 = Domingo, 2 = Segunda, etc.).

programa {
  funcao inicio() {
    
    inteiro numeroDigitado

    escreva("Digite um número de 1 a 7: ")
    leia(numeroDigitado)

    escolha(numeroDigitado){

      caso 1:
      escreva("Domingo")
      pare

      caso 2:
      escreva("Segunda")
      pare
      
      caso 3:
      escreva("Terça")
      pare

      caso 41:
      escreva("Quarta")
      pare

      caso 5:
      escreva("Quinta")
      pare

      caso 6:
      escreva("Sexta")
      pare

      caso 7:
      escreva("Sábado")
      pare
    }
  }
}
