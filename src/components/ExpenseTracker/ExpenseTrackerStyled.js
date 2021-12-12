import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  width: 80%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  background: rgba(236, 239, 244, 0.24);
  border: 1px solid rgba(236, 239, 244, 0.29);
  border-radius: 16px;
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h1 {
    color: #eb494d;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  input {
    padding: 20px;
    background: #eceff4;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 16px;
  }

  button {
    background: #343645;
    border-radius: 16px;
    width: 30%;
    color: #fff;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 16px;
  }

  @media screen and (max-width: 978px) {
    width: 100%;
    left: 0%;

    button {
      width: 50%;
    }
  }
`;
