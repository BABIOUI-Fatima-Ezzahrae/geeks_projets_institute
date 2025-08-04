import { Router } from "express";

const router = Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];
let currentQuestionIndex = 0;
let score = 0;

router.get('/', (_, res) => {
    try {
        currentQuestionIndex = 0;
        score = 0;
        res.json({
            message : '🕹🎮 Welcome to the Quiz Game! 🎉',
            question: triviaQuestions[currentQuestionIndex].question
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
});
router.post('/', (req, res) => {
    try {
        const {answer} = req.body;
        
        if (!answer) {
            return res.status(400).json({ error: 'Answer is required' });
        }

        const currentQuestion = triviaQuestions[currentQuestionIndex];
        const isCorrect = answer.trim().toLowerCase() === currentQuestion.answer.toLocaleLowerCase();

        if (isCorrect) score++;
        currentQuestionIndex++;

        if (currentQuestionIndex >= triviaQuestions.length) {
            return res.json({
                message: isCorrect ? "✅ Correct!" : `❌ Incorrect. Correct answer: ${currentQuestion.answer}`,
                finished,
                finalScore: score
            });
        } else {
            return res.json({
                message: isCorrect ? "✅ Correct!" : `❌ Incorrect. Correct answer: ${currentQuestion.answer}`,
                question: triviaQuestions[currentQuestionIndex].question,
                score
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.get('/score', (_, res) => {
    try {
        res.json({
            score,
            total: triviaQuestions.length
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
})

export default router;