import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pg;

const pool = new Pool({
    connectionString: process.env.URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
   .then(() => console.log('Connected to the database'))
   .catch(err => console.error('Connection error', err.stack));

export default pool