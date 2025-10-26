import confetti from './node_modules/canvas-confetti/dist/confetti.module.mjs'

function winnerConffeti(){
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    })
}

const $ = selector => document.querySelector(selector);

const USERNUMBER = $('.userNumber')
const BTNSEND = $('.btnSend')
const ATTEMPTS = $('.countAttempts')
const SCREEN = $('.screen')

let numberSecret = Math.floor(Math.random() * 100) + 1;
let INTENTOS = 10;
ATTEMPTS.innerHTML = `Tienes ${INTENTOS} intentos`

function isWinner(userNumber,numSecret, attempts){
    if ( userNumber === numSecret){
        winnerConffeti()
        BTNSEND.disabled = true;
        USERNUMBER.disabled = true;
        SCREEN.innerHTML = "Increible has ganado en: " + attempts + " Intentos"
        return true
    }
    SCREEN.innerHTML = userNumber < numSecret
    ? "El número es mayor"
    : "El número es menor";
    return false;
}

function countAttemptsReduce(attempts){
    attempts--;
    ATTEMPTS.innerHTML = `Tienes ${attempts} intentos`;
    return attempts;
}

function game(){
    const userGuess = parseInt(USERNUMBER.value)

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        console.log(userGuess);
        SCREEN.innerHTML = 'El valor introducido tiene que ser un número del 1 al 100'
        return
    }

    if (!isWinner(userGuess,numberSecret,INTENTOS)){
        INTENTOS = countAttemptsReduce(INTENTOS);

        if (INTENTOS === 0) {
            BTNSEND.disabled = true;
            USERNUMBER.disabled = true;
            SCREEN.innerHTML = `!GAME OVER! El número era ${numberSecret}`;
        }
    }
}

BTNSEND.addEventListener('click', game)