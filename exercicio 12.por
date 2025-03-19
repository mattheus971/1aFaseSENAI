//12) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
//Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total
//de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que
//cada um representa em relação ao total de eleitores. 

programa {
  funcao inicio() {
    
    inteiro totalEleitores, votosCandidatoX, votosCandidatoY, totalVotosBrancos, totalVotosNulos
    real percentualVotosCandidatoX, percentualVotosCandidatoY, percentualVotosBrancos, percentualVotosNulos


    escreva ("Digite o total de eleitores: ")
    leia (totalEleitores)

    escreva ("Digite o total de votos do cadidato X: ")
    leia (votosCandidatoX)

    escreva ("Digite o total de votos do cadidatoY: ")
    leia (votosCandidatoY)

    escreva ("Digite o total de votos brancos: ")
    leia (totalVotosBrancos)

    escreva ("Digite o total de votos nulos: ")
    leia (totalVotosNulos)


    percentualVotosCandidatoX = (votosCandidatoX * 100) / totalEleitores
    percentualVotosCandidatoY = (votosCandidatoY * 100) / totalEleitores
    percentualVotosBrancos = (totalVotosBrancos * 100) / totalEleitores
    percentualVotosNulos = (totalVotosNulos * 100) / totalEleitores

    escreva ("Total de eleitores: ", totalEleitores, "\n")
    escreva ("Votos Candidato X: ", percentualVotosCandidatoX, "% \n")
    escreva ("Votos andidato Y: ", percentualVotosCandidatoY, "%\n")
    escreva ("Votos Brancos: ", percentualVotosBrancos, "%\n")
    escreva ("Votos Nulos: ", percentualVotosNulos, "%\n")

  }
}
