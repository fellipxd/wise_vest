import React from 'react'
import LoginForm from '../../components/Forms/login/Login'
import signup from "../../assets/signup.png";
import { Wrapper } from "./LoginStyled";
import FormNav from '../../components/Navs/FormNav/FormNav';


const Login = () => {
    return (
        <div>
           
             <FormNav />
      <Wrapper>
        <div className="left">
          <img src={signup} alt="signup_image" />
        </div>
       <div className="right">
       <LoginForm/>
      
       </div>
       
      </Wrapper>
       
        </div>
    )
}

export default Login
