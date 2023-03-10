currentNumberWrapper = document.getElementById('currentNumber')
currentNumber = 0

function increment() {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
}