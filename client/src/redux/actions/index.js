import { applyMiddleware } from 'redux';
import { createActions, createAction } from 'redux-actions'

export const getType = (reduxAction) => { 
    return reduxAction().type
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err
})

export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err,
  });

  export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
  });

  export const editPost = createActions({
    editPostRequest: (payload) => payload,
    editPostSuccess: (payload) => payload,
    editPostFailure: (err) => err,
  });

export const deletePost = createActions({
  deletePostRequest: (payload) => payload,
  deletePostSuccess: undefined,
  deletePostFailure: (err) => err,
});
    
    
  
export const editModal = createAction("SHOW_EDIT_POST_MODAL");
export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");