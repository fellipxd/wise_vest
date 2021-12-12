import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBox, Login } from "./SignUpStyled";
import { SignupSchema } from "./SignupSchema";

const initialValues = {
    username:"",
  email: "",
  password: "",
};

const SignUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
           const {isValid, dirty } = formik;
        return (
         <FormBox>
              <Form>
            <h1>Sign Up</h1>
            <label>
              USERNAME
              <Field type="text" name="username" />
              <ErrorMessage
                name="username"
                component="span"
                className="error"
              />
            </label>
            <label>
              EMAIL
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" className="error" />
            </label>
            <label>
              PASSWORD
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </label>
            <label>
              BVN
              <input type="NUMBER" />
            </label>
           <div>
           <button type="submit"
             className={!(dirty && isValid) ? "disabled-btn" : "button"}
             disabled={!(dirty && isValid)}>Sign Up</button>
            <Login to="/login">Login</Login>
           </div>
          </Form>
         </FormBox>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
