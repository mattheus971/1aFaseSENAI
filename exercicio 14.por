//14) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp.
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros)
//desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha
//havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

programa {
  funcao inicio() {

    real quantidadeChopp = 300, quantidadeChoppDesperdicado, quantidadeChoppSobrou, mediaChoppConsumido
    inteiro quantidadePessoas  = 45

    escreva ("Digite a quantidade (litros) de chopp desperdiçado: ")
    leia (quantidadeChoppDesperdicado)

    escreva ("Digite a quantidade (litros) que sobrou: ")
    leia (quantidadeChoppSobrou)

    mediaChoppConsumido = (quantidadeChopp - (quantidadeChoppDesperdicado + quantidadeChoppSobrou)) / quantidadePessoas

    escreva ("Foi consumido em média ", mediaChoppConsumido, " litros de chopp por pessoa.")


  }
}
