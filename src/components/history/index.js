import React, { useState } from 'react'
import Credits from './credits/Credits'
import Debits from './debits/Debits'
import Tab from './tab'





const History = () => {

    
    let [page, setPage] = useState('debits')
    return (
        <>
            <Tab setPage={setPage}/>
            <div className='content'>
      {page === 'debits' ? <Debits/> : <Credits/>}
    </div>
        </>
    )
}

export default History
