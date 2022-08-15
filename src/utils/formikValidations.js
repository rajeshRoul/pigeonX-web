import * as yup from "yup";

const valSchema = {
  signUp: yup.object({
    full_name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .required("Email is Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid Email Address"
      ),
    password: yup.string().required("Password is Required"),
  }),
  signIn: yup.object({
    email: yup
      .string()
      .required("Email is Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid Email Address"
      ),
    password: yup.string().required("Password is Required"),
  }),
  createPost: yup.object({
    postText: yup.string().required("Name is Required"),
  }),
};

export default valSchema;
