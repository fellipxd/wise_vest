import { Avatar, Navbar, NavIcon, NavLeft, NavRight } from "./DashNavStyled";
import logo from "../../../assets/Frame 12.png";
import avatar from "../../../assets/avatar.png";
import { BsList } from "react-icons/bs";
const DashNav = ({ toggle }) => {
  return (
    <Navbar>
      <NavIcon>
        <BsList style={{ height: "60px", fontSixe: "30px" }} onClick={toggle} />
      </NavIcon>
      <NavLeft>
        <img src={logo} alt="wisevest_logo" />
      </NavLeft>
      <NavRight>
        <Avatar> 
          {" "}
          <img width="40" src={avatar} alt="avatar" />
        </Avatar>
      </NavRight>
    </Navbar>
  );
};

export default DashNav;
