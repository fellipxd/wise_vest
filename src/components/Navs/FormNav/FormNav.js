import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/Frame 12.png'
const Nav = styled.div`
     padding: 40px 50px;
`

const FormNav = () => {
    return (
        <Nav>
            <img src={logo} alt='wisevest_logo'/>
        </Nav>
    )
}

export default FormNav
