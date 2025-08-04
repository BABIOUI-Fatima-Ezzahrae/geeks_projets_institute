let player = prompt("Enter your name:");
while (!player || player.trim() === "") {
  player = prompt("Please enter a valid name:");
}

let currentAnswer = "";

async function loadQuestion() {
  const res = await fetch('/question');
  const data = await res.json();
  document.getElementById("emoji").textContent = data.emoji;
  currentAnswer = data.answer;

  const form = document.getElementById("guessForm");
  form.innerHTML = "";

  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.type = "button";
    btn.onclick = () => submitGuess(option);
    form.appendChild(btn);
  });
}

async function submitGuess(guess) {
  const res = await fetch('/guess', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guess, player })
  });

  const data = await res.json();
  document.getElementById("result").textContent = data.correct ? "✅ Correct!" : "❌ Wrong!";
  document.getElementById("score").textContent = "Score: " + data.score;

  loadLeaderboard();
  setTimeout(loadQuestion, 1500);
}

async function loadLeaderboard() {
  const res = await fetch('/leaderboard');
  const data = await res.json();
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  data.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.player}: ${entry.score}`;
    list.appendChild(li);
  });
}

loadQuestion();
