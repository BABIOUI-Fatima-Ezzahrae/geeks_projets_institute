import express from "express";
import {fetchPosts} from './data/dataService.js';

const app = express();

app.use(express.json());

app.get('/posts', async (req, res) => {
    try {
        const data = await fetchPosts();
        const posts = data;

        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});