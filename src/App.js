import { Box, createTheme, styled, ThemeProvider } from "@mui/material";
import { appTheme } from "config/theme/appTheme";
import Router from "routes";
import "./config/theme/fonts.css";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: theme.palette.background.main,
}));

function App() {
  const currentTheme = createTheme(appTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
