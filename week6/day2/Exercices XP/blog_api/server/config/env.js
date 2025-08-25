import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'fallbackSecret'
};
export default config;