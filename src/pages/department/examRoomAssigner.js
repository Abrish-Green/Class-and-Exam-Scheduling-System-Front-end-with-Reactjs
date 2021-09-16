import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './layout'


const ExamRoomAssigner = ()=>{

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

        //console.log(examSection)
       
    }, [loadSection,loadCourse])


   
    const GetAddedRooms = async ()=>{

        await axios({
            method: 'post',
            url: '/department/get/exam/room/',
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

        await axios({
            method: 'post',
            url: '/department/create/exam/room',
            data: {
                'department_id': department_id, 
                'room' : tempRoom,
                'block' : tempBlock,
                'year' : year,
                
            }
          }).then((response)=>{
              console.log(response.data)  
          });
          GetAddedRooms()

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
                                    <span className=""></span>{props.section[0].year && Year[props.section[0].year]}
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
                                                    <h5 className="card-header" for="val-credit-hour">Add Exam Room
                                                    </h5> 
                                                
                                                    <div className="col-lg-12">
                                                   
                                                    <input style={{ display:'none' }} name="year" value={props.section[0].year}/>
                                                    <input style={{display: 'none'}} name="department_id" value={department_id}/>
                                                    <select className="form-control" value={tempBlock} id="val-has-lab" name="block" onChange={(e)=>{e.preventDefault();setTempBlock(e.target.value)}}>
                                                        
                                                   
                                                   
                                                    {
                                                        fixedBlock && 
                                                    
                                                        fixedBlock.map((block)=>{
                                                            return <option key={block} value={block}>{block}</option>
                                                        })
                                                    }
                                                        
                                                        
                                                       
                                                       
                                                    </select>

                                                    <select className="form-control" value={tempRoom} id="val-has-lab" name="room" onChange={(e)=>{e.preventDefault();setTempRoom(e.target.value)}}>
                                                    
                                                        
                    
                                                        {
                                                            fixedRoom &&

                                                            fixedRoom.map((room)=>{
                                                                return <option key={room} value={room}>{room}</option>
                                                            })
                                                        }
                                                       
                                                    </select>
                                                   
                
                                                </div>
                                                        <button type="" onClick={(e)=>{e.preventDefault();AddRooms(props.section[0].year)}} style={{ float:'left',marginTop:'1em' }} className="btn btn-warning">
                                                            Add to Room 
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
                    <h3>Exam Room Assigner</h3>
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


export default ExamRoomAssigner