import React, { useState } from 'react'

const RoomDisplay = (props)=>{

        const [liColor, setLiColor] = useState('')
        const [borderColor, setBorderColor] = useState('darkgray')
        const [selectedRoom,setSelectedRoom] = useState()
        const tempRoom = []

        console.log(selectedRoom)

        
       
       
       
       
        return(
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
        )
    }


    export default RoomDisplay;
