import React from 'react'
import styled from 'styled-components'

const Style = styled.button`
     background: #eb494d;
     width: max-content;
    font-size: 24px;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 30px;
    cursor: pointer;
    @media screen and (max-width: 978px) {
        font-size: 15px;

  }
`

const Button = ({children, ...rest}) => {
    return (
       <Style
       type="button"
       className='button'
       {...rest}
       >
        
        {children}
       
       </Style>
    )
}

export default Button
