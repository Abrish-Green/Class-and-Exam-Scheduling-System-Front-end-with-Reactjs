import React from 'react'
import { Link } from 'react-router-dom'
import RoomDisplay from './RoomDisplay'



const Room = (props)=>{



    return (
    <div>
        <div class="accrodion-regular">
            <form>
                <div id="accordion3">
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                            <button onClick={(e)=>e.preventDefault()} class="btn btn-link collapsed" data-toggle="collapse" data-target={'#'+props.collapse} aria-expanded="false" aria-controls="collapseSeven">
                                <span class="fas mr-3 fa-angle-down"></span>Block {props.block.block_name}
                            </button>
                            </h5>
                        </div>
                    <div id={props.collapse} class="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                    <div class="card">
                        
                    <h2 class="card-header">Select Your Given Rooms</h2>
                    <div class="card-body">
                        <form id="form" data-parsley-validate="">
        
                        <RoomDisplay room={props.room} />
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