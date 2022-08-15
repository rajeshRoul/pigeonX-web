import { Box, styled, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  "& .navItem": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 10px",
    cursor: "pointer",
  },
  "& .navItem.active, .navItem:hover": {
    "& svg": {
      color: theme.palette.primary.main,
    },
    "& span": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavItem = ({ icon, link, name }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  };

  return (
    <Box
      onClick={onClick}
      className={`navItem ${location.pathname.includes(link) ? "active" : ""}`}
    >
      {icon}
      <Typography variant="caption4">{name}</Typography>
    </Box>
  );
};

const NavigationBar = () => {
  return (
    <Container>
      {navLinks.map((nav) => (
        <NavItem key={nav.link} {...nav} />
      ))}
    </Container>
  );
};

export default NavigationBar;

const navLinks = [
  {
    icon: <HomeRoundedIcon />,
    link: "/home",
    name: "Home",
  },
  {
    icon: <AddBoxRoundedIcon />,
    link: "/create-post",
    name: "Create Post",
  },
];
