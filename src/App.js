
import {  Route, Switch } from "react-router-dom";
import Monopage from "./components/Forms/login/monopage";
import Dashboard from "./page/dashboard/Dashboard";
import { dashRoutes } from "./page/dashboard/DashRoutes";
import LandingPage from './page/landingPage';
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";


function App() {
  return (
 
    
    
    <Switch>
      <Route exact path="/" component={LandingPage } />
      <Route path="/signup"  component={Signup} />
      
      <Route path="/login"  component={Login} />
      <Route path="/mono"  component={Monopage} />
      
      <Route path={dashRoutes}  component={Dashboard} />
      

      
      
    </Switch>
  );
}

export default App;
