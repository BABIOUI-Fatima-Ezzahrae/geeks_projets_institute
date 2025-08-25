import pool from "../config/db.js";

export const getAllBooks = async () => {
    const result = await pool.query('SELECT * FROM books ORDER BY id DESC');
    return result.rows;
}
export const getBookById = async (id) => {
    const result = await pool.query('SELECT * FROM books WHERE id=$1', [id]);
    return result.rows[0];
}
export const createBook = async (title, author, published_date, isbn) => {
    const result = await pool.query('INSERT INTO books (title, author, published_date, isbn) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, published_date, isbn]);
    return result.rows[0];
}
export const updateBook = async (id, title, author, published_date, isbn) => {
     const fields = [];
        const values = [];
        let idx = 1;
    
        if (title !== undefined) {
            fields.push(`title=$${idx++}`);
            values.push(title);
        }
        if (author !== undefined) {
            fields.push(`author=$${idx++}`);
            values.push(author);
        }
        if (published_date !== undefined) {
            fields.push(`published_date=$${idx++}`);
            values.push(published_date);
        }
        if (isbn !== undefined) {
            fields.push(`isbn=$${idx++}`);
            values.push(isbn);
        }
    
        if(fields.length === 0) return null;
    
        values.push(id);
    
        const query = `UPDATE books SET ${fields.join(', ')} WHERE id=$${idx} RETURNING *`;
        const result = await pool.query(query, values);
        return result.rows[0];
}
export const deleteBook = async (id) => {
    const result = await pool.query('DELETE FROM books WHERE id=$1 RETURNING *', [id]);
    return result.rows[0];
}