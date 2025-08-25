import * as PostModel from '../models/posts.model.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.getAllPosts();
        res.status(200).json({ 
            success: true, 
            data: posts 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await PostModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ 
                success: false, 
                message: 'Post not found' 
            });
        }
        res.json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing data' 
            });
        }
        const newPost = await PostModel.createPost({ title, content });
        res.status(201).json({ 
            success: true, 
            data: newPost 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        const existingPost = await PostModel.getPostById(id);
        if (!existingPost) {
            return res.status(404).json({ 
                success: false, 
                message: 'Post not found' 
            });
        }

        const { title, content } = req.body;
        const updatedPost = await PostModel.updatePost(id, {
            title: title ?? existingPost.title,
            content: content ?? existingPost.content,
        });

        res.json({ success: true, data: updatedPost });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};


export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await PostModel.deletePost(id);
        if (!deletedPost) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.json({ success: true, message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
