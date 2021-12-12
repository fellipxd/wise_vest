import styled from "styled-components";


export const MainBody = styled.div`
  position: relative;;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 10%;
  background: #ECEFF4;
  display: flex;
  align-items: center;
  z-index: 100;
`;
export const Main = styled.div`
position: relative;
  left: 16%;
  width: 80%;
  height: 80vh;
  margin-top: 30px;
  top: 20%;
  min-height: 80vh;
  flex: 1;

 
  @media screen and (max-width:968px){
  left: 0%;
  width: 100%;
    }
 
`;

export const Body = styled.div`
    padding-top: 5%;

   
    @media screen and (max-width:500px){
      margin-top: 10%;
    }
`

export const SideNav = styled.div`
  height: 89%;
  width: min-content;
  position: fixed;
  z-index: 2;
  display: flex;
  flex: 1;

 
`;


