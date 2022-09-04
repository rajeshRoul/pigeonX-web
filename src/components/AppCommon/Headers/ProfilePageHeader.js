import { Box, IconButton, styled } from "@mui/material";
import HeaderProfile from "../HeaderProfile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(() => ({
  height: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
  flexWrap: "wrap-reverse",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  "& > div": {
    marginBottom: 15,
  },
}));

const ProfilePageHeader = () => {
  const navigate = useNavigate();

  const onBackPress = () => {
    navigate(-1);
  };

  return (
    <Container>
      <span onClick={onBackPress}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </span>
      <HeaderProfile />
    </Container>
  );
};

export default ProfilePageHeader;
