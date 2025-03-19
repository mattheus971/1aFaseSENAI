    //1) Programar as seguintes entradas de dados de um cliente: Nome, idade, nacionalidade, endereço.
    //Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], [idade] anos,
    //[nacionalidade], reside no endereço [endereço]." Exemplo: Cliente Lucas, 29 anos, brasileiro,
    //reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

programa {
  funcao inicio() {
    
    cadeia nomeCliente, nacionalidadeCliente, enderecoCliente
    inteiro idadeCliente

    escreva ("Digite o seu nome: ")
    leia (nomeCliente)
    
    escreva ("Digite o sua idade: ")
    leia (idadeCliente)

    escreva ("Digite o sua nacionalidade: ")
    leia (nacionalidadeCliente)

    escreva ("Digite o sendereço: ")
    leia (enderecoCliente)

    escreva ("Cliente ", nomeCliente, ", ", idadeCliente,  " anos, ", nacionalidadeCliente, ", reside no endereço ", enderecoCliente )

  }
}
