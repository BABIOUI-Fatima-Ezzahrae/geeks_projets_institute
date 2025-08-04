import { Router } from "express";

const router = Router();
const books = [];

router.get('/books', (req, res) => {
    try {
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/books/:id', (req, res) => {
    try {
        const { id } = req.params;
        const book = books.find(b => b.id === parseInt(id));

        if (!book) {
            return res.status(404).json({ error: "Book not found!" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/books', (req, res) => {
    try {
        const { title, author, description, publishedDate, price, stock } = req.body;

        if (!title || !author || !description || !publishedDate || !price || !stock) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        const newBook = {
            id: books.length + 1,
            title,
            author,
            description,
            publishedDate,
            price,
            stock
        };

        books.push(newBook);

        res.status(201).json({
            message: "Book created successfully!",
            success: true,
            post: newBook
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/books/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, description, publishedDate, price, stock } = req.body;

        const bookIndex = books.findIndex(b => b.id === parseInt(id));
        if (bookIndex === -1) {
            return res.status(404).json({ error: "Book not found!" });
        }

        const updatedBook = {
            id: parseInt(id),
            title: title || books[bookIndex].title,
            author: author || books[bookIndex].author,
            description: description || books[bookIndex].description,
            publishedDate: publishedDate || books[bookIndex].publishedDate,
            price: price || books[bookIndex].price,
            stock: stock || books[bookIndex].stock
        };

        books[bookIndex] = updatedBook;

        res.json({
            message: "Book updated successfully!",
            success: true,
            post: updatedBook
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/books/:id', (req, res) => {
    try {
        const { id } = req.params;
        const indexBook = books.findIndex(b => b.id === parseInt(id));

        if (indexBook === -1) {
            return res.status(404).json({ error: "Book not found!" });
        }

        const deletedBook = books.splice(indexBook, 1)[0];

        res.status(200).json({
            message: "Book deleted successfully!",
            success: true,
            post: deletedBook
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
