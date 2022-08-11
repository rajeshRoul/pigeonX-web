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
import valSchema from "utils/formikValidations";

const SignUp = ({ setIsLoggingIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignInClick = () => {
    setIsLoggingIn(true);
  };

  const logInUser = (userData) => {
    console.log({ userData });
  };

  return (
    <Formik
      initialValues={{
        full_name: "",
        email: "",
        password: "",
      }}
      validationSchema={valSchema.signUp}
      onSubmit={logInUser}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="center">
            <Typography variant="h1">Sign Up</Typography>
          </Grid>
          <Grid container spacing={3} sx={{ marginTop: "15px" }}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                required
                fullWidth
                value={formik.values.full_name}
                onChange={formik.handleChange("full_name")}
                error={
                  formik.touched.full_name && Boolean(formik.errors.full_name)
                }
                helperText={formik.touched.full_name && formik.errors.full_name}
              />
            </Grid>
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
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ marginTop: "5px" }}>
            <Typography variant="body2Regular">
              Already Have An Account ?
            </Typography>
            <Button
              onClick={onSignInClick}
              sx={{ p: 0, textTransform: "capitalize", marginLeft: "2px" }}
              variant="text"
            >
              <Typography variant="body2Regular"> Sign In</Typography>
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
