import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import AdminHome from './pages/admin/home'
import ResetPassowrd from './pages/admin/reset'
import CreateBlockAdmin from './pages/admin/createBlocks'

import Colleges from './pages/admin/Colleges'
import CreateCollege from './pages/admin/CreateCollege'
import CollegeLogin from './pages/college/login'
import CollegeRegister from './pages/college/register'
import CollegeHome from './pages/college/home'
import CollegeReset from './pages/college/reset'
import CollegeAddBlock from './pages/college/addBlockandRoom'


import Departments from './pages/college/departments'
import DepartmentHome from './pages/department/home'
import CreateDepartment from './pages/college/createDepartments'
import EditDepartment from './pages/college/editDepartment'
import DepartmentHeads from './pages/college/departmentHeads'
import EditDepartmentHead from './pages/college/editDepartmentHead'
import ChangeDepartment from './pages/college/changeDepartmentHead'
import DepartmentRegister from './pages/department/register'
import DepartmentLogin from './pages/department/login'
import DepartmentReset from './pages/department/reset'
import EditMyDepartment from './pages/department/editDepartment'
import CreateInstructor from './pages/department/createInstructors'
import DepartmentInstructors from './pages/department/instructors'
import DepartmentEditInstructor from './pages/department/editInstructor'
import DepartmentAddCourse from './pages/department/addCourse'
import DepartmentInstructor from './pages/department/addInstructor'
import DepartmentSection from './pages/department/addSection'


import StartSchedulingProcess from './pages/department/startSchedulingProcess';

import NotFound404 from './pages/other/NotFound404'

import AdminPortal from './pages/admin/AdminPortal'
import CommonPage from './pages/admin/layout'
import axios from 'axios';
import useAuth from './useAuth';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
//axios.defaults.headers.common['Authorization'] = localStorage.getItem('r_auth');



const App =()=>{

    
    return (
        <div>

            <Router>
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/admin/register" component={RegisterAdmin} exact/>
                    <Route path="/admin/login" render={()=> <LoginAdmin />} exact/>
                    <Route path="/admin/reset" component={ResetPassowrd} exact/>
                  
                    <Route path="/admin" component={AdminHome}  exact/>
                    <Route path="/admin/colleges" component={Colleges}  exact/>
                    <Route path="/admin/create-colleges" component={CreateCollege}  exact/>
                    <Route path="/admin/create-blocks" component={CreateBlockAdmin}  exact/>


                    <Route path="/college/login" component={CollegeLogin} exact/>
                    <Route path="/college/register" component={CollegeRegister} exact/>
                    <Route path="/college/reset" component={CollegeReset} exact/>
                    <Route path="/college" component={CollegeHome} exact/>


                    <Route path="/college/departments" component={Departments} exact/>
                    <Route path="/college/create-department" component={CreateDepartment} exact/>
                    <Route path="/college/department/edit/:id" component={EditDepartment} exact/>
                    <Route path="/college/department/heads" component={DepartmentHeads} exact/>
                    <Route path="/college/department/head/edit/:id" component={EditDepartmentHead} exact/>
                    <Route path="/college/department/head/change/:id" component={ChangeDepartment} exact/>
                    <Route path="/college/department/select/block" component={CollegeAddBlock} exact/>




                    <Route path="/department/login" component={DepartmentLogin} exact/>
                    <Route path="/department/register" component={DepartmentRegister} exact/>
                    <Route path="/department/reset" component={DepartmentReset} exact/>
                    <Route path="/department" component={DepartmentHome} exact/>
                    
                    <Route path="/department/edit" component={EditMyDepartment} exact/>
                    <Route path="/department/create/instructor" component={CreateInstructor} exact/>
                    <Route path="/department/instructors" component={DepartmentInstructors} exact/>
                    <Route path="/department/instructor/edit/:id" component={DepartmentEditInstructor} exact/>
                    <Route path="/department/schedule/class" component={StartSchedulingProcess} exact/>
                    <Route path="/department/add/course" component={DepartmentAddCourse} exact/>
                    <Route path="/department/add/section" component={DepartmentSection} exact/>
                    
                    

                    <Route component={NotFound404} />
                </Switch>
            </Router>



        </div>
    )

}

export default App;