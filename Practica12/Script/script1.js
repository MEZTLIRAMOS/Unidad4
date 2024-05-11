//Esta línea genera un número aleatorio entre 1 y 50 y lo asigna a la variable 
let secretNumber = Math.floor(Math.random() * 50) + 1;
//Esta variable lleva la cuenta de cuántos intentos le quedan 
//al jugador para adivinar el número secreto.
let attempts = 5;
//se ejecuta cuando el usuario hace clic en el botón "Enter" para verificar su suposición
function checkGuess() {
//Obtiene el valor ingresado por el usuario como suposición y 
//lo convierte a un número entero usando parseInt
    let guess = parseInt(document.getElementById('guessInput').value);
//el elemento HTML con ID "result" para mostrar el resultado de 
//la suposición del usuario y establece el color del texto según el resultado.
    let resultElement = document.getElementById('result');
//Reduce el número de intentos restantes (attempts) si la suposición es incorrecta
    if (guess === secretNumber) {
        resultElement.textContent = 'Muy bien Acertaste Fue Correcto.';
        resultElement.style.color = 'green';
        disableInputAndButton();
    } else if (attempts === 1) {
        resultElement.textContent = 'Perdiste Por Negro Vuelve A Jugar. ' + secretNumber;
        resultElement.style.color = 'red';
        disableInputAndButton();
    } else {
        let difference = Math.abs(secretNumber - guess);
        if (difference <= 10) {
            resultElement.textContent = 'Estas cerca..';
            resultElement.style.color = 'red';
        } else if (difference <= 30) {
            resultElement.textContent = 'Estas lejos';
            resultElement.style.color = 'blue';
        } else {
            resultElement.textContent = 'Felicidades Acertaste!';
            resultElement.style.color = 'green';
        }
        attempts--;
    }
}
//Esta función deshabilita tanto la entrada de suposiciones como el botón de verificación 
//después de que el usuario adivina correctamente o se queda sin intentos.
function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
//Esta función se activa cuando el usuario hace clic en el botón "Volver a Jugar" para reiniciar el juego
function playAgain() {
//Genera un nuevo número secreto (secretNumber) entre 1 y 50
    secretNumber = Math.floor(Math.random() * 50) + 1;
//Restablece el número de intentos (attempts) a 5
    attempts = 5;
//Habilita la entrada de suposiciones y el botón de verificación.
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
//Borra el resultado anterior mostrado y limpia el campo de entrada.
    document.getElementById('result').textContent = '';
    document.getElementById('guessInput').value = '';
}

// let secretNumber = Math.floor(Math.random() * 50) + 1;
// let chances = 5;

// function checkGuess() {
//   const guess = parseInt(document.getElementById('guessInput').value);
//   const feedback = document.getElementById('feedback');
//   const chancesLeft = document.getElementById('chancesLeft');

//   if (isNaN(guess) || guess < 1 || guess > 50) {
//     feedback.textContent = 'Please enter a valid number between 1 and 100.';
//   } else {
//     chances--;
//     chancesLeft.textContent = chances;

//     if (guess === secretNumber) {
//       feedback.textContent = 'Felicidades lo encongtraste :3...';
//       feedback.style.color = 'green';
//       document.getElementById('guessInput').disabled = true;
//     } else {
//       const difference = Math.abs(secretNumber - guess);
//       if (difference <= 10) {
//         feedback.textContent = 'Estas serca';
//         feedback.style.color = 'red';
//       } else {
//         feedback.textContent = 'Estas muy lejos!';
//         feedback.style.color = 'blue';
//       }

//       if (chances === 0) {
//         feedback.textContent = `Perdiste, el numero es: ${secretNumber}.`;
//         feedback.style.color = 'black';
//         document.getElementById('guessInput').disabled = true;
//       }
//   }
// }
// }

// function btn(){
//   console.log("El juego ha sido reiniciado.");
// }
// document.getElementById("new-game-btn").addEventListener("click", function(){
//   btn();
// }