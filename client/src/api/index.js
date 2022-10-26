import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);
export const editPost = (payload) => axios.put(`${URL}/posts/edit/${payload.id}`, payload);
export const deletePost = (id) => axios.delete(`${URL}/posts/${id}`);
