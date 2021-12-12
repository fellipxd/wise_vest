import React from 'react'
import Mono from '../../../MonoConnect'
import styled from 'styled-components'


const Page = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 a{
     text-decoration: none;
    font-size: 25px;
    margin-left: 30px;
    }

`
const Monopage = () => {
    return (
        <Page>
            <div>
            <Mono/>
            <a href='/history'>Explore Dashboard</a>
            </div>
        </Page>
    )
}

export default Monopage


