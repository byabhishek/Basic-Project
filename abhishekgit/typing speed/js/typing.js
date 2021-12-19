var typeWords = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];
var x = document.getElementById("difficulty").selectedIndex;
var difficultySelect = document.getElementsByTagName("option")[x].value;
var words = document.getElementById("typing-word");
var text = document.getElementById("text");
var scoreCount = document.getElementById("score-count");
var time = document.getElementById("time-count");
Math.floor(Math.random() * 19);
var timeCount = 10;
var timeInterval = setInterval(updateTime, 1000);
var endGame = document.getElementById("end-game-container");
var score = 0;
var typingGame, gameOver, updateTime;
function typingGame() {
  // debugger;
  if (words.innerHTML == text.value && difficultySelect == "easy") {
    words.innerHTML = typeWords[Math.floor(Math.random() * 19)];
    timeCount += 5;
    document.getElementById("score-count").innerHTML = score++;
    text.value = "";
  }
  if (words.innerHTML == text.value && difficultySelect == "medium") {
    words.innerHTML = typeWords[Math.floor(Math.random() * 19)];
    timeCount += 3;
    document.getElementById("score-count").innerHTML = score++;
    text.value = "";
  }
  if (words.innerHTML == text.value && difficultySelect == "hard") {
    words.innerHTML = typeWords[Math.floor(Math.random() * 19)];
    timeCount += 2;
    document.getElementById("score-count").innerHTML = score++;
    text.value = "";
  }
}
function updateTime() {
  timeCount--;
  time.innerHTML = timeCount + "s";
  if (timeCount === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
function gameOver() {
  endGame.innerHTML = `
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Reload</button>
    `;
  endGame.style.display = "flex";
}