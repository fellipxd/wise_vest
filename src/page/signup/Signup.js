import React from "react";
import FormNav from "../../components/Navs/FormNav/FormNav";
import signup from "../../assets/signup.png";
import SignUpForm from "../../components/Forms/signup/SignUp";
import { Wrapper } from "./SignupStyled";
const Signup = () => {
  return (
    <>
      <FormNav />
      <Wrapper>
        <div className="left">
          <img src={signup} alt="signup_image" />
        </div>
       <div className="right">
       <SignUpForm />
       </div>
      </Wrapper>
    </>
  );
};

export default Signup;
