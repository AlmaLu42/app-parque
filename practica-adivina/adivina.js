let min = 1;
let max = 100;
let currentGuess;

const questionContainer = document.getElementById('question-container');
const guessContainer = document.getElementById('guess-container');
const guessText = document.getElementById('guess-text');

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('correct-btn').addEventListener('click', handleCorrect);
document.getElementById('incorrect-btn').addEventListener('click', handleIncorrect);

function startGame() {
  min = 1;
  max = 100;
  makeGuess();
  questionContainer.style.display = 'none';
  guessContainer.style.display = 'block';
}

function makeGuess() {
  currentGuess = Math.floor((min + max) / 2);
  guessText.textContent = `¿Estás pensando en el número ${currentGuess}?`;
}

function handleCorrect() {
  alert(`¡Soy bueno en esto! Tu número es ${currentGuess}`);
  resetGame();
}

function handleIncorrect() {
  let response = prompt(`¿Es tu número mayor o menor que ${currentGuess}? Responde con "mayor" o "menor".`).toLowerCase();
  if (response === 'mayor') {
    min = currentGuess + 1;
  } else if (response === 'menor') {
    max = currentGuess - 1;
  }
  makeGuess();
}

function resetGame() {
  questionContainer.style.display = 'block';
  guessContainer.style.display = 'none';
  guessText.textContent = '';
}
