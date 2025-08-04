import { Router } from "express";

const router = Router();
const todos = [];


router.get('/todos', (req, res) => {
    try {
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.get('/todos/:id', (req, res) => {
    try {
        const {id} = req.params;
        const todo = todos.find(todo => todo.id === parseInt(id));

        if (!todo) {
            return res.status(404).json({ error: "Todo not found!" });
        }

        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.post('/todos', (req, res) => {
    try {
        const {title, description} = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const newTodo = {
            id: todos.length + 1,
            title,
            description
        };
        todos.push(newTodo);
        res.status(201).json({
            message: "Todo created successfully",
            success: true,
            post: newTodo
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.put('/todos/:id', (req, res) => {
    try {
        const {id} = req.params;
        const todo = todos.find(todo => todo.id === parseInt(id));

        if (!todo) {
            return res.status(404).json({ error: "Todo not found!" });
        }

        const {title, description} = req.body;
        todo.title = title || todo.title;
        todo.description = description || todo.description;

        res.status(201).json({
            message : "Update successful",
            success : true,
            post : todo
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.delete('/todos/:id', (req, res) => {
    try {
        const {id} = req.params;
        const index = todos.findIndex(todo => todo.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ error: "todo introuvable!" });
        }

        const deletedTodo = todos.splice(index, 1)[0];
        res.status(201).json(
             {
            message : "add delete successful",
            success : true,
            post : deletedTodo
             }
        );
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;