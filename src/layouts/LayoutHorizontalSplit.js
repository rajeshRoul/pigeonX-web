import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  maxWidth: 1280,
  display: "flex",
  flexDirection: "column",
  "& .layoutContent": {
    display: "flex",
    width: "100%",
    "& .leftPaneLayout, .rightPaneLayout": {
      width: "20%",
      minWidth: "300px",
      minHeight: "calc(100vh - 50px)",
    },
    "& .mainContentLayout": {
      flexGrow: 1,
      minHeight: "calc(100vh - 50px)",
      padding: 30,
    },
  },
}));

const LayoutHorizontalSplit = ({
  children,
  leftPane = [],
  rightPane = [],
  header,
}) => {
  return (
    <Container>
      {header}
      <Box className="layoutContent">
        <Box className="leftPaneLayout">{leftPane}</Box>
        <Box className="mainContentLayout">{children}</Box>
        <Box className="rightPaneLayout">{rightPane}</Box>
      </Box>
    </Container>
  );
};

export default LayoutHorizontalSplit;
