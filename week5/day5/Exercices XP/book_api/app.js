import express from 'express';

const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", publishedYear: 1943 },
    { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 3, title: "Moby Dick", author: "Herman Melville", publishedYear: 1851 }
];

app.get('/books', (req, res) => {
    try {
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
});

app.get('/books/:bookId', async (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const book = books.find(b => b.id === bookId);

        if (!book) {
            return res.status(404).json({error: "Livre introvable!!"})
        }
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
});

app.post('/books', (req, res) => {
    try {
        const {title, author, publishedYear} = req.body;

        if (!title || !author || !publishedYear) {
            return res.status(404).json({error: "Tous les champs sont requis!!"})
        }

        const newBook = { id: books.length ? books[books.length -1].id + 1 :1,
            title,
            author,
            publishedYear};
        
        books.push(newBook);
        res.status(201).json({
            message : "add post successful",
            success : true,
            post : newBook
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
});

app.put('/books/:bookId', async (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const bookIndex = books.findIndex(b => b.id === bookId);

        if (bookIndex === -1) {
            return res.status(404).json({ error: "Livre introuvable!" });
        }

        const {title, author, publishedYear} = req.body;
        const PutBook = books[bookIndex];

        PutBook.title = title || PutBook.title;
        PutBook.author = author || PutBook.author;
        PutBook.publishedYear = publishedYear || PutBook.publishedYear;
        
        res.json({
            message : "add put successful",
            success : true,
            post : PutBook
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
});
app.delete('/books/:bookId', async (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const bookIndex = books.findIndex(b => b.id === bookId);

        if (bookIndex === -1) {
            return res.status(404).json({ error: "Livre introuvable!" });
        }

        const deleted = books.splice(bookIndex, 1);
        res.status(200).json(
            {
            message : "add delete successful",
            success : true,
            post : deleted[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(5000, ( ) => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:5000`);
})