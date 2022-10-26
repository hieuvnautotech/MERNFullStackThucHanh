import { INIT_STATE } from "../../constant";
import {
  getPosts,
  getType,
  createPost,
  updatePost,
  deletePost,
  editPost,
} from "../actions";
//posts khởi tạo lúc đầu rỗng, có 2 field là data vs isLoading
// sau đó posts lấy từ be qua saga truyền vào reducer, tham chiếu với loại action rồi gán vào posts
export default function postsReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      // break;
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      // break; //cập nhật lại state
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
    case getType(createPost.createPostSuccess): //khi tạo post mới thành công trong be thì cũng cập nhật kết quả mới về reducer
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePost.updatePostSuccess): // trong state lấy ra 1 post nếu có id = vs id được chọn thì sẽ cập nhật id đó, ko thì chỉ trả ra 1 post bình thường
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case getType(editPost.editPostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    // case getType(deletePost.deletePostRequest):
    //   return {
    //     data: state.data.filter((post) => post._id !== action.payload),
    //     // state: console.log("delete post reducer"),
    //   };
    case getType(deletePost.deletePostSuccess): // trong state lấy ra 1 post nếu có id = vs id được chọn thì sẽ cập nhật id đó, ko thì chỉ trả ra 1 post bình thường
      return {
        ...state,
        //data: state.data.filter((post) => post._id !== action.payload._id),
      };
    default:
      return state;
  }
}
