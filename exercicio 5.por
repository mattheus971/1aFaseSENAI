// Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {
    
    real horas, horasEmMinutos, horasEmsegundos

    escreva ("Digite um valor em horas: ")
    leia (horas)

    horasEmMinutos = horas * 60
    horasEmsegundos = horas * 3600

    escreva (horas, " em hora(s) são ", horasEmMinutos, " minutos, ou ", horasEmsegundos, " segundos.")




  }
}
