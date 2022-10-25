import express from 'express';
import { getPosts, createPosts, updatePosts, deletePosts, editPosts } from '../controllers/posts.js'


const router = express.Router();

// router.get('/', (req, res) => { res.send('router success') })
router.get("/", getPosts);
router.post("/", createPosts);
router.post("/update", updatePosts);
router.put("/edit/:id", editPosts);
router.delete("/:id", deletePosts);

export default router