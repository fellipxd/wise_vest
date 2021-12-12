import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 80%;
  }
  .left {
    display: flex;
    flex: 1;
    height: 80vh;
    align-items: center;
    justify-content: center;
  }
  .right {
    display: flex;
    
    flex: 1;
    height: 80vh;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 978px) {
        flex-direction: column;
   

  }
`;
