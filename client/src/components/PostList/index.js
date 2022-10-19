import React from 'react'
import {Grid} from '@material-ui/core'
import Post from './Post'

export default function PostList() {
  return (
    // <div>postList</div>
    <Grid container spacing={2} alignItems='stretch'>
      <Grid item xs={12} sm={6}>
        {/* <p>This is post</p> */}
        <Post/>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <p>This is post2</p> */}
        <Post/>

      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <p>This is post3</p> */}
        <Post/>

      </Grid>

    </Grid>
  );
}
