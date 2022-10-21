import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

// function* fetchPostSaga(action) { 
//     const posts = yield call(api.fetchPosts)
//     console.log('[posts]', posts)
//     yield put(actions.getPosts.getPostsSuccess(posts.data))

// }

function* fetchPostsSaga(action) {
    try {
      const posts = yield call(api.fetchPosts);
      console.log('[posts]', posts)
      yield put(actions.getPosts.getPostsSuccess(posts.data));// bắn ra trigger 
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

function* mySaga() { 
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostsSaga)
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);

}

export default mySaga;