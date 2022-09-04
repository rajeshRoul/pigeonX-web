import { Box, styled } from "@mui/material";
import SearchBar from "components/SearchBar";
import HeaderProfile from "../HeaderProfile";
import NavigationBar from "../NavigationBar";

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

const DefaultHeader = () => {
  return (
    <Container>
      <SearchBar style={{ maxWidth: 265, width: "100%" }} />
      <NavigationBar />
      <HeaderProfile />
    </Container>
  );
};

export default DefaultHeader;
