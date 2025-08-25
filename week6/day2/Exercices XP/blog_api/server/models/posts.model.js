import pool from "../config/db.js";

export const getAllPosts = async () => {
    const result = await pool.query('SELECT * FROM Posts ORDER BY id DESC');
    return result.rows;
};

export const getPostById = async (id) => {
    const result = await pool.query('SELECT * FROM Posts WHERE id=$1', [id]);
    return result.rows[0];
};

export const createPost = async ({title, content}) => {
    const result = await pool.query(
        'INSERT INTO Posts (title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
    );
    return result.rows[0];
};

export const updatePost = async (id, {title, content}) => {

    const fields = [];
    const values = [];
    let idx = 1;

    if (title !== undefined) {
        fields.push(`title=$${idx++}`);
        values.push(title);
    }
    if (content !== undefined) {
        fields.push(`content=$${idx++}`);
        values.push(content);
    }

    if(fields.length === 0) return null;

    values.push(id);

    const query = `UPDATE Posts SET ${fields.join(', ')} WHERE id=$${idx} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deletePost = async (id) => {
    const result = await pool.query('DELETE FROM Posts WHERE id=$1 RETURNING *', [id]);
    return result.rows[0];
};
