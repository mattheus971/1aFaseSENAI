
//Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.

programa {
  funcao inicio() {
    
    inteiro numeroAleatorio = 7, numeroDigitado


    escreva("Tente acerta o número: ")
    leia(numeroDigitado)

    se(numeroDigitado == numeroAleatorio){

      escreva("Você acertou! ")

    }senao{

      escreva("Número errado. ")
    }
  }
}
