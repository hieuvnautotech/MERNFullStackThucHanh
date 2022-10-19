import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js'


const router = express.Router();

// router.get('/', (req, res) => { res.send('router success') })
router.get("/", getPosts);
router.post("/", createPosts);

export default router