programa {
  funcao inicio() {
    
    inteiro idFuncionario
    real qtdHoras, valorHora, salario

    escreva("Digite o ID do funcionario: ")
    leia(idFuncionario)

    escreva("Digite quantas horas o funcionario trabalhou: ")
    leia(qtdHoras)

    escreva("Digite o valor da hora trabalhada: ")
    leia(valorHora)

    salario = qtdHoras * valorHora

    escreva("Número: ", idFuncionario)
    escreva("\nSalário: R$ ", salario)

  }
}
