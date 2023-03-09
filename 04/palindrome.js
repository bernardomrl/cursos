// solucao 1 (mais utilizada e simples)
function verifyPalindrome(string) {
    if (!string) return "string inexistente"

    return string.split("").reverse().join("") === string
}

// solucao 2 (curso DIO)

// string = ARARA
// ARARA = array
// 01234 - string.lenght = 5 (- 1 para comparar com a ultima letra)

function verifyPalindrome2(string) {
    if (!string) return "string inexistente"

    for (let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.lenght - 1 - i]) {
            return false
        }
    }

    return true
}