import axios from 'axios'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './AdminRegister.css'
import Layout from './layout'

const Courses = (props)=>{
    const[department_id,setDepartmentID] = useState()
    const[courses,setcourses] = useState()
    const history = useHistory()
    
    const YearColor = [null,'badge badge-primary','badge badge-secondary','badge badge-brand','badge badge-warning','badge badge-success','badge badge-danger']

    const Year = [null,'First Year','Second Year','Third Year','Fourth Year','Fifth Year','Sixth Year']

    const GetCourses = async ()=>{

              await axios({
                'method': 'post',
                'url': 'department/courses',
                data:{
                    'department_id':department_id
                }}).then((response)=>{
                    console.log(response.data)
                    setcourses(response.data.courses)
                })


    }

    useEffect(() => {
     
       
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    console.log(response.data.id)
                    setDepartmentID(response.data.id)
                })
            }
        )();

        GetCourses()

       
   
        
        
    }, [department_id])




    const Edit =(course)=>{
        (
            async(e)=>{
            
            history.push({ pathname: `/department/course/edit/`,state: course});
        }
    )();
    }

    const Delete =(course)=>{
        (
            async()=>{
                await axios({
                    method: 'post',
                    url: `/department/course/${course.id}/delete`
                }).then((response)=>{
                   console.log(response.data)
                });
    
            }
        )();
        GetCourses()
    }


    

    const Has = (props)=>{
        if(props.type == 'lab'){
            if(props.value == 1){
                return (<span  style={{ color:'white' }}  class="badge badge-success">Lab</span>)
            }else{
                return (<span  style={{ color:'white' }} class="badge badge-danger">No Lab</span>)
            }
        }else{
            if(props.value == 1){
                return (<span  style={{ color:'white' }} class="badge badge-success">Lecture</span>)
            }else{
                return (<span  style={{ color:'white' }} class="badge badge-danger">No Lecture</span>)
            }
        }
        
    }

    const CourseTyper = (props)=>{
        if(props.type == 'Major_course'){
                return (<span class="badge badge-primary">Major Course</span>)
        }else if(props.type == 'Common_course'){
                return (<span class="badge badge-info">Common Course</span>)
        }else{
                return (<span class="badge badge-brand">Supporting Course</span>)
        }
        
    }




    return (
        <div>
        <Layout />
   

        <div style={{ position: 'absolute', top: '6em',left: '18em' ,width: '80em'}}>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
            <h2 style={{padding: '.3em',textAlign:'center'}} class="card-header-title">Department Courses</h2>
            <div class="card-body">
                <div class="table-responsive">
                <div style={{ height: '70vh',overflowY : 'scroll' }}>
                    <table class="table table-striped table-bordered table-hover first">
                   
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Course Code</th>
                                <th>Course Year</th>
                                <th>Course Type</th>
                                <th>Course Credit Hour</th>
                                <th>Lab</th>
                                <th>Edit</th>
                                <th>Delete</th>
                             
                                
                            </tr>
                        </thead>
                       
                        <tbody>
                        

                                {courses && 
                                   
                                courses.map((course)=>{
                                    
                                    return (
                                        <tr>
                                            <td style={{maxWidth:'15em',fontWeight: 'bold',width:'12em'}}>{_.toUpper(course.course_title)}</td>
                                            <td style={{maxWidth:'5em',width:'4em',fontStyle: 'italic',fontWeight:'bold'}}>{_.toUpper(course.course_code)}</td>
                                            <td style={{width:'3em' }}><span style= {{ fontSize: '.9em' }} class={YearColor[course.year]}>{Year[course.year]}</span></td>
                                            <td style={{width:'5em'}}><CourseTyper type={course.course_type} /></td>
                                            <td style={{ width: '2em' }}><span class="badge badge-pill badge-dark">{course.course_credit_hour} Hours</span></td>
                                            <td style={{width:'5em'}}> <Has type="lab" value={course.course_has_lab} /> </td>
                                            <td style={{width:'5em'}}><button onClick={(e)=>{Edit(course)}} className="btn btn-warning">Edit</button></td>
                                            <td style={{width:'5em'}}><button onClick={(e)=>{Delete(course)}} className="btn btn-danger">Delete</button></td>
                                           
                                            
                                    </tr>
                                    )
                                })

                                }

                                {courses &&
                                   
                                    courses.length == 0 ?

                                    <tr>
                                            <td colSpan="8">No Data Yet</td>
                                            
                                    </tr> : ''

                                }
                        
                   
                        </tbody>
                       
                        
                    </table>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
        
        
        </div>

    </div>
    )
}

export default Courses