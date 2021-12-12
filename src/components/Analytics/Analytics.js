import React from 'react'
import styled from 'styled-components'



const Box = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const Button = styled.button`
     background: #eb494d;
     width: max-content;
    font-size: 24px;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 50px
`
const Analytics = () => {
    return (
        <Box>
        <h2>Features in development</h2>
            <Button>Credit Score</Button>
            <Button>View my financial portfolio</Button>
            <Button>Export my Financial portfolio</Button>
            <Button>Save with Piggyvest</Button>
            <Button>Invest with Risevest</Button>
            <Button>Buy stocks with Bamboo</Button>
            

        </Box>
    )
}

export default Analytics
