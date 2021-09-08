import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Courses = ()=>{
    const[department_id,setDepartmentID] = useState()
    const[courses,setcourses] = useState()

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


    return (
        <div style={{ position: 'absolute', top: '1em',left: '20em' ,width: '50em'}}>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
            <h5 class="card-header">Courses</h5>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered first">
                        <thead>
                            <tr>
                                <th style={{ paddingLeft: '5em',paddingRight: '5em' }}>Name</th>
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
                                            <td>{course.name}</td>
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