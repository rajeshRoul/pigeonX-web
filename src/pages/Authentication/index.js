import { Box, Paper, styled, Typography } from "@mui/material";
import AppDivider from "components/AppDivider";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const StyledContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.main,
  "& .innerContainer": {
    minWidth: 300,
    maxWidth: 400,
    height: 500,
    margin: 100,
    backgroundColor: theme.palette.background.main,
    padding: 20,
  },
}));

const Authentication = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to={"/home"} replace state={{ from: location }} />;
  }

  return (
    <StyledContainer>
      <Paper elevation={5} className="innerContainer">
        {isLoggingIn ? (
          <Login setIsLoggingIn={setIsLoggingIn} />
        ) : (
          <SignUp setIsLoggingIn={setIsLoggingIn} />
        )}
        <AppDivider sx={{ margin: "10px 0" }}>
          <Typography
            variant="body1Regular"
            sx={(theme) => ({ color: theme.palette.text.secondary })}
          >
            OR
          </Typography>
        </AppDivider>
      </Paper>
    </StyledContainer>
  );
};

export default Authentication;
