import { Box, styled } from "@mui/material";
import SearchBar from "components/SearchBar";
import HeaderProfile from "../HeaderProfile";
import NavigationBar from "../NavigationBar";

const Container = styled(Box)(() => ({
  height: "50px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
}));

const DefaultHeader = () => {
  return (
    <Container>
      <SearchBar style={{ width: 200 }} />
      <NavigationBar />
      <HeaderProfile />
    </Container>
  );
};

export default DefaultHeader;
