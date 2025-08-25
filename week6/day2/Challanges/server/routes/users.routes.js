import express from 'express';
import { getAllUsers, getUserByEmail, getUserById, createUser, updateUser, deleteUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/", getUserByEmail);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;