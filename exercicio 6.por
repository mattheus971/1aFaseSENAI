//6) Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.

programa {
  funcao inicio() {
    
    real temperaturaCelsius, celsiusEmFahrenheit

    escreva ("Digite um temperatura em graus Celsius: ")
    leia (temperaturaCelsius)

    celsiusEmFahrenheit = (temperaturaCelsius * 9 / 5) + 32

    escreva (temperaturaCelsius, " graus Celsius em Fahrenheit é ", celsiusEmFahrenheit, " Fahrenheint")
  }
}
