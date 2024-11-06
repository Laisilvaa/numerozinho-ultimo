let randomNumber;
let attempts = 0;
let message = document.getElementById("message");
let attemptsCount = document.getElementById("attemptsCount");
let guessInput = document.getElementById("guessInput");
let submitButton = document.getElementById("submitGuess");
let resetButton = document.getElementById("resetButton");

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;  // Número aleatório entre 1 e 100
  attempts = 0;
  attemptsCount.textContent = attempts;
  message.textContent = "Faça um palpite!";
  guessInput.value = '';
  resetButton.style.display = "none";
  submitButton.disabled = false;
}

function checkGuess() {
  let userGuess = parseInt(guessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Por favor, digite um número entre 1 e 100.";
    return;
  }
  
  attempts++;
  attemptsCount.textContent = attempts;

  if (userGuess < randomNumber) {
    message.textContent = "Tente um número maior!";
  } else if (userGuess > randomNumber) {
    message.textContent = "Tente um número menor!";
  } else {
    message.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
    submitButton.disabled = true;
    resetButton.style.display = "block";
  }
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", startGame);

// Começar o jogo quando a página carregar
window.onload = startGame;
