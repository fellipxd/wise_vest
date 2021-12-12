import React from 'react'
import HeroDesc from '../components/Hero/HeroDesc'
import LandingNav from '../components/Navs/landingNav/LandingNav'
import styled from 'styled-components'

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
const LandingPage = () => {
    return (
        <Wrapper >
            <LandingNav/>
            <HeroDesc/>
        </Wrapper>
    )
}

export default LandingPage
