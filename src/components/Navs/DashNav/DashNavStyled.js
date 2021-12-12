import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: space-between;
  /* z-index: 100; */
  

    
  }
`;

export const NavIcon = styled.div`
  display: none;
  height: 50px;
  margin-left: 20px;

  @media screen and (max-width: 978px) {
    display: flex;
  }
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div`
  display: flex;

  .details {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: -15px;
  }
  .name {
    font-size: 23px;
    margin-bottom: -10px;
  }
  @media only screen and (max-width: 978px) {
    .details {
      display: none;
    }
  }
`;
export const Avatar = styled.div`
  img {
    border-radius: 50%;
  }
`;
