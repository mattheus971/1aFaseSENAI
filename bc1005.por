

programa {
  funcao inicio() {
    
    real notaUm, notaDois, resultadoMedia
    real pesoNotaUm = 3.5, pesoNotaDois = 7.5


    escreva("Digite a primeira nota: ")
    leia(notaUm)

    escreva("Digite a segunda nota: ")
    leia(notaDois)


    resultadoMedia = ((notaUm * pesoNotaUm) + (notaDois * pesoNotaDois)) / (pesoNotaUm + pesoNotaDois)

    escreva("A média é: ", resultadoMedia)










  }
}
