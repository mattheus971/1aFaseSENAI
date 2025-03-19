//8) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa.
//Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores
//dos itens e mostre na tela valor que você deve receber (troco).

programa {
  funcao inicio() {
    
    real valorArroz, valorBatataPalha, valorSucoGarrafa, troco, soma
    real dinheiroNoBolso = 100

    escreva ("Digite o valor do arroz: R$ ")
    leia (valorArroz)

    escreva ("Digite o valor da Batata Palha: R$ ")
    leia (valorBatataPalha)

    escreva ("Digite o valor do Suco de Garrafa: R$ ")
    leia (valorSucoGarrafa)

    soma = valorArroz + valorBatataPalha + valorSucoGarrafa
    troco =  dinheiroNoBolso - soma

    escreva ("O valor a receber de troco é R$ ", troco)
    
  }
}
