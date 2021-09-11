import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from './layout'
const ExamRoomAssigner = ()=>{

    const[Room, setRoom] = useState([]);
    const[myBlocks,setMyBlocks] = useState([])
    const[department_id,setDepartmentID] = useState()
    const[college_id,setCollegeID] = useState()
    const[isUpdated,setIsUpdated] = useState(false)

    
    const GenerateRoom = () =>{
        const rooms = [];
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
        setRoom(rooms)
    }

    const RoomDisplay = (props)=>{

        const [liColor, setLiColor] = useState('')
        const [borderColor, setBorderColor] = useState('darkgray')
        const [selectedRoom,setSelectedRoom] = useState()
        const [room_id,setRoomID] = useState()
        const [block_id,setBlockID] = useState()

        const tempRoom = []


        const UseRoomForDepartment = async(e)=>{
            e.preventDefault()
            
            try{

              
                 await axios({
                    method: '',
                    url: '',
                    data:{
                        'room_id' : room_id,
                        'block_id': block_id,
                        'department_id': department_id
                    }
                }).then((response)=>{
                    console.log(response.data)
                    //setMyBlocks(response.data.block)
                    //setIsUpdated(true)
                    
            }); 
            }catch(e){
                
            }



        }

        return(
            <div class="card" style={{ marginTop: '3em' }}>
                        <h5 class="card-header">Room : </h5>
                        <div class="card-body">
                            <ul class="list-group" style={{ height: '36vh',overflowY: 'scroll' }}>
                               
                                {
                                    props.room.map((room)=>{
                                        return  <li style={{border: `1px solid ${borderColor}`}} className="list-group-item" onClick={(e)=>{}}>
                                        {room}
                                        <button style={{ float:'right' }}  onClick={(e)=>{UseRoomForDepartment(e);}} className="btn btn-warning">Add Room</button></li>
                                    })
                                }
                           
                               
                            </ul>
                    </div>
            </div>
        )
    }
    const GetMyBlock = async ()=>{
        try{

            //const response = await axios.get('/college/current').then((res)=>res);
            //console.log(response)
             await axios({
                method: 'post',
                url: '/college/get/block',
                data:{
                    'college_id' : college_id
                }
            }).then((response)=>{
                console.log(response.data)
                setMyBlocks(response.data.block)
                setIsUpdated(true)
                
        }); 
        }catch(e){
            
        }
    }

   
    useEffect(() => {

       
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    console.log(response.data.id)
                    setDepartmentID(response.data.id)
                    setCollegeID(response.data.college_id)
                    console.log('college_id',college_id)
                })
            }
        )();
        GenerateRoom()
        GetMyBlock()
        console.log((Room));
    }, [isUpdated])


    

    return (
        <div>

            {Layout && <Layout />}


         
            
                <div style={{  position: 'absolute',left: '20em',top: '8em', width: '60em', }}>
                    <div className="accrodion-regular" style={{ width: '60em', }}>
                    <h2 className="card card-header"> Exam Room Assigner</h2>
                    <form>


                    {myBlocks &&

                        myBlocks.map((block)=>{
                           
                    return(
                                

                        <div id="accordion3">
                        <div className="card">
                            <div className="card-header" id="headingSeven">
                                <h5 className="mb-0">Block {block.block_name}
                                <button onClick={(e)=>e.preventDefault()} className="btn btn-link collapsed" data-toggle="collapse" data-target={'#col-'+block.block_name} aria-expanded="false" aria-controls="collapseSeven">
                                    <span className="fas mr-3 fa-angle-down"></span>
                                </button>
                            
                                </h5>
                               
                            </div>
                        
                        <div id={'col-'+block.block_name} className="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                        <div className="card">
                            
                    
                        <div className="card-body">
                            <form id="form" data-parsley-validate="">
                                
                            <div>
                            <div className="">
                                            <div className="card">
                                                <h5 className="card-header"></h5>
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                    
                                                   
                                                     {RoomDisplay && <RoomDisplay block={block} room={Room} />}
                                                            
                                                    
                                                    
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
                            )

                        })

                    }

            </form>
            </div>        </div>
    
            </div>

            )

}

export default ExamRoomAssigner