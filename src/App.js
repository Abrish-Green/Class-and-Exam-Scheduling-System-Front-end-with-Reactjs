import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, useHistory} from 'react-router-dom'
import RegisterAdmin from './pages/admin/register'
import LoginAdmin from './pages/admin/login'
import AdminHome from './pages/admin/home'
import ResetPassowrd from './pages/admin/reset'
import CreateBlockAdmin from './pages/admin/createBlocks'
import AdminSetting from './pages/admin/setting'

import Colleges from './pages/admin/Colleges'
import CreateCollege from './pages/admin/CreateCollege'
import CollegeLogin from './pages/college/login'
import CollegeRegister from './pages/college/register'
import CollegeHome from './pages/college/home'
import CollegeReset from './pages/college/reset'
import CollegeAddBlock from './pages/college/addBlockandRoom'
import CollegeAssignRoomToDepartment from './pages/college/departmentRoomAssigner'
import CollegeAdmin from './pages/college/AdminPortal'

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
import DepartmentAddInvigilator from './pages/department/addInvigilators'
import DepartmentInvigilators from './pages/department/Invigilators'
import DepartmentCourses from './pages/department/courses'
import DepartmentEditCourse from './pages/department/editCourse'
import StartSchedulingProcess from './pages/department/startSchedulingProcess';
import DepartmentExamScheduler from './pages/department/examScheduler'
import DepartmentExamAssignRoom from './pages/department/examRoomAssigner'
import NotFound404 from './pages/other/NotFound404'
import Home from './pages/other/home'
import DepartmentAdmin from './pages/department/AdminPortal'
import DepartmentAddExamCourse from './pages/department/addExamCourse'

import AdminPortal from './pages/admin/AdminPortal'
import CommonPage from './pages/admin/layout'
import axios from 'axios';
import useAuth from './useAuth';
import Session from 'react-session-api'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
//axios.defaults.headers.common['Authorization'] = localStorage.getItem('r_auth');




const App =(props)=>{
    

   
    
    return (
        <div>

            <Router>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/admin/register" component={RegisterAdmin} exact/>
                    <Route path="/admin/login" component={LoginAdmin} exact/>
                    <Route path="/admin/reset" component={ResetPassowrd} exact/>
                  
                    <Route path="/admin" render={(props)=>{return <AdminPortal component={AdminHome} />}}  exact/>
                    <Route path="/admin/colleges" render={(props)=>{return <AdminPortal component={Colleges} />}} exact/>
                    <Route path="/admin/create-colleges" render={(props)=>{return <AdminPortal component={CreateCollege} />}}  exact/>
                    <Route path="/admin/create-blocks" render={(props)=>{return <AdminPortal component={CreateBlockAdmin} />}} exact/>
                    <Route path="/admin/setting" render={(props)=>{return <AdminPortal component={AdminSetting} />}} exact/>


                    <Route path="/college/login" component={CollegeLogin} exact/>
                    <Route path="/college/register" component={CollegeRegister} exact/>
                    <Route path="/college/reset" component={CollegeReset} exact/>
                    
                    <Route path="/college" render={(props)=>{return <CollegeAdmin component={CollegeHome}/>}} exact/>


                    <Route path="/college/departments" render={(props)=>{return <CollegeAdmin component={Departments}/>}} exact/>
                    <Route path="/college/create-department" render={(props)=>{return <CollegeAdmin component={CreateDepartment}/>}} exact/>
                    <Route path="/college/department/edit/:id" render={(props)=>{return <CollegeAdmin component={EditDepartment}/>}} exact/>
                    <Route path="/college/department/heads"  render={(props)=>{return <CollegeAdmin component={DepartmentHeads} />}} exact/>
                    <Route path="/college/department/head/edit/:id"  component={EditDepartmentHead} exact/>
                    <Route path="/college/department/head/change/:id" component={ChangeDepartment} exact/>
                    <Route path="/college/department/select/block" render={(props)=>{return <CollegeAdmin component={CollegeAddBlock}/>}} exact/>
                    <Route path="/college/department/assign/room" render={(props)=>{return <CollegeAdmin component={CollegeAssignRoomToDepartment}/>}} exact/>

                    
                    <Route path="/department/login" component={DepartmentLogin} exact/>
                    <Route path="/department/register" component={DepartmentRegister} exact/>
                    <Route path="/department/reset" component={DepartmentReset} exact/>
                   
                    <Route path="/department" render={(props)=>{return <DepartmentAdmin component={DepartmentHome} />}} exact/>
                    <Route path="/department/edit" render={(props)=>{return <DepartmentAdmin  component={EditMyDepartment}  />}} exact/>
                    
                    <Route path="/department/create/instructor" render={(props)=>{return <DepartmentAdmin  component={CreateInstructor} />}} exact/>
                    <Route path="/department/instructors" render={(props)=>{return <DepartmentAdmin  component={DepartmentInstructors}  />}} exact/>
                    <Route path="/department/instructor/edit/:id"   component={DepartmentEditInstructor}  exact/>
                    
                    <Route path="/department/schedule/class" render={(props)=>{return <DepartmentAdmin  component={StartSchedulingProcess}  />}} exact/>
                    
                    <Route path="/department/add/course" render={(props)=>{return <DepartmentAdmin  component={DepartmentAddCourse}  />}} exact/>
                    <Route path="/department/courses/" render={(props)=>{return <DepartmentAdmin  component={DepartmentCourses}  />}} exact/>
                    <Route path="/department/course/edit/"  component={DepartmentEditCourse} exact/>
                    
                    <Route path="/department/create/exam/course/" render={(props)=>{return <DepartmentAdmin  component={DepartmentAddExamCourse}  />}} exact/>
                    


                    <Route path="/department/add/section" render={(props)=>{return <DepartmentAdmin  component={DepartmentSection}  />}} exact/>
                    
                    
                    <Route path="/department/add/invigilator" render={(props)=>{return <DepartmentAdmin  component={DepartmentAddInvigilator}  />}} exact/>
                    <Route path="/department/invigilators" render={(props)=>{return <DepartmentAdmin  component={DepartmentInvigilators}  />}} exact/>
                    

                    <Route path="/department/exam/room/assigner" render={(props)=>{return <DepartmentAdmin  component={DepartmentExamAssignRoom}  />}} exact />
                    <Route path="/department/exam/schedule" render={(props)=>{return <DepartmentAdmin  component={DepartmentExamScheduler}  />}} exact />
                    

                    <Route component={NotFound404} />
                </Switch>
            </Router>



        </div>
    )

}

export default App;