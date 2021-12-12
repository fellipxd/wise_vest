import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormBox = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    font-size: 23px;
    margin-bottom: 40px;
  }

  input {
    border: none;
    border-bottom: 1px solid black;
    font-size: 20px;
    padding: 15px;
  }
  .disabled-btn {
    cursor: not-allowed;
    background: #eb494d;
    font-size: 24px;
    color: #fff;
    border: none;
    padding: 15px;
    opacity: 0.5;
    width: 75%;
    border-radius: 30px;
    margin: 10px auto 0 auto;
    
  }
  .button{
    background: #eb494d;
    font-size: 24px;
    color: #fff;
    border: none;
    padding: 15px;
    width: 75%;
    border-radius: 30px;
    cursor: pointer;
  }
`;


export const Login = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    margin: 20px auto;
`
