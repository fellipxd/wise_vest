import React from 'react'
import { Route,  Switch } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Beta, Tracker, Transactions } from './DashRoutes'

const Dashboard = () => {

    const options = {
        method: 'POST',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
      };
      
      fetch('https://api.withmono.com/account/auth', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    return (
        <DashboardLayout>
        <Switch>
            
        <Route path="/history"  component={Transactions} />
        <Route path="/analytics"  component={Beta} />
           
        <Route path="/expense-tracker"  component={Tracker} />
           
        </Switch>
        </DashboardLayout>
    )
}

export default Dashboard
