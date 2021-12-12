import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
display: flex;
justify-content: center;

`
const TabPane = styled.button`
 background: none;
 border: none;
 color: #36AB93;
 border-bottom: 2px solid #36AB93;
 margin-right: 50px;
 font-size: 24px;

 @media screen and (max-width: 978px) {
    font-size: 15px;
  }
`


const Tab = ({setPage}) => {
    return (
        <Box>
            <TabPane onClick={() => setPage('debits')}> Debit Transactions</TabPane>
            <TabPane onClick={() => setPage('credits')}> Credit Transactions</TabPane>
        </Box>
    )
}

export default Tab
