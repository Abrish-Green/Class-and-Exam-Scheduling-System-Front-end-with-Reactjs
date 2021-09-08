import axios from 'axios'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import './AdminRegister.css'

const Courses = ()=>{
    const[department_id,setDepartmentID] = useState()
    const[courses,setcourses] = useState()
    const Year = [null,'First Year','Second Year','Third Year','Fourth Year','Fifth Year','Sixth Year']

    const GetCourses = async ()=>{

              await axios({
                'method': 'post',
                'url': 'department/courses',
                data:{
                    'course_department_id':department_id
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





    

    const Has = (props)=>{
        if(props.type == 'lab'){
            if(props.value == 1){
                return (<span  class="badge badge-success">Lab</span>)
            }else{
                return (<span class="badge badge-danger">No Lab</span>)
            }
        }else{
            if(props.value == 1){
                return (<span class="badge badge-success">Lecture</span>)
            }else{
                return (<span class="badge badge-danger">No Lecture</span>)
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
        <div style={{ position: 'absolute', top: '1em',left: '10em' ,width: '80em'}}>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
            <h5 class="card-header">Courses</h5>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover first">
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Course Code</th>
                                <th>Course Year</th>
                                <th>Course Type</th>
                                <th>Course Credit Hour</th>
                                <th>Lab</th>
                                <th>Lecture</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Info</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                                {courses && 
                                   
                                courses.map((course)=>{
                                    return (
                                        <tr>
                                            <td style={{maxWidth:'10em'}}>{_.toUpper(course.course_title)}</td>
                                            <td style={{maxWidth:'5em'}}>{_.toUpper(course.course_code)}</td>
                                            <td><span style={{padding: '1em 2em',fontSize: '.9em'}} class="badge badge-light">{Year[course.year]}</span></td>
                                            <td><CourseTyper type={course.course_type} /></td>
                                            <td>{course.course_credit_hour}</td>
                                            <td> <Has type="lab" value={course.course_has_lab} /> </td>
                                            <td><Has type="lecture" value={course.course_has_lecture}/> </td>
                                            <td><button className="btn btn-warning">Edit</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                            <td><button className="btn btn-info">More</button></td>
                                            
                                    </tr>
                                    )
                                })

                                }

                                {courses &&
                                   
                                    courses.length == 0 ?

                                    <tr>
                                            <td colSpan="4">No Data Yet</td>
                                               
                                    </tr> : ''

                                }
                        
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
        
        
        </div>
    )
}

export default Courses