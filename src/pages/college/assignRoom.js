import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RoomDisplay from './RoomDisplay'



const Room = (props)=>{

    const [liColor, setLiColor] = useState('')
        const [borderColor, setBorderColor] = useState('darkgray')
        const [selectedRoom,setSelectedRoom] = useState()
        const tempRoom = []
     
    return (
    <div>
        <div class="accrodion-regular">
            <form>
                <div id="accordion3">
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                            <button onClick={(e)=>e.preventDefault()} class="btn btn-link collapsed" data-toggle="collapse" data-target={'#col-'+props.collapse} aria-expanded="false" aria-controls="collapseSeven">
                                <span class="fas mr-3 fa-angle-down"></span>Block {props.block.block_name}
                            </button>
                            </h5>
                        </div>
                    <div id={'col-'+props.collapse} class="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                    <div class="card">
                        
                    <h2 class="card-header">Select Your Given Rooms</h2>
                    <div class="card-body">
                        <form id="form" data-parsley-validate="">
        
                        <div class="card" style={{ marginTop: '3em' }}>
                        <h5 class="card-header">Room : </h5>
                        <div class="card-body">
                            <ul class="list-group" style={{ height: '36vh',overflowY: 'scroll' }}>
                               
                                {
                                    props.room.map((room)=>{
                                        return  <li style={{border: `1px solid ${borderColor}`}} className="list-group-item" onClick={(e)=>{
                                                    e.target.style.background = 'paleturquoise';
                                                    e.target.style.border = '1px solid #654';
                                                
                                                    if(tempRoom.indexOf(e.target.innerHTML) !== -1){
                                                       
                                                        e.target.style.background = 'white';
                                                        var i = tempRoom.indexOf(e.target.innerHTML);
                                                        if(i >= 0) {
                                                            tempRoom.splice(i,1);
                                                         }

                                                    } else{
                                                       
                                                        tempRoom.push(e.target.innerHTML)
                                                    }
                                                  
                                                

                                                    console.log(tempRoom)
                                                    
                                                    //console.log('selected room include',tempRoom)
                                        }}>{room}</li>
                                    })
                                }
                           
                               
                            </ul>
                    </div>
            </div>
                            <div class="col-sm-6 pl-0">
                            <p class="text-center">
                                <button type="submit" style={{width: '15em'}} onClick={(e)=>{e.preventDefault()}} class="btn btn-space btn-success">Use Rooms</button>
                           
                            </p>
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


export default Room