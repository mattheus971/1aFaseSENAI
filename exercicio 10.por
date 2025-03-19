//10) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação.
//Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

programa {
  funcao inicio() {
    
    real horasSemanaUm, horasSemanaDois, horasSemanaTres, horasSemanaQuatro, somaHoras, media

    escreva ("Digite a quantidade de horas estudadas na primeira semana: ")
    leia (horasSemanaUm)

    escreva ("Digite a quantidade de horas estudadas na segunda semana: ")
    leia (horasSemanaDois)

    escreva ("Digite a quantidade de horas estudadas na terceira semana: ")
    leia (horasSemanaTres)

    escreva ("Digite a quantidade de horas estudadas na quarta semana: ")
    leia (horasSemanaQuatro)


    somaHoras = horasSemanaUm + horasSemanaDois + horasSemanaTres + horasSemanaQuatro
    media = somaHoras / 4

    escreva(" Você estudou em média ", media, " horas por semana.")

  }
}
