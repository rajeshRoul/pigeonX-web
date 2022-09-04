import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";
import Server from "ServerConnect";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/slices/user";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  "& .imageContainer": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const HeaderProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { full_name: userName, id } = useSelector((store) => store.user?.data);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onProfileClick = () => {
    navigate(`/profile/${id}`);
  };

  const onLogoutClick = async () => {
    const res = await Server.post.logout();
    if (res?.success) {
      dispatch(userActions.setUserLoggedIn(false));
      dispatch(userActions.setUserData({}));
    }
  };

  return (
    <Container>
      <Box className="imageContainer" onClick={handleClick}>
        <AccountCircleRoundedIcon sx={{ width: "30px", height: "30px" }} />
        <Typography variant="body1SemiBold">{userName ?? ""}</Typography>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "post action buttons",
        }}
      >
        <MenuItem onClick={onProfileClick}>Profile</MenuItem>
        <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default HeaderProfile;
