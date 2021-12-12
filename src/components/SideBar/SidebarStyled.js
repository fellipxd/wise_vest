import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #343645;
  padding: 30px 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  .active_link {
    background: #eb4b4d;
  }
  .active_p {
    display: flex;
    height: 100%;
    opacity: 1;
    transition: opacity 0.6s ease-in;
  }
  .inactive_p {
    opacity: 0;
    width: 0;
    height: 0;
    transition: 0.3s ease-in;
  }

  .bi {
    font-size: 25px;
    margin-right: 10px;
  }

  .arrow {
    width: 100%;
    justify-content: right;
    position: relative;
    padding-left: 10px;
  }
  .link_wrapper {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
  }
`;
export const SidebarLink = styled(NavLink)`
  font-size: 23px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  height: 20%;
  width: 90%;
  margin: auto;
  padding: auto;
  padding-top: 40px;
  text-align: center;
  border-radius: 10px;
  

  span {
    font-size: 12px;
    color: yellow;
  }

  

  &&:hover {
    text-decoration: none;
  }
`;

export const Container = styled.nav`
  .active {
    grid-area: sidebar;
    --webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: 15vw;
    height: 94%;
    position: relative;
    transition: 0.3s ease-in;
  }

  .inactive {
    grid-area: sidebar;
    width: 4vw;
    transition: 0.3s ease-in;
  }

  .menu-bars {
    display: none;
    margin-bottom: 10px;
    text-decoration: none;
    margin-left: -6px;
    color: #fff;
    font-size: 2rem;
  }
  .inactive_menu {
    border-left: 5px yellow solid;
  }

  .active_menu {
    border-left: 5px #2636c3 solid;
  }

  @media screen and (max-width: 978px) {
    .active {
      position: fixed;
      transform: translate3d(
        ${(props) => (props.visible ? 0 : "-1000vw")},
        0,
        0
      );
      width: 100%;
      height: 100%;
      margin: auto;
      margin-top: 0%;
      margin-left: 0%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: auto;
      top: 0%;
    }
  }

  @media screen and (max-width: 978px) {
    .menu-bars {
      display: flex;
      
    }
  }
`;

export const Logout = styled.div`
display: flex;
align-items: center;
justify-content: center;
    font-size: 23px;
  color: #fff;
  cursor: pointer;
  width: 90%;
  
`
