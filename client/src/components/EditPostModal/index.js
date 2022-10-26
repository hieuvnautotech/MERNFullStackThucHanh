import React from "react";
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postsState$, modalState$ } from "../../redux/selectors";
import useStyles from "./styles";
import { editModal, hideModal } from "../../redux/actions";
import FileBase64 from "react-file-base64";

export default function EditPostModal(props) {
  console.log("[PostList-posts-editModal]", props); //data lấy từ be bằng saga đã lưu trong state

  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });
  const classes = useStyles();

  const dispatch = useDispatch();

  const { isShow, _id } = useSelector(modalState$);
  console.log(isShow, _id);

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const onUpdate = React.useCallback(() => {
    console.log("[data-update]", { data });
    // dispatch(editPost.editPostRequest(data));
    // updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 });

    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    // <p>this is body modal</p>
    <div className={classes.paper} id="simple-modal-title">
      <h2>Update Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label={data.title}
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder={data.content}
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onUpdate}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
