/* -- libs -- */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* -- components -- */
import TypographyTruncate from '../../TypographyTruncate/TypographyTruncate';
import CommentPostIcon from '../CommentPostIcon/CommentPostIcon';
import LikePostIcon from '../LikePostIcon/LikePostIcon';

/* -- utils -- */
import { formatDateToRelTime, shortenNumbers } from '../../../utils/helperFns';

/* -- mui -- */
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Editcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/DeleteForeverRounded';

/* -- styles -- */
import useStyles from './styles';

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.post}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={post.user.username}
              src={post.user.imageUrl}
              component={Link}
              to={`/u/${post.user.username}`}
              className={classes.avatar}
            />
          }
          title={
            <Fragment>
              <Typography
                component={Link}
                to={`/u/${post.user.username}`}
                variant="subtitle1"
                color="primary"
                className={classes.title}
              >{`${post.user.name}`}</Typography>
              <span>{`@${post.user.username}`}</span>
            </Fragment>
          }
          subheader={
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.createdAt}
            >
              {formatDateToRelTime(post.createdAt)}
            </Typography>
          }
          action={
            <PopupState variant="popover" popupId="cardActionMenu">
              {popupState => (
                <Fragment>
                  <IconButton {...bindTrigger(popupState)} size="small">
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    {...bindMenu(popupState)}
                    getContentAnchorEl={null}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => {
                        // TODO: CALL EDIT POST FUNC.
                        popupState.close();
                      }}
                    >
                      <Editcon fontSize="small" />
                      <Typography variant="body2">Edit</Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => {
                        // TODO: DISPATCH DELETE ACTION.
                        popupState.close();
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                      <Typography variant="body2">Delete</Typography>
                    </MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          }
        />
        <CardContent>
          <TypographyTruncate
            variant="body1"
            color="textSecondary"
            line={3}
            more="Show More"
          >
            {post.body}
          </TypographyTruncate>
        </CardContent>
        <CardActions disableSpacing className={classes.cardAction}>
          <div>
            <LikePostIcon post={post} />
            <CommentPostIcon post={post} />
          </div>
          <div>
            <Typography variant="caption">
              {shortenNumbers(post.likeCount)} Likes
            </Typography>
            <Typography
              component={Link}
              to={`/post/${post.postId}#commentList`}
              className={classes.commentCount}
              variant="caption"
            >
              {shortenNumbers(post.commentCount)} Comments
            </Typography>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostCard;
