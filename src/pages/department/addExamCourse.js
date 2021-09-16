import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './layout'


const AddExamCourse = ()=>{

    const[department_id,setDepartmentID] = useState()
    const[user,setUser] = useState()
    const[courses,setCourses] = useState([])
    const[loadCourse,setLoadCourse] = useState(false)
    const[loadSection,setLoadSection] = useState(false)
    const[loading,setLoading] = useState(true);
    const[fixedYear,setFixedYear] = useState([1,2,3,4,5,6])
    const[examSection,setExamSection] = useState([])
    const[addedToExamCourses,setAddedToExamCourses] = useState()
    

    useEffect(() => {
        (
            async ()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                   // console.log(response.data.department_id)
                    setUser(response.data)
                    setDepartmentID(response.data.department_id)
                    //console.log(response.data)
                })
            }
        )();

        GetMyCourse()
        GetMySections()

        GetAddedCourses()
        //console.log(examSection)
       
    }, [loadCourse,loadSection])


    const GetAddedCourses = async()=>{
        
        await axios({
            'method': 'post',
            'url': 'department/get/exam/courses/',
            data:{
                'department_id':department_id
            },
            headers:{
                'Authorization': localStorage.getItem('d_auth')
            }
        }
            ).then((response)=>{
                console.log(response.data.exam_course)
                setAddedToExamCourses(response.data.exam_course)
                setLoadCourse(true)
            })


    }


    const GetMyCourse = async ()=>{

        await axios({
            'method': 'post',
            'url': 'department/courses',
            data:{
                'department_id':department_id
            },
            headers:{
                'Authorization': localStorage.getItem('d_auth')
            }
        }
            ).then((response)=>{
                console.log(response.data)
                setCourses(response.data.courses)
                setLoadCourse(true)
                setLoading(false)
            })



    }

    const GetMySections = async ()=>{

        await axios({
            'method': 'post',
            'url': 'department/get/exam/sections',
            data:{
                'department_id':department_id
            },
            headers:{
                'Authorization': localStorage.getItem('d_auth')
            }
        }).then((response)=>{
                console.log(response.data)
                
                try{
                var allSection = [];
                var eachSection = []
                for(var i=1;i<=fixedYear.length;i++){
                    eachSection = []

                    try{
                        response.data.sections.map((section)=>{
                            if(section.year == i){
                                eachSection.push(section)
                            }
                        })
                    }catch(e){
                        console.log(e)
                    }
                    

                    if(eachSection.length != 0){
                        allSection.push(eachSection)  
                    }
                        
                }
                setExamSection(allSection)
                
               // setExamSection(response.data.courses)
                setLoadSection(true)

                }catch(e){
                    console.log(e)
                }

    });
    
}

const DisplayAllYears = (props)=>{

    const Year = [null,'First Year (Fresh)','Second Year','Third Year','Fourth Year','Fifth Year','Sixth Year']
    const [realYear, setRealYear] = useState()
    
    const AddToExam =async (e,course,section)=>{

        e.preventDefault()
        e.target.value = 'Added'
        e.target.style.background = 'green'
        e.target.style.color = 'white';

         await axios({
            method: 'post',
            url: '/department/create/exam/course/',
            data: {
                'course_id' : course.id,
                'department_id' : course.department_id,
                'course_year' : course.year,
                'semester' : section.semester,
            }
          }).then((response)=>{
              console.log(response)
          });




    }


    console.log()
    return (
        <div>
            
            <div className="accrodion-regular">
                <form>
                    <div id="accordion3">
                        <div className="card">
                            <div className="card-header" id="headingSeven">
                                <h5 className="mb-0">
                                <button onClick={(e)=>e.preventDefault()} className="btn btn-link collapsed" data-toggle="collapse" data-target={props.section[0].year &&'#col-'+props.section[0].year} aria-expanded="false" aria-controls="collapseSeven">
                                    <span className="fas mr-3 fa-angle-down"></span>{props.section[0].year && Year[props.section[0].year]}
                                </button>
                               
                                </h5>
                                
                            </div>
                           
                        <div id={props.section[0].year && 'col-'+props.section[0].year} className="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                        <div className="card">
                            
                      
                        <div className="card-body">
                            <form id="form" data-parsley-validate="">
                                
                            <div>
                            <div className="">
                                            <div className="card">
                                                <h5 className="card-header"></h5>
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                       
                                               
                                                {(props.course && props.section[0].year) &&
                                                    
                                                        courses.filter((course)=> course.year == props.section[0].year).map((course)=>{
                                                            return <li className="list-group-item " key={course.id}>{course.course_title}
                                                            
                                                             
                                                            <button onClick={(e)=>{AddToExam(e,course,props.section[0])}} style={{ float:'right' }} className="btn btn-warning">
                                                                Add to Exam 
                                                            </button>
                                                            </li>
                                                        })
                                                    

                                                }
                                            
                                               
                                              
                                                  

                                                       
                                                    </ul>
                                            </div>
                                    </div>
                             </div>
                        </div>
                                

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   </form>
 </div>
</div>
    )
}






    return(
        <div>
            {Layout && <Layout />}

            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'10em',marginLeft: '20em',width:'100em' }}>


            {loading 
            &&
            <div className="card">
            <div className="card-header">
                <h6 style={{ textAlign:'center' }}>Loading....</h6>
            </div>
        </div> 
            }
            <div className="card">
                <div className="card-header">
                    <h3>Exam Course</h3>
                </div>
            </div>

            {examSection &&

                examSection.map((section)=>{

                    return <DisplayAllYears section={section} course={courses} />
                })

            }
        
        </div>
        </div>
    )
}

export default AddExamCourse;