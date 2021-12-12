import React from "react";
import {
  Container,
  SidebarWrapper,
  SidebarLink,
  Logout,
} from "./SidebarStyled";
import {AiOutlineClose} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'



const handleLogout = () => {
 
  document.location.href = '/'
 
}


const Sidebar = (props) => {
  
 
   
  return (
  
    <Container {...props} >
      <div className={`active ${props.inactive ? "inactive" : ""}`} >
        <SidebarWrapper>
          
         <div className='link_wrapper'>
         <div className="menu-bars" onClick={props.toggle}>
            <AiOutlineClose />
          </div>
           <SidebarLink activeClassName="active_link" to='/history'>Financial History</SidebarLink>
           <SidebarLink  activeClassName="active_link" to='/analytics'>Analytics <span>BETA</span></SidebarLink>
           <SidebarLink activeClassName="active_link" to='/expense-tracker'>Expense Tracker</SidebarLink>
          
             </div>
             
             <Logout onClick={handleLogout}>
               <FiLogOut/>
               LogOut
             </Logout>
        </SidebarWrapper>
      </div>
    </Container>
  );
};

export default Sidebar;
