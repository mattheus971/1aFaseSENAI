
//Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.

programa {
  funcao inicio() {
    
    inteiro numeroDigitado

    escreva("Digite um número: ")
    leia(numeroDigitado)

    se(numeroDigitado % 2 == 0){

      escreva("O número é par! ")

    }senao{

      escreva("O número é impar! ")
    }



  }
}
