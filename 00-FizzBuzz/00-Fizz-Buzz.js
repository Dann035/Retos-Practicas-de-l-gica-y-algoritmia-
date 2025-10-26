
// 🎯 El Reto: FizzBuzz

const BtnEnviar = document.querySelector('.btnEnviar');
const SCREEN = document.querySelector('.screen');
BtnEnviar.addEventListener('click', function (e) {
    e.preventDefault()
    const NumberInput = document.querySelector('.number');
    const NUMBER = NumberInput.value;
    const respuesta = FizzBuzz(NUMBER);
    SCREEN.innerHTML = respuesta;
});

function FizzBuzz(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    }
    else if (value % 3 === 0) {
        return "Fizz";
    }
    else if (value % 5 === 0) {
        return "Buzz";
    }
    else {
        return value;
    }
}
