import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

// function* fetchPostSaga(action) {
//     const posts = yield call(api.fetchPosts)
//     console.log('[posts]', posts)
//     yield put(actions.getPosts.getPostsSuccess(posts.data))

// }

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data)); // bắn ra trigger
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* editPostSaga(action) {
  try {
    const editPost = yield call(api.editPost, action.payload._id);
    yield put(actions.editPost.editPostSuccess(editPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* deletePostSaga(action) {
  try {
    const deletePost = yield call(api.deletePost, action.payload._id);
    yield put(actions.deletePost.deletePostSuccess(deletePost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePost.deletePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
  yield takeLatest(actions.editPost.editPostRequest, editPostSaga);
}

export default mySaga;
