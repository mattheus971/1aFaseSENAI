
//Verificando a idade: Peça ao usuário sua idade e, em seguida, exiba uma mensagem que diga se ele é maior de idade ou menor de idade.

programa {
  funcao inicio() {
    
    inteiro idade

    escreva("Digite sua idade: ")
    leia(idade)

    se(idade >= 18){

      escreva("Você é maior de idade! ")

    }senao{

      escreva("Você é menor de idade!")
    }


  }
}
