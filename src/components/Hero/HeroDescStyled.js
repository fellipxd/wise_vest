import styled from "styled-components";

export const Wrapper = styled.div`
  height: 88vh;
  @media screen and (max-width: 978px) {
   min-height: 100vh;
  }
  
`;
export const Text = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 60px; 
    width: 60%;
    margin: auto;
    font-weight: 400;
  }

  img {
    height: 100%;
  }
  input {
    font-size: 24px;
    margin-right: 20px;
    padding: 15px;
    border: none;
    border-radius: 30px;
    background: #E9ECF1;
  }
  .form {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
  .left {

    display: flex;
    flex-direction: column;
  }
  .right {
    flex: 1;
  }

  @media screen and (max-width: 978px) {
   flex-direction: column;

   h1{
     font-size: 35px;

   }
   img {
    height: 80%;
  }

  .left {
    height: 50%;
  }
  .right {
    height: 50%;

  }
  .form {
    display: flex;
    justify-content: center;
    
  }
  input {
    font-size: 15px;
    margin-right: 20px;
    padding: 10px;
    border: none;
    border-radius: 30px;
    background: #E9ECF1;
  }
  }
`;
