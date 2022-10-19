import express from 'express';
import { getPosts, createPosts, updatePosts } from '../controllers/posts.js'


const router = express.Router();

// router.get('/', (req, res) => { res.send('router success') })
router.get("/", getPosts);
router.post("/", createPosts);
router.post("/update", updatePosts);

export default router