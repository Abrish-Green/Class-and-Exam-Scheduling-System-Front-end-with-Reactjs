import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import ResetPassowrd from './pages/admin/reset'
import SendEmail from './pages/admin/sendEmailToCollege'
const App =()=>{

    return (
        <>

            <Router>
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/admin/register" component={RegisterAdmin} exact/>
                    <Route path="/admin/login" component={LoginAdmin} exact/>
                    <Route path="/admin/reset" component={ResetPassowrd} exact/>
                    <Route path="/admin/send-email" component={SendEmail} exact/>
                    
    
                </Switch>
            </Router>



        </>
    )

}

export default App;