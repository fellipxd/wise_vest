import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormBox, Signup } from "./LoginStyled";
import { LoginSchema } from "./LoginSchema";
import { useHistory } from "react-router-dom";

const initialValues = {
    username:"",
  password: "",
};

const LoginForm = () => {
    const history = useHistory()
  return (
  <FormBox>
      <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
        history.push("/mono")
      }}
    >
      {(formik) => {
           const {isValid, dirty } = formik;
        return (
       
              <Form>
            <h1>Login</h1>
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
              PASSWORD
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </label>
          
           <div>
           <button type="submit"
             className={!(dirty && isValid) ? "disabled-btn" : "button"}
             disabled={!(dirty && isValid)}>Login</button>
               <Signup to="/signup">Signup</Signup>
           </div>
          </Form>
         
        );
      }}
    </Formik>
  </FormBox>
  );
};

export default LoginForm;
