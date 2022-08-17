import { Box, Card, IconButton, styled, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { timestampToMinTime } from "utils/helperFunctions";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Container = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  "& .userProfileImg": {
    height: 36,
    width: 36,
    borderRadius: "50%",
  },
}));

const CommentContainer = styled(Card)(() => ({
  width: "100%",
  padding: 10,
  borderRadius: 10,
  margin: "0px 2px 5px 5px",
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

const CommentTemplate = ({ data = {} }) => {
  const handleShowOptions = () => {};

  return (
    <Container>
      {data?.user?.profileImg ? (
        <img src={data?.user?.profileImg} alt="" className="profileImg" />
      ) : (
        <AccountCircleRoundedIcon className="userProfileImg" />
      )}
      <CommentContainer elevation={2}>
        <Box className="commentHeader">
          <Box className="postDetails">
            <Typography variant="body1SemiBold">
              {data?.user?.full_name ?? "-"}
            </Typography>
            <Typography variant="caption4">
              {timestampToMinTime(data?.createdAt)}
            </Typography>
          </Box>
          <span role={"button"} onClick={handleShowOptions}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </span>
        </Box>
        <Box className="content">{data?.postText ?? "-"}</Box>
      </CommentContainer>
    </Container>
  );
};

export default CommentTemplate;
