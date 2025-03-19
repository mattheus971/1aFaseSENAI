//4) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido,
//considerando um desconto de 20% para impostos.

programa {
  funcao inicio() {
    
    real salarioBruto, descontoImpostos, salarioLiquido

    escreva ("Digite o seu salário bruto (R$): ")
    leia (salarioBruto)

    descontoImpostos = 20 * salarioBruto / 100

    salarioLiquido = salarioBruto - descontoImpostos

    escreva("O salário liquido é de R$ ", salarioLiquido)



  }
}
