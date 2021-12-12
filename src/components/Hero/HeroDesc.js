import React from "react";
import { Wrapper, Text } from "./HeroDescStyled";
import bg from '../../assets/bro.png'
import Button from "../button/Button";
import { Link } from "react-router-dom";
const HeroDesc = () => {
  return (
    <Wrapper>
      <Text>
      <div className="left">
      <h1>
          Get hold of your spending budget, investments and expenses all in one
          place!
        </h1>
        <div className="form">
          <Link to='/signup'>  <Button>Get Started</Button></Link>
        </div>
      </div>
       <div className="right">
       <img src={bg} alt='background_img'/>
       </div>
      </Text>
    </Wrapper>
  );
};

export default HeroDesc;
