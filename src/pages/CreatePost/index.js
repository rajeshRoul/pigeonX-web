import { Button, Grid, Typography } from "@mui/material";
import DefaultHeader from "components/AppCommon/Headers/DefaultHeader";
import { useFormik } from "formik";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useNavigate } from "react-router-dom";
import Server from "ServerConnect";

const CreatePost = () => {
  const navigate = useNavigate();
  console.log("exec create");
  const formik = useFormik({
    initialValues: {
      postText: "",
    },
    onSubmit: async (values) => {
      const res = await Server.post.createPost(values);
      if (res.success) {
        navigate("/home");
      }
    },
  });

  return (
    <LayoutHorizontalSplit header={<DefaultHeader />}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1">Create a Post</Typography>
          </Grid>
          <Grid item xs={12}>
            <textarea
              placeholder="What do you want to talk about ?"
              autoFocus={true}
              required={true}
              style={{
                width: "100%",
                resize: "vertical",
                padding: 20,
                minHeight: 250,
                overflowY: "auto",
              }}
              value={formik.values.postText}
              onChange={formik.handleChange("postText")}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ px: "50px" }}
            >
              <Typography variant="body2Regular"> Post </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </LayoutHorizontalSplit>
  );
};

export default CreatePost;
