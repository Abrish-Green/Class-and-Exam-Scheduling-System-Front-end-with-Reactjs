import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './layout'


const InstructorAssigner = ()=>{

    const[department_id,setDepartmentID] = useState()
    const[user,setUser] = useState()
    const[courses,setCourses] = useState([])
    const[addRooms,setAddedRooms] = useState([])
    const[loadCourse,setLoadCourse] = useState(false)
    const[loadSection,setLoadSection] = useState(false)
    const[loading,setLoading] = useState(true);
    const[fixedYear,setFixedYear] = useState([1,2,3,4,5,6])
    const[examSection,setExamSection] = useState([])
    const[addedToExamCourses,setAddedToExamCourses] = useState()
    const[tempBlock,setTempBlock] = useState('')
    const[tempRoom,setTempRoom] = useState('')
    const[fixedBlock,setFixedBlock] = useState([])
    const[fixedRoom,setFixedRoom] = useState([])
    const[yearCourse,setYearCourse] = useState([])
    const[year,setYear] = useState()
    const[instructors,setMyInstructors] = useState([])

    const[Icourse,setICourse] = useState([])
    const[course,setCourse] = useState([])
    
    const[Iinstructor,setIinstrutor] = useState([])
    const[instructor,setinstrutor] = useState([])
    
    const[Isemester,setSemester] = useState();
    


    
    const GenerateRoom = () =>{
        const rooms = [];
        const block = [];

        for(var i=1;i<=10;i++){
            rooms.push(i+100)
        }
        for(var i=1;i<=10;i++){
            rooms.push(i+200)
        }
        for(var i=1;i<=10;i++){
            rooms.push(i+300)
        }
        for(var i=1;i<=10;i++){
            rooms.push(i+400)
        }
        
        setFixedRoom(rooms)

        for(var i=40;i<=100;i++){
            block.push(i)
        }
        setFixedBlock(block);

    }

    

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

        GenerateRoom()
        GetMySections()
        GetAddedRooms()
        LoadYearCourse(year)
        LoadInstructors()

        //console.log(examSection)
       
    }, [loadSection,loadCourse,year])


   
    const GetAddedRooms = async ()=>{

        await axios({
            method: 'post',
            url: '/department/get/assigned/class/instructor',
            data: {
                'department_id' : department_id,
            }
          }).then((response)=>{
              console.log(response)
              setCourses(response.data.room);
              setLoadCourse(true)
          });
    }



    const AddRooms = async (year)=>{

        try{
            console.log();
        await axios({
            method: 'post',
            url: '/department/assign/class/instructor',
            data: {
                'department_id': department_id, 
                'instructor_id' : instructor.id,
                'instructor_name' : instructor.name,
                'year' : year,
                'semester' : 1,
                'course_id': course.id
                
            }
          }).then((response)=>{
              console.log(response.data)  
          });
          GetAddedRooms()

        }catch(e){

        }
        
    }


    const LoadYearCourse = async (yearCourse)=>{

        try{
        await axios({
            method: 'post',
            url: '/department/courses/year',
            data: {
                'department_id': department_id,     
                'year': yearCourse
            }
          }).then((response)=>{
              console.log(response.data) 
              setYearCourse(response.data.courses) 
          });
          GetAddedRooms()
        }catch(e){
            console.log(e)
        }

    }
    const LoadInstructors = async ()=>{

        try{
        await axios({
            method: 'post',
            url: `/department/get/department/instructor/${department_id}`,
          }).then((response)=>{
              console.log(response.data) 
              setMyInstructors(response.data.instructors) 
          });
          GetAddedRooms()
        }catch(e){
            console.log(e)
        }

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


    
    return (
        <div>
            
            <div className="accrodion-regular">
                <form>
                    <div id="accordion3">
                        <div className="card">
                            <div className="card-header" >
                                <h5 className="mb-0">
                                <button onClick={(e)=>e.preventDefault()} className="btn btn-link" >
                                    <span className=""></span>{props.section[0].year && Year[props.section[0].year]} Courses
                                </button>
                               
                                </h5>
                                
                            </div>
                           
                        <div >
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
                                                            return <li className="list-group-item " key={course.id}>B{course.block} - R{course.room}
                                                            
                                                             
                                                            <button onClick={(e)=>{e.preventDefault()}} style={{ float:'right' }} className="btn btn-success">
                                                                Room Added
                                                            </button>
                                                            </li>
                                                        })
                                                    

                                                }

                                                {props.course && (props.course.length == 0)
                                                    &&
                                                    <h5>No Data Yet...</h5>

                                                }


                                                       
                                                    </ul>

                                                <div>
                                                
                                                   
                                                    
                                                    <div className="form-group row">
                                                    
                                                    <div className="col-lg-12" style={{ padding: '1em', border: '1px solid lightblue',boxShadow: '5px 10px #82238' }}>
                                                    <h5 className="card-header" for="val-credit-hour">Add
                                                    </h5> 
                                                
                                                    <div className="col-lg-12">
                                                   
                                                    <input style={{ display:'none' }} name="year" value={props.section[0].year}/>
                                                    <input style={{display: 'none'}} name="department_id" value={department_id}/>
                                                    <button type="" onClick={(e)=>{e.preventDefault();setYear(props.section[0].year)}} style={{ float:'left',margin:'1em' ,}} className="btn btn-warning">
                                                            refresh Course 
                                                        </button>
                                                    <select className="form-control" value={Icourse} id="val-has-lab" name="block" >
                                                        
                                                   
                                                    
                                                    {
                                                        yearCourse && 
                                                    
                                                        yearCourse.map((course)=>{
                                                            return <option key={course.id} onChange={(e)=>{setICourse(e.target.value);setCourse(course)}} value={course}>{course.course_title}</option>
                                                        })
                                                    }
                                                        
                                                        
                                                       
                                                       
                                                    </select>

                                                    <select className="form-control" value={Iinstructor } id="val-has-lab" name="room">
                                                    
                                                    
        
                                                        {
                                                            instructors &&

                                                            instructors.map((instructor)=>{
                                                                return <option key={instructor.id}  onChange={(e)=>{setIinstrutor(e.target.value);setinstrutor(instructor)}} value={instructor}>{instructor.name}</option>
                                                            })
                                                        }
                                                       
                                                    </select>
                                                   
                
                                                </div>
                                                        <button type="" onClick={(e)=>{e.preventDefault();AddRooms(props.section[0].year)}} style={{ float:'left',marginTop:'1em' }} className="btn btn-warning">
                                                            Add Instructor 
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                    
                                                    
                                                    
                                                   
                                                
                                                
                                                </div>
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

            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'10em',marginLeft: '20em',width:'100em' }}>


            
            <div className="card">
                <div className="card-header">
                    <h3>Class Instructor Assigner</h3>
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


export default InstructorAssigner