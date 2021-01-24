function begin() {

    "use strict"


    const btn = document.getElementById("check-button");
    const hints = document.getElementById("hints");
    const scoreElement = document.getElementById("score");
    const highScoreElement = document.getElementById("highscore");
    const newGameButtonElement = document.getElementById("play");
    const guessInputTextElement = document.getElementById('guess_input_text');
    const mysteryNumberElement = document.getElementById('mystery_number');

    let score = 10 - 1;
    let highScore = 0;
    let play = true;
    let input = 2;


    let mysteryNumber = Math.floor(Math.random() * 100 + 1);


    if (play) {
    }


    btn.addEventListener("click", function () {
        let input = document.getElementById("guess_input_text").value;

        if (input == mysteryNumber) {

            if (score > highScore) {
                highScoreElement.innerHTML = `High Score: ${score + 1}`;
                hints.innerHTML = `You got it, your number was ${mysteryNumber}`;
                mysteryNumberElement.innerHTML = mysteryNumber;

                endGame();
            } else {
                hints.innerHTML = `You got it, your number was ${mysteryNumber}`;
                endGame();
            }
            return;
        }
        else if (isNaN(input)) {
            hints.innerHTML = "Please enter a number between 0-100";
            scoreElement.innerHTML = "Score: " + score--;
            return;
        }
        else if (input < mysteryNumber) {
            hints.innerHTML = "You guessed too low";
            scoreElement.innerHTML = "Score: " + score--;
            if (input < 0) {
                hints.innerHTML = "Please enter a number between 0-100";

            } else {

            }
        }
        else if (input > mysteryNumber) {
            hints.innerHTML = "You guessed too high";
            scoreElement.innerHTML = "Score: " + score--;
            if (input > 100) {
                hints.innerHTML = "Please enter a number between 0-100";
                return;
            }
        }
        else {
            hints.innerHTML = "Please enter a number between 0-100";
            scoreElement.innerHTML = "Score: " + score--;
            return;
        }
    });


    function endGame() {

        input = "";
        guessInputTextElement.setAttribute('disabled', '');
        play = false;
        newGame();
    };

    function newGame() {
        const newGameButton = document.querySelector("play");


        newGameButtonElement.addEventListener('click', function () {
            guessInputTextElement.innerText = '';
            guessInputTextElement.removeAttribute('disabled');
            play = true;
            scoreElement.innerHTML = "Score: 10";
            score = 10 - 1;
            mysteryNumberElement.innerHTML = "?";
            mysteryNumber = Math.floor(Math.random() * 100 + 1);


        })
    };

    function displayMessage(message) {
        hints.innerHTML = (`<h4>${message}</h4>`);
    };


}
















// const guess_input_text = 0;
// const guess_input = parseInt(guess_input_text.value);
// const finished = false;
// const guesses = 0;

// var mysteryNumber_number = Math.mysteryNumber() * 100;
// var mysteryNumber_number_integer = Math.floor(mysteryNumber_number);

// while (!finished) {
//     guess_input_text = document.querySelector(".guess_input_text");
//     guess_input = parseInt(guess_input_text);

//     guesses += 1;

//     finished = check_guess();
// };


// document.querySelector(".check-button").addEventListener("click", function () {


//     if (isNaN(guess_input)) {
//         displayMessage("You have not entered a number.\n\n" + "Please enter a number in the range 1 to 100.");
//         return false;
//     }
//     if ((guess_input < 1) || (guess_input > 100)) {
//         displayMessage("Please enter an integer number" + "in the range 1 to 100.");
//         return false;
//     }
//     if (guess_input > target) {
//         displayMessage("Your number is too large!");
//         return false;
//     }
//     if (guess_input < target) {
//         displayMessage("Your number is too small!");
//         return false;
//     }
//     else {
//         displayMessage("You got it! The number was " + target +
//             ". \n It took you " + guesses +
//             "guesses to get the number!");
//         return true;
//     }

// });

// let mysteryNumber = parseInt(Math.trunc(Math.mysteryNumber() * 100) + 1);
// const submit = document.querySelector(".play");

// let score = document.getElementById(".score");
// let numGuesses = 1;
// let high-score = 0;
// let play = true;

// const mysteryNumber = Number(60);







// document.querySelector(".check-button").addEventListener("click", function () {

//     const guess_input_text = (document.querySelector(".user-input"));
//     const guess = parseInt(guess_input_text.value);

//     console.log(guess.value);


//     if (mysteryNumber === guess) {
//         displayMessage(`You guessed correctly!`); endGame();
//     }
//     else if (mysteryNumber > guess) {
//         displayMessage(`Too low! Try again!`);
//         if (guess < 1) {
//             displayMessage('Please enter a number greater than 1!');
//         }
//         else { }
//     }

//     else if (mysteryNumber < guess) {
//         displayMessage(`Too High! Try again!`);
//         if (guess > 100) {
//             displayMessage('Please enter a number less than 500!');
//         }
//         else { }

//     }

//     else {
//         displayMessage('Please enter a valid number!')
//     }
// });





// function endGame() {
//     guess_input_text.value = '';
//     guess_input_text.setAttribute('disabled', '');
//     play = false;
//     newGame();
// };

// function newGame() {
//     const newGameButton = document.querySelector('.play');
//     newGameButton.addEventListener('click', function () {
//         // mysteryNumber = parseInt(Math.trunc(Math.mysteryNumber() * 100) + 1);
//         numGuesses = 1;
//         score.innerHTML = '';
//         guess_input_text.removeAttribute('disabled');
//         play = true;
//     })
// };

// function displayScore(guess_input_text) {
//     guess_input_text.value = '';
//     score.innerHTML += `${guess_input_text}  `;
//     numGuesses++;
// };
