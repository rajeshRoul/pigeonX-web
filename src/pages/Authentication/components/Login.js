import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "redux/slices/user";
import Server from "ServerConnect";
import valSchema from "utils/formikValidations";

const Login = ({ setIsLoggingIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onCreateAccountClick = () => {
    setIsLoggingIn(false);
  };

  const logInUser = async (userData) => {
    const res = await Server.post.logInUser(userData);
    if (res?.success) {
      dispatch(userActions.setUserLoggedIn(true));
      dispatch(userActions.setUserData(res.data));
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={valSchema.signIn}
      onSubmit={logInUser}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="center">
            <Typography variant="h1">Sign In</Typography>
          </Grid>
          <Grid container spacing={3} sx={{ marginTop: "15px" }}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                required
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  required
                  sx={(theme) => ({
                    backgroundColor: theme.palette.background.main,
                    paddingRight: "5px",
                  })}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                />
                <ErrorMessage
                  name="password"
                  render={(err) => <FormHelperText>{err}</FormHelperText>}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "5px" }}>
              <Button type="submit" fullWidth size="large" variant="contained">
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ marginTop: "5px" }}>
            <Typography variant="body2Regular">New User ?</Typography>
            <Button
              onClick={onCreateAccountClick}
              sx={{ p: 0, textTransform: "capitalize", marginLeft: "2px" }}
              variant="text"
            >
              <Typography variant="body2Regular"> Sign Up</Typography>
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Login;
