import { Box, Divider, Grid, Typography } from "@mui/material";
import ProfilePageHeader from "components/AppCommon/Headers/ProfilePageHeader";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Server from "ServerConnect";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const { id } = useParams();

  const getProfileData = async () => {
    const res = await Server.get.userProfile({}, [id]);
    if (res.success) {
      setProfileData(res.data);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <LayoutHorizontalSplit header={<ProfilePageHeader />}>
      <Box>
        <Typography variant="h3">Name</Typography>
        <Typography variant="body1Regular">
          {profileData?.full_name ?? "-"}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h3">Email</Typography>
        <Typography variant="body1Regular">
          {profileData?.email ?? "-"}
        </Typography>
      </Box>
    </LayoutHorizontalSplit>
  );
};

export default Profile;
