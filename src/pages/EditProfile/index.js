import { Button, Grid, TextField, Typography } from "@mui/material";
import ProfilePageHeader from "components/AppCommon/Headers/ProfilePageHeader";
import { Formik } from "formik";
import LayoutHorizontalSplit from "layouts/LayoutHorizontalSplit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { userActions } from "redux/slices/user";
import Server from "ServerConnect";
import valSchema from "utils/formikValidations";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [initialFormData, setInitialFormData] = useState({
    full_name: "",
    email: "",
  });
  const { id } = useParams();

  const handleSubmit = async (data) => {
    const res = await Server.update.userProfile(data, [id]);
    if (res.success) {
      const { _id, full_name, email } = res.data;
      dispatch(
        userActions.setUserData({
          id: _id,
          full_name,
          email,
        })
      );
      navigate(-1);
    }
  };

  const getProfileData = async () => {
    const res = await Server.get.userProfile({}, [id]);
    if (res.success) {
      const { data } = res;
      setInitialFormData({ full_name: data.full_name, email: data.email });
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <LayoutHorizontalSplit header={<ProfilePageHeader />}>
      <Typography variant="h1">Edit Profile</Typography>
      <Formik
        initialValues={initialFormData}
        validationSchema={valSchema.updateProfile}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {console.log(formik.values)}

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
                  helperText={
                    formik.touched.full_name && formik.errors.full_name
                  }
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
              <Grid item xs={12} sx={{ marginTop: "5px" }}>
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </LayoutHorizontalSplit>
  );
};

export default EditProfile;
