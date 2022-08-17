import {
  Box,
  Card,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { timestampToMinTime } from "utils/helperFunctions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useState } from "react";
import Comments from "../Comments";

const Container = styled(Card)(() => ({
  width: "100%",
  padding: 16,
  borderRadius: 10,
}));

const Header = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  "& .postDetailsCtr": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& .profileImg": {
      height: 48,
      width: 48,
      borderRadius: "50%",
    },
    "& .postDetails": {
      marginLeft: 8,
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  borderTop: `1px solid ${theme.palette.divider.main}`,
  maxWidth: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  marginTop: 20,
  paddingTop: 10,
  "& .footerItem": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "& svg": {
      height: 20,
      width: 20,
      marginRight: 10,
    },
  },
}));

const Post = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDeletePost = () => {};

  return (
    <Container elevation={3}>
      <Header>
        <Box className="postDetailsCtr">
          {data?.user?.profileImg ? (
            <img src={data?.user?.profileImg} alt="" className="profileImg" />
          ) : (
            <AccountCircleRoundedIcon className="profileImg" />
          )}
          <Box className="postDetails">
            <Typography variant="body1SemiBold">
              {data?.user?.full_name ?? "-"}
            </Typography>
            <Typography variant="caption4">
              {timestampToMinTime(data?.createdAt)}
            </Typography>
          </Box>
        </Box>
        <span role={"button"} onClick={handleClick}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </span>
      </Header>
      <Box className="content">{data.postText}</Box>
      <Footer>
        <Box className="footerItem">
          <ThumbUpRoundedIcon />
          <Typography variant="body1Regular">Like</Typography>
        </Box>
        <Box className="footerItem" onClick={() => setShowComments(true)}>
          <InsertCommentRoundedIcon />
          <Typography variant="body1Regular">Comment</Typography>
        </Box>
        <Box className="footerItem">
          <ShareRoundedIcon />
          <Typography variant="body1Regular">Share</Typography>
        </Box>
        <Box className="footerItem">
          <SendRoundedIcon />
          <Typography variant="body1Regular">Send</Typography>
        </Box>
      </Footer>
      {showComments ? <Comments /> : null}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onDeletePost}>Delete Post</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default Post;
