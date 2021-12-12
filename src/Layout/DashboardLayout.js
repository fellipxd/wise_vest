import React, { useState, } from "react";
import DashNav from "../components/Navs/DashNav/DashNav";
import Sidebar from "../components/SideBar/Sidebar";
import { Body, MainBody, Header, Main, SideNav } from "./DashlayoutStyled";
const DashboardLayout = ({ children, user, ...rest }) => {
  const [showNav, setShowNav] = useState(0);
  

  const toggle = () => {
    setShowNav(Number(!showNav));
  };

  const [inactive, setInactive] = useState(false);
  const click = () => {
    setInactive(!inactive);
    console.log("click");
  };
 
    return (
      <MainBody {...rest}>
        <Header>
        <DashNav toggle={toggle} user={user} />
        </Header>
        <Body>
          <SideNav>
         <Sidebar
         visible={showNav}
         inactive={inactive}
         toggle={toggle}
         click={click}
        
       />
  
        
    
       
          </SideNav>
  
          <Main
            className={`active ${inactive ? "inactive" : ""}`}
            user={user}
          >
            {children}
          </Main>
        </Body>
      </MainBody>
    );
  
};

export default DashboardLayout;
