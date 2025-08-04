import express from 'express';
import quizRouter from './routes/quiz.js';

const app = express();

app.use(express.json());
app.use('/', quizRouter);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
