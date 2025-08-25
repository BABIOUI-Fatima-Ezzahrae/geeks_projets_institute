import dotenv from "dotenv";

dotenv.config();

const env = {
    PORT : process.env.PORT || 5000,
    URL: process.env.URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'fallbackSecret'
}

export default env;