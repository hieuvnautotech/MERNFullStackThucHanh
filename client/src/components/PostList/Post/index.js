import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import {
  updatePost,
  deletePost,
  editPost,
  editModal,
} from "../../../redux/actions";



export default function Post({ post }) {

  const classes = useStyles();

  const dispatch = useDispatch();
  
  const onLikeBtnClick = React.useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 }) // tham số 1 là clone cái prop post, tham số 2 chỉ truyền cái post có field likeCount
    );
  }, [dispatch, post]); // vì gọi post là prop từ phía bên ngoài nên phải khai báo vào array dependencies

  const deleteBtnClick = React.useCallback(() => {
    console.log("nut nhan delete")
    // dispatch(deletePost.deletePostRequest({...post }));
    dispatch(deletePost.deletePostRequest({_id: post._id}));
  }, [dispatch, post]);
   
  const openEditPostModal = React.useCallback(() => {
    dispatch(editModal({ _id: post._id }));
    dispatch(editPost.editPostRequest({ _id: post._id }));
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        // title='This is title'
        title={post.author}
        // subHeader='Apr 30, 2021'
        subheader={moment(post.updateAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton onClick={openEditPostModal}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
        <IconButton onClick={deleteBtnClick}>
          <DeleteIcon />
          <Typography component="span" color="textSecondary">
            Delete
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
