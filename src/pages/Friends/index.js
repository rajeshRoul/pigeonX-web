import { Grid, Typography } from "@mui/material";
import DefaultHeader from "components/AppCommon/Headers/DefaultHeader";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useEffect, useState } from "react";
import Server from "ServerConnect";

const FindFriends = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await Server.get.allUsers();
    if (res.success) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <LayoutHorizontalSplit header={<DefaultHeader />}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">People You May Know</Typography>
        </Grid>
        {users.map((user) => (
          <Grid item xs={12} key={user._id}>
            <Typography variant="body1Regular">{user.full_name}</Typography>
          </Grid>
        ))}
      </Grid>
    </LayoutHorizontalSplit>
  );
};

export default FindFriends;
