const prompt = require("prompt-sync")();

let randomNumber = Math.floor(Math.random() * 10 + 1);

const analyzeNumber = (number, attempt) => {
    while (true) {
        if (number === attempt) {
            console.log(`You won! The number is ${number}`);
            break;
        } else {
            console.log("Too bad, try again.");
            attempt = parseInt(prompt("I'm thinking of a number from 1 to 10, which is it? "));
        }
    }
}

const playerAttempt = parseInt(prompt("I'm thinking of a number from 1 to 10, which is it? "));
analyzeNumber(randomNumber, playerAttempt);

