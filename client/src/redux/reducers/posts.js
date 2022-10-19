import { INIT_STATE } from "../../constant";
import { getPosts } from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action) { 
    switch (action.type) {
      case getType(getPosts.getPostsRequest):
        // break;
        return {
          ...state,
          isLoading: true,
        };
      case getType(getPosts.getPostSuccess):
        // break;
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getPosts.getPostFailure):
        // break;
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
}