import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { emojis } from './data/emojis.js';
import fs from 'fs/promises';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));
app.use(express.json());

let leaderboard = [];
let scores = new Map();

const loadLeaderboard = async () => {
  try {
    const data = await fs.readFile('./leaderboard.json', 'utf-8');
    leaderboard = JSON.parse(data);
    leaderboard.forEach(({ player, score }) => scores.set(player, score));
  } catch (error) {
    leaderboard = [];
  }
};

const saveLeaderboard = async () => {
  await fs.writeFile('./leaderboard.json', JSON.stringify(leaderboard, null, 2));
};

await loadLeaderboard();

function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(random.name)) {
      options.push(random.name);
    }
  }

  options.sort(() => Math.random() - 0.5);

  return {
    emoji: correct.emoji,
    answer: correct.name,
    options
  };
}

let currentQuestion = getRandomQuestion();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/question', (req, res) => {
  currentQuestion = getRandomQuestion();
  res.json({
    emoji: currentQuestion.emoji,
    options: currentQuestion.options
  });
});

app.post('/guess', async (req, res) => {
  try {
    const { guess, player } = req.body;
    if (!guess || !player) return res.status(400).json({ error: 'Missing data' });

    const correct = guess === currentQuestion.answer;
    let playerScore = scores.get(player) || 0;
    if (correct) playerScore++;

    scores.set(player, playerScore);
    leaderboard = Array.from(scores.entries()).map(([player, score]) => ({ player, score }));
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    await saveLeaderboard();

    res.json({ correct, score: playerScore });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
