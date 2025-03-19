//3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
//e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

programa {
  funcao inicio() {
    
    inteiro anoNascimento, anoAtual, idadeUsuarioAnos
    real idadeUsuarioMeses, idadeUsuarioDias, idadeUsuarioSemanas

    escreva("Digite o ano em que você nasceu (YYYY): ")
    leia (anoNascimento)
    
    escreva("Digite o ano atual (YYYY): ")
    leia (anoAtual)

    idadeUsuarioAnos = anoAtual - anoNascimento
    idadeUsuarioMeses = idadeUsuarioAnos * 12
    idadeUsuarioDias = idadeUsuarioAnos * 365
    idadeUsuarioSemanas = idadeUsuarioAnos * 52



    escreva ("Idade em anos: ", idadeUsuarioAnos, ", idade em meses: ",
    idadeUsuarioMeses, ", idade em dias: ", idadeUsuarioDias, ", idade em semanas: ", idadeUsuarioSemanas)


  }
}
