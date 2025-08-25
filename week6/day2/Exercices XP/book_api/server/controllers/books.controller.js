import * as PostModel from "../models/books.model.js";

export const getAllBooks = async (req, res) => {
    try {
        const book = await PostModel.getAllBooks();
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await PostModel.getBookById(req.params.id);
        if (!book) {
            return res.status(404).json({ 
                success: false, 
                message: 'Book not found' 
            });
        }
        res.json({ success: true, data: book });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, published_date, isbn } = req.body;

        // Check if any required fields are missing
        if (!title || !author || !published_date || !isbn) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing data' 
            });
        }

        // Insert book into the database
        const newBook = await PostModel.createBook(title, author, published_date, isbn); // Pass the values separately
        res.status(201).json({
            success: true,
            data: newBook
        });
    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({ success: false, message: error.message });
    }
};


export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const existingBook = await PostModel.getBookById(id);
        if (!existingBook) {
            return res.status(404).json({ 
                success: false, 
                message: 'Book not found' 
            });
        }

        const { title, author, published_date, isbn } = req.body;

        const updatedBook = await PostModel.updateBook(id, {
            title: title ?? existingBook.title,
            author: author ?? existingBook.author,
            published_date: published_date ?? existingBook.published_date,
            isbn: isbn ?? existingBook.isbn
        });

        // Return the updated book
        res.json({ success: true, data: updatedBook });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};


export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await PostModel.deleteBook(id);
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.json({ success: true, message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};