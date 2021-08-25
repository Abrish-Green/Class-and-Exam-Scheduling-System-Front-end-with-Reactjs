import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import ResetPassowrd from './pages/admin/reset'
import Colleges from './pages/admin/Colleges'
import CreateCollege from './pages/admin/CreateCollege'
const App =()=>{

    return (
        <>

            <Router>
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/admin/register" component={RegisterAdmin} exact/>
                    <Route path="/admin/login" component={LoginAdmin} exact/>
                    <Route path="/admin/reset" component={ResetPassowrd} exact/>
                    <Route path="/admin/colleges" component={Colleges} exact/>
                    <Route path="/admin/create-colleges" component={CreateCollege} exact/>

    
                </Switch>
            </Router>



        </>
    )

}

export default App;