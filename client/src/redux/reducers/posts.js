import { INIT_STATE } from "../../constant";
import { getPosts, getType, createPost } from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action) { 
    switch (action.type) {
      case getType(getPosts.getPostsRequest):
        // break;
        return {
          ...state,
          isLoading: true,
        };
      case getType(getPosts.getPostsSuccess):
        // break;
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getPosts.getPostsFailure):
        // break;
        return {
          ...state,
          isLoading: false,
        };
        case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    // case getType(updatePost.updatePostSuccess):
    //   return {
    //     ...state,
    //     data: state.data.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     ),
    //   };
      default:
        return state;
    }
}