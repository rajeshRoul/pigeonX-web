import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Server from "ServerConnect";
import styled from "styled-components";
import CommentTemplate from "./CommentTemplate";

const Container = styled(Box)(() => ({
  width: "100%",
  "& .commentsCtr": {
    width: "100%",
    maxHeight: 300,
    overflowY: "auto",
  },
}));

const CommentForm = styled(Box)(() => ({
  width: "100%",
  marginTop: 25,
  display: "flex",
  marginBottom: 25,
  "& .postButton": {
    height: 32,
    marginLeft: 20,
  },
}));

const Comments = ({ postId, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const user = useSelector((store) => store.user.data);

  const handlePostComment = async (e) => {
    e.preventDefault();
    const res = await Server.post.createComment({
      post: postId,
      commentText: comment,
    });
    if (res.success) {
      setComment("");
      setComments((prev) => [
        {
          ...res.data,
          user: {
            ...(user ?? {}),
          },
        },
        ...prev,
      ]);
    }
  };

  return (
    <Container>
      <form onSubmit={handlePostComment}>
        <CommentForm>
          <TextField
            placeholder="Type Your Comment Here..."
            fullWidth
            autoFocus
            required
            sx={{ "& .MuiInputBase-input": { height: 0 } }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit" className="postButton" variant="contained">
            Post
          </Button>
        </CommentForm>
      </form>
      <Box className="commentsCtr">
        <Grid container spacing={2}>
          {comments?.map((comment, index) => (
            <Grid item xs={12} key={comment._id}>
              <CommentTemplate
                comment={comment}
                setComments={setComments}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Comments;
