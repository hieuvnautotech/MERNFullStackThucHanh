import React from "react";
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles'
import Header from "../components/Header";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";
import EditPostModal from "../components/EditPostModal";


export default function HomePage() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Header />
      <PostList/>
      <CreatePostModal />
      <EditPostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
  // <div>
  //     this is homepage
  // </div>
  

