import pool from "../config/db.js";
import { hashPassword } from "../config/hashPassword.js";

const user = {
    getAllUsers: async () => {
        const query = `SELECT * FROM users`;
        const result = await pool.query(query);
        return result.rows;
    },

    getUserById: async (id) => {
        const query = `SELECT * FROM users WHERE id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    getUserByEmail: async (email) => {
        const query = `
            SELECT u.*, h.password 
            FROM users u
            JOIN hashpwd h ON u.username = h.username
            WHERE u.email = $1`;
            const result = await pool.query(query, [email]);
            return result.rows[0];
        },

    getUserByUsername: async (username) => {
        const query = `SELECT * FROM users WHERE username = $1`;
        const result = await pool.query(query, [username]);
        return result.rows[0];
    },

    createUser: async ({ email, username, first_name, last_name, password }) => {
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const insertUserQuery = `
                INSERT INTO users (email, username, first_name, last_name)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
            `;
            const userResult = await client.query(insertUserQuery, [
                email, username, first_name, last_name
            ]);

            const hashedPassword = await hashPassword(password);

            const insertPasswordQuery = `
                INSERT INTO hashpwd (username, password)
                VALUES ($1, $2)
                RETURNING *;
            `;
            await client.query(insertPasswordQuery, [username, hashedPassword]);

            await client.query('COMMIT');
            return userResult.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },

    updateUser: async (id, { email, username, first_name, last_name, password }) => {
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const updateUserQuery = `
                UPDATE users
                SET email = COALESCE($2, email),
                    username = COALESCE($3, username),
                    first_name = COALESCE($4, first_name),
                    last_name = COALESCE($5, last_name)
                WHERE id = $1
                RETURNING *;
            `;
            const userResult = await client.query(updateUserQuery, [id, email, username, first_name, last_name]);

            if (password) {
                const hashedPassword = await hashPassword(password);

                const updatePasswordQuery = `
                    UPDATE hashpwd
                    SET password = $2
                    WHERE username = $1
                    RETURNING *;
                `;
                await client.query(updatePasswordQuery, [username, hashedPassword]);
            }

            await client.query('COMMIT');
            return userResult.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },

    deleteUser: async (id) => {
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const userResult = await client.query('SELECT username FROM users WHERE id = $1', [id]);
            const username = userResult.rows[0]?.username;

            if (!username) {
                throw new Error("Utilisateur non trouvé");
            }

            await client.query('DELETE FROM hashpwd WHERE username = $1', [username]);

            const deleteUserQuery = `
                DELETE FROM users WHERE id = $1
                RETURNING *;
            `;
            const result = await client.query(deleteUserQuery, [id]);

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
};

export default user;
