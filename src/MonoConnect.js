import React from 'react'
import MonoConnect from '@mono.co/connect.js';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from './components/button/Button';



const Wrapper = styled.div`
   width: 100px;
   img{
       width: 100%;
   }
   button{
     background: ;
   }
`

const Mono = () => {
  const history = useHistory()

 
    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
          onClose: () => console.log('Widget closed'),
          onLoad: () => console.log('Widget loaded successfully'),
          onSuccess: () => history.push('/history'),
          key: "test_pk_wWgiS9xsTIEZG2QMv3Wu"
        })
  
        monoInstance.setup()
        
        return monoInstance;
      }, [history])
    
      return (
        <Wrapper>
          <Button onClick={() => monoConnect.open()}>
            Link your Bank Account
          </Button>
        </Wrapper>
      )
}

export default Mono
