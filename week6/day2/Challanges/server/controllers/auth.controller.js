import Users from "../models/users.model.js";
import { generateToken } from "../config/generate_token.js";
import { hashPassword, comparePassword } from "../config/hashPassword.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await Users.getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Your email is incorrect" });
        }
        const isPassCorrect = await comparePassword(password, user.password);
        if (!isPassCorrect) {
            return res.status(400).json({ message: "Incorrect password" });  
        }

        const token = generateToken(user); 
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 3600000,  
        });

        res.status(200).json({  
            message: "Login successful",
            user,
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const register = async (req, res) => {
    try {
        const { email, username, password, first_name, last_name } = req.body;

        if (!email || !username || !password || !first_name || !last_name) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await Users.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email is already taken" });
        }

        const existingUsername = await Users.getUserByUsername(username);
        if (existingUsername) {
            return res.status(400).json({ message: "Username is already taken" });
        }

        const newUser = await Users.createUser({
            email,
            username,
            first_name,
            last_name,
            password,
        });


        const token = generateToken(newUser);  
        
        res.status(201).json({
            message: "User registered successfully",
            user: newUser,
            token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
