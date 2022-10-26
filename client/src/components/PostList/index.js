import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  console.log("[PostList-posts]", posts); //data lấy từ be bằng saga đã lưu trong state


  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest()); // chỉ cần có thay đổi trong post request sẽ render lại
  }, [dispatch]);
  return (
    // <div>postList</div>
    <Grid container spacing={2} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} sm={6}>
          <Post key={post._id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}


  /* <Grid item xs={12} sm={6}> */


  /* <p>This is post</p> */


  /* <Post/> */


  /* </Grid> */


  /* <Grid item xs={12} sm={6}> */


  /* <p>This is post2</p> */


  /* <Post/> */



  /* </Grid> */


  /* <Grid item xs={12} sm={6}> */


  /* <p>This is post3</p> */


  /* <Post/> */


  /* </Grid> */



  /* posts.map(post) là dạng như vòng loop để gán data từ be gán động vào UI component con và truyền vào con dạng prop*/
