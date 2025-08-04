import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World! Welcome to our website 😊 .');
});

router.get('/about', (req, res) => {
    res.send('About Us Page - We are a company dedicated to providing the best services.🤞');
});

export default router;
