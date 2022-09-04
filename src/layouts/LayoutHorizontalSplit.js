import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "100%",
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
    },
    "& .mainContentLayout": {
      flexGrow: 1,
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
