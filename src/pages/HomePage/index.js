import { Grid } from "@mui/material";
import DefaultHeader from "components/AppCommon/Headers/DefaultHeader";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useEffect, useState } from "react";
import Server from "ServerConnect";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  console.log("exec");

  const fetchPosts = async () => {
    const res = await Server.get.allPosts();
    if (res.success) {
      setPosts(res.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <LayoutHorizontalSplit header={<DefaultHeader />}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post._id}>
            {post.postText}
          </Grid>
        ))}
      </Grid>
    </LayoutHorizontalSplit>
  );
};

export default HomePage;
