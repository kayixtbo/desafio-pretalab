/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas 
Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá 
encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
function somarMedalhas(a,b,c) {
    return a + b + c 
}
function mostrarPaises(paises) {
    let textoSaida = "#Ranking de medalhas: \n"

    for (const pais of paises) {
        let textoPais = `#${pais.nome}: ${pais.medalhas} medalhas\n`
        textoSaida = textoSaida + textoPais
    }
    alert(textoSaida)
}

let paises = []
let sair = ""
do {
    let nomePais = prompt("Digite o nome do país")
    let medalhaOuro = Number(prompt("Digite a quantidade de medalhas de ouro"))
    let medalhaPrata = Number(prompt("Digite a quantidade de medalhas de prata"))
    let medalhaBronze = Number(prompt("Digite a quantidade de medalhas de bronze"))

    let medalhas = somarMedalhas(medalhaOuro, medalhaPrata, medalhaBronze)
    let pais = {
        nome: nomePais,
        medalhas: medalhas
    }

    paises.push(pais)

    sair = prompt("Digite sair para encerrar")
} while (sair != "sair");

mostrarPaises(paises)