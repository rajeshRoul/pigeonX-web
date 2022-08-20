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
import { useState } from "react";
import Server from "ServerConnect";

const Container = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  "& .userProfileImg": {
    height: 36,
    width: 36,
    borderRadius: "50%",
    marginTop: 8,
  },
}));

const CommentContainer = styled(Card)(() => ({
  width: "100%",
  padding: 10,
  borderRadius: 10,
  margin: "5px 8px 8px 5px",
  "& .postDetails": {
    display: "flex",
    flexDirection: "column",
  },
  "& .commentHeader": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

const CommentTemplate = ({ comment = {}, setComments, index }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleShowOptions = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseOptions = () => {
    setAnchorEl(null);
  };

  const onDeleteComment = async () => {
    const res = await Server.delete.comment({}, [comment._id]);
    if (res.success) {
      setComments((prev) => {
        prev.splice(index, 1);
        return [...prev];
      });
    }
  };

  return (
    <Container>
      {comment?.user?.profileImg ? (
        <img
          src={comment?.user?.profileImg}
          alt=""
          className="userProfileImg"
        />
      ) : (
        <AccountCircleRoundedIcon className="userProfileImg" />
      )}
      <CommentContainer elevation={2}>
        <Box className="commentHeader">
          <Box className="postDetails">
            <Typography variant="body1SemiBold">
              {comment?.user?.full_name ?? "-"}
            </Typography>
            <Typography variant="caption4">
              {timestampToMinTime(comment?.createdAt)}
            </Typography>
          </Box>
          <span role={"button"} onClick={handleShowOptions}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </span>
        </Box>
        <Box className="content">{comment?.commentText ?? "-"}</Box>
      </CommentContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseOptions}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onDeleteComment}>Delete Comment</MenuItem>
        <MenuItem>Report</MenuItem>
      </Menu>
    </Container>
  );
};

export default CommentTemplate;
