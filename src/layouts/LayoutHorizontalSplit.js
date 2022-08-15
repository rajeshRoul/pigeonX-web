import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .layoutContent": {
    display: "flex",
    width: "100%",
    "& .leftPaneLayout, .rightPaneLayout": {
      width: "15vw",
      minWidth: "300px",
      flexShrink: 0,
      minHeight: "calc(100vh - 50px)",
    },
    "& .mainContentLayout": {
      flexGrow: 1,
      flexShrink: 0,
      borderLeft: `1px solid ${theme.palette.divider.main}`,
      borderRight: `1px solid ${theme.palette.divider.main}`,
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
