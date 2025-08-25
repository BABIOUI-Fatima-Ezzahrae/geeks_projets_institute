import { hashPassword } from "../config/hashPassword.js";
import User from "../models/users.model.js";

export const getAllUsers = async (req, res) => {
    try {
        const Users = await User.getAllUsers();
        res.status(201).json({
            succes: true,
            post: Users
        })
    }catch(error){    
        res.status(500).json({ message: error.message });
    }
};
export const getUserByEmail = async (req, res) => {
    try {
        const {email} = req.params;
        const user = await User.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });

        }

        res.status(201).json({
            succes: true,
            post: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });

        }

        res.status(201).json({
            succes: true,
            post: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createUser = async (req, res) => {
    try {
        const { email, username, password, first_name, last_name } = req.body;

        if (!email || !username || !password || !first_name || !last_name) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }

        const existUserByEmail = await User.getUserByEmail(email);
        if (existUserByEmail) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const existUserByUsername = await User.getUserByUsername(username);
        if (existUserByUsername) {
            return res.status(400).json({ message: "Nom d'utilisateur déjà pris" });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.createUser({
            email,
            username,
            first_name,
            last_name,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, username, password, first_name, last_name} = req.body;

        if (!email && !username && !password && !first_name && !last_name) {
            return res.status(400).json({ message: "Aucune donnée à mettre à jour" });
        }

        const user = await User.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        if (email && email !== user.email) {
            const existingEmail = await User.getUserByEmail(email);
            if (existingEmail) {
                return res.status(400).json({ message: "Cet email est déjà utilisé" });
            }
        }
        
        if (username && username !== user.username) {
            const existingUsername = await User.getUserByUsername(username);
            if (existingUsername) {
                return res.status(400).json({ message: "Nom d'utilisateur déjà pris" });
            }
        }

        let updatedPassword = user.password; // Conserver l'ancien mot de passe si aucun nouveau mot de passe n'est fourni
        if (password) {
            updatedPassword = await hashPassword(password); // Hachage du nouveau mot de passe
        }

        const updatedUser = await User.updateUser(id, {
            email: email || user.email,  // Si un champ n'est pas fourni, conserver l'ancienne valeur
            username: username || user.username,
            first_name: first_name || user.first_name,
            last_name: last_name || user.last_name,
            password: updatedPassword 
        });

        res.status(200).json({
            success: true,
            message: "Utilisateur mis à jour avec succès",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; 
        
        const user = await User.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        await User.deleteUser(id); 
        
        res.status(200).json({
            success: true,
            message: "Utilisateur supprimé avec succès",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
