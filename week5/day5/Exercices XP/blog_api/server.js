import express from 'express';

const app = express();

// Middleware pour gérer les données JSON
app.use(express.json()); // Pour que Express accepte les données JSON dans le body des requêtes

let posts = [
  { id: 1, title: "First Post", content: "This is the first blog post." },
  { id: 2, title: "Second Post", content: "This is the second blog post." }
];

// Route GET /posts - Récupérer tous les posts
app.get('/posts', (req, res) => {
    try {
        res.json(posts); // Renvoie tous les posts dans la réponse
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Route GET /posts/:id - Récupérer un post spécifique par ID
app.get('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id); // Récupérer l'ID de la requête
        const post = posts.find(p => p.id === id); // Trouver le post avec cet ID

        if (!post) {
            return res.status(404).json({ error: "Post not found" }); // Si le post n'existe pas
        }

        res.json(post); // Renvoie le post trouvé
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Route POST /posts - Créer un nouveau post
app.post('/posts', async (req, res) => {
    try {
        const { title, content } = req.body; // Récupérer les données envoyées par le client

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required" });
        }

        // Créer un nouvel objet de post
        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1, // Générer un nouvel ID
            title,
            content
        };

        posts.push(newPost); // Ajouter le nouveau post à l'array

        res.status(201).json(newPost); // Renvoie le nouveau post avec un code HTTP 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.put('/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id); 
        const post = posts.find(p => p.id === id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const { title, content } = req.body;
        post.title = title || post.title; // Si un titre est fourni, on met à jour
        post.content = content || post.content;

        res.json(post); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id); 
        const index = posts.findIndex(p => p.id === id); 
        
        if (index === -1) {
            return res.status(404).json({ error: "Post not found" });
        }

        posts.splice(index, 1); 
        res.status(204).send(); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
