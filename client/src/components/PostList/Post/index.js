import React from 'react'
import{
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import moment from 'moment'
import useStyles from './styles.js'

export default function Post({post}) {
    const classes = useStyles()
  return (
    <Card>
        <CardHeader
            avatar={<Avatar>A</Avatar>}
            // title='This is title'
            title={post.author}
            // subHeader='Apr 30, 2021'
            subHeader={moment(post.updateAt).format('HH:MM MMM DD, YYYY')}
            action={
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            }
        />
        <CardMedia image={post.attachment} title='Title' className={classes.media}/>
        <CardContent>
            <Typography variant='h5' color='textPrimary'>{post.title}</Typography>
            <Typography variant='body2' component='p' color='textSecondary'>{post.content}</Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <FavoriteIcon/>
                <Typography component='span' color='textSecondary'>{post.likeCount}</Typography>
            </IconButton>
        </CardActions>
    </Card>
    
  )
}
