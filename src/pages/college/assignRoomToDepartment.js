import React, { Component, useEffect, useState } from 'react'
import RoomDisplay from './RoomDisplay'



const AssignRoomToDepartment = (props)=>{


    const[Room, setRoom] = useState([]);

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
    useEffect(() => {
        
        GenerateRoom()
        return () => {
            
        }
    }, [])

   
        

    return (

        <div>
            <form>   
                <div class="accrodion-regular">
                        <div id="accordion">
    
                            <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" onClick={(e)=>e.preventDefault()} data-toggle="collapse" data-target={'#'+props.collapse} aria-expanded="false" aria-controls="collapseOne">
                                        <span class="fas mr-3 fa-angle-down"></span> {props.department.name}
                                        </button>
                                        </h5>
                                    </div>


                                    <div id={props.collapse} class="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
                                        <div class="card-body">
                                    <p>Please Choice a Block to Assign Room for this Department. </p>
                                        <select class="form-select form-control" placeholder="Select Your Block" aria-label="Default select example">
                                            <option value="1">57</option>
                                            <option value="2">58</option>
                                            <option value="3">59</option>
                                         </select>

                                         <RoomDisplay room={Room}/>


                                         <button style={{margin:'2em',width:'10em',float:'right'}}class="btn btn-rounded btn-success">Save</button>

                                        </div>
                                    </div>
                                </div>
                                
                            
                </div>
            </div>
        </form>
                
    </div>
    )
    
}


export default AssignRoomToDepartment;