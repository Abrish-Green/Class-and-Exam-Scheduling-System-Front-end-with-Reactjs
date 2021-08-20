import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import ResetPassowrd from './pages/admin/reset'
const App =()=>{

    return (
        <>

            <Router>
                <Switch>
                    <Route path="/admin/register" component={RegisterAdmin} exact/>
                    <Route path="/admin/login" component={LoginAdmin} exact/>
                    <Route path="/admin/reset" component={ResetPassowrd} exact/>
                    
    
                </Switch>
            </Router>



        </>
    )

}

export default App;