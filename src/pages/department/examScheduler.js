import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ExamScheduler = ()=>{

    const[department_id,setDepartmentID] = useState()



    const GetAllCourse = async ()=>{
        await axios({
            'method': 'post',
            'url': 'department/courses',
            data:{
                'course_department_id':department_id
            }}).then((response)=>{
                console.log(response.data)
            })

    }
    const GetAllRoom = ()=>{
        
    }
    const GetInvigilators = ()=>{

    }
    const GetAllSection = ()=>{

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
        
        GetAllCourse();
           
    }, [])




    return (
        <div>

            <h1>
                Course
            </h1>

        
        </div>

    )
}

export default ExamScheduler