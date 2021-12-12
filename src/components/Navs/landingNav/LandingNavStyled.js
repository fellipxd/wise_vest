import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  nav {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  @media screen and (max-width: 978px) {
    nav {
    width: 80%;
  }
        }
  }
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: #333645;

  button {
    background: #eb494d;
    font-size: 24px;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 30px;
  }

  @media screen and (max-width: 978px) {
        font-size: 15px;
        button{
          font-size: 15px;
        }
  }
`;
