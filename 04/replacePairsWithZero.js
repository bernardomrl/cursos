// solucao atividade curso DIO 
// substituindo todos os numeros pares do array por 0

function replacePairs(numbers) {
    if (!numbers) return -1
    if (!numbers.lenght) return -1
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            console.log("O numero já é 0.")
        } else if (numbers[i] % 2 === 0) {
            console.log(`Substituindo ${numbers[i]} por 0...`)
            numbers[i] = 0
        }
    }
    return numbers
}

let numbers = [1, 3, 4, 6, 80, 33, 23, 90] // exemplo
console.log(replacePairs(numbers))