import * as Yup from "yup";



export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
})



