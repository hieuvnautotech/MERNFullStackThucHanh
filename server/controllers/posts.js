import { PostModel } from "../models/PostModel.js";
// import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  // res.send('Controller success')
  try {
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPosts = async (req, res) => {
  // res.send('Create post successfully')
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePosts = async (req, res) => {
  // res.send('Create post successfully')
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const editPosts = async (req, res) => {
  // res.send('Create post successfully')
  try {
    const editPost = req.body;
    const post = await PostModel.findOneAndUpdate(
      { _id: editPost._id },
      editPost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePosts = async (req, res) => {
  // res.send('Create post successfully')
  try {
    const { id } = req.params;

    await PostModel.findByIdAndRemove( id , {new:true});
    res.status(200).json({ message: "delete post successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
