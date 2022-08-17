import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import CommentTemplate from "./CommentTemplate";

const Container = styled(Box)(() => ({
  width: "100%",
  maxHeight: 300,
  overflowY: "auto",
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

const Comments = () => {
  const [comment, setComment] = useState("");

  const handlePostComment = () => {};

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
      <CommentTemplate />
    </Container>
  );
};

export default Comments;
