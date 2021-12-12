import React from 'react'
import {Wrapper, Navlink} from './LandingNavStyled'
import logo from '../../../assets/Frame.png'
import Button from '../../button/Button';
const LandingNav = () => {
    return (
        <Wrapper>
            <div className='nav-bar'>
            <img src={logo} alt='wisevest_logo'/>
            <nav>
                <Navlink to='/'>Resources</Navlink>
                {/* <Navlink to='/'>Dashboard</Navlink>
                <Navlink to='/'>Expense Tracker</Navlink> */}
                <Navlink to='/login'>Login</Navlink>
                <Navlink to='/signup'><Button>Get Started</Button></Navlink>
                
            </nav>
            </div>
        </Wrapper>
    )
}

export default LandingNav 
