import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import ResetPassowrd from './pages/admin/reset'
import Colleges from './pages/admin/Colleges'
import CreateCollege from './pages/admin/CreateCollege'
import CollegeLogin from './pages/college/login'
import CollegeRegister from './pages/college/register'
import CollegeReset from './pages/college/reset'
import Departments from './pages/college/departments'
import CreateDepartment from './pages/college/createDepartments'
import EditDepartment from './pages/college/editDepartment'


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

                    <Route path="/college/login" component={CollegeLogin} exact/>
                    <Route path="/college/register" component={CollegeRegister} exact/>
                    <Route path="/college/reset" component={CollegeReset} exact/>

                    <Route path="/college/departments" component={Departments} exact/>
                    <Route path="/college/create-department" component={CreateDepartment} exact/>
                    <Route path="/college/department/edit/:id" component={EditDepartment} exact/>


                   

    
                </Switch>
            </Router>



        </>
    )

}

export default App;