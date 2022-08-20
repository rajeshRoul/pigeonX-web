import { Grid } from "@mui/material";
import DefaultHeader from "components/AppCommon/Headers/DefaultHeader";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useEffect, useState } from "react";
import Server from "ServerConnect";
import Post from "./components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await Server.get.allPosts();
    if (res.success) {
      setPosts(
        res.data.map((post) => ({
          ...post,
          comments: post.comments.reverse(),
        }))
      );
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <LayoutHorizontalSplit header={<DefaultHeader />}>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid key={post._id} item xs={12}>
            <Post data={post} setPosts={setPosts} index={index} />
          </Grid>
        ))}
      </Grid>
    </LayoutHorizontalSplit>
  );
};

export default HomePage;
