import { Box, Menu, MenuItem, styled } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";
import Server from "ServerConnect";
import { useDispatch } from "react-redux";
import { userActions } from "redux/slices/user";

const Container = styled(Box)(() => ({
  "& .imageContainer": {
    cursor: "pointer",
  },
}));

const HeaderProfile = () => {
  const [anchorEl, setAnchorEl] = useState();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onProfileClick = () => {};

  const onLogoutClick = async () => {
    const res = await Server.post.logout();
    if (res?.success) {
      dispatch(userActions.setUserLoggedIn(false));
      dispatch(userActions.setUserData({}));
    }
  };

  return (
    <Container>
      <span className="imageContainer" onClick={handleClick}>
        <AccountCircleRoundedIcon sx={{ width: "30px", height: "30px" }} />
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onProfileClick}>Profile</MenuItem>
        <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default HeaderProfile;
