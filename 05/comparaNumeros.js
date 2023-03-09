/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */

// minha resolucao

function calc(num1, num2) {
    sum = num1 + num2
    if (num1 === num2) {
        compare = "são" // true
    } else {
        compare = "não são" // false
    }

    if (soma > 10) {
        biggerThan10 = "maior" // true
    } else {
        biggerThan10 = "menor" // false
    }

    if (soma > 20) {
        biggerThan20 = "maior" // true
    } else {
        biggerThan20 = "menor" // false
    }

    return `Os números ${num1} e ${num2} ${compare} iguais. Sua soma é ${sum}, que é ${biggerThan10} que 10 e ${biggerThan20} que 20.`
}

// codigo curso DIO

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)


    return `${primeiraFrase} ${segundaFrase}`
    // return saoIguais ? "são iguais" : "não são iguais";      (if iternario, atua exatamente como um if comum)
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if (num1 !== num2) {
        saoIguais = "não"
    }

    return `OS números ${num1} e ${num2} ${saoIguais} são iguais.`
}
function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2

    let resultado10 = "menor"
    let resultado20 = "menor"
    const compara10 = soma > 10
    const compara20 = soma > 20

    if (compara10) {
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}