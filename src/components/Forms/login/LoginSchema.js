import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
  password: Yup.string().required("Password is required"),
  // .min(6, "Password is too short - should be 6 chars minimum"),
});