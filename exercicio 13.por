//13)Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel
//rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material
//que deseja entregar na fábrica e mostrar o total que receberá em reais.

programa {
  funcao inicio() {
    
    real quantidadePlastico, quantidadePapel, quantidadeMetal, valorReceber

    escreva ("Digite a quantidade de plastico (kg): ")
    leia (quantidadePlastico)

    escreva ("Digite a quantidade de papel (kg): ")
    leia (quantidadePapel)

    escreva ("Digite a quantidade de metal (kg): ")
    leia (quantidadeMetal)

    valorReceber = (quantidadePlastico / 10) * 2 + (quantidadePapel / 30) * 3 + (quantidadeMetal / 50) * 5

    escreva ("O valor total que você vai receber é: R$", valorReceber, "\n")
  }
}
