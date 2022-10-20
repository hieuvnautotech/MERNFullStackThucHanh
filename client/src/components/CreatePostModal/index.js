import React from 'react'
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { modalState$} from '../../redux/selectors'
import useStyles from "./styles";
import { hideModal } from '../../redux/actions';
import FileBase64 from "react-file-base64";


export default function CreatePostModal() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const body = (
      // <p>this is body modal</p>
      <div className={classes.paper} id="simple-modal-title">
        <h2>Create New Post</h2>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            className={classes.title}
            required
            label="Title"
            value=""
                    onChange={{}}
          />
          <TextareaAutosize
            className={classes.textarea}
            minRows={10}
            maxRows={15}
            placeholder="Content..."
            value=""
                    onChange={{}}
          />
          <FileBase64
            accept="image/*"
            multiple={false}
            type="file"
            value=""
            // onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
          />
          <div className={classes.footer}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
                        onClick={{}}
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    );
    const { isShow } = useSelector(modalState$);
    console.log({ isShow })
    
    const onClose = React.useCallback(() => {
      dispatch(hideModal());
    }, [dispatch]);
    
  return (
    <div>
          <Modal open={isShow} onClose={ onClose}>
        {body}
      </Modal>
    </div>
  );
}
