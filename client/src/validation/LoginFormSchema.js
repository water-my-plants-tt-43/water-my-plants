import * as yup from "yup";

const LoginFormSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter username")
  ,
  password: yup
    .string()
    .required("Please enter password")
    .min(6, "Password must be more than 6 characters"),
});

export default LoginFormSchema;
