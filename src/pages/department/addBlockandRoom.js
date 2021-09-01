import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import AddCourse from '../department/addDepartmentCourse'

import { Link, useHistory } from 'react-router-dom'
var _ = require('lodash');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('c_auth');



const Success = (props)=>{
    return(
        <div className="alert alert-success  alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
const Sending = (props)=>{
    return(
        <div className="alert alert-info  alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
        </div>
    )
}



const AddBlockandRoom = (props) => {

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

    const RoomDisplay = (props)=>{

        const [liColor, setLiColor] = useState('')
        const [borderColor, setBorderColor] = useState('darkgray')
        const [selectedRoom,setSelectedRoom] = useState()
        const tempRoom = []
        return(
            <div class="card" style={{ marginTop: '3em' }}>
                        <h5 class="card-header">Room : </h5>
                        <div class="card-body">
                            <ul class="list-group" style={{ height: '36vh',overflowY: 'scroll' }}>
                               
                                {
                                    props.room.map((room)=>{
                                        return  <li style={{border: `1px solid ${borderColor}`}} className="list-group-item" onClick={(e)=>{
                                                    e.target.style.background = 'darkseagreen';
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



    useEffect(() => {
        GenerateRoom()
        console.log((Room));
    }, [])

    
    return(
        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'2em',marginLeft: '20em', }}>
        <div class="section-block">
            <h2 class="section-title">Class Schedule</h2>
        </div>
        <div class="tab-outline">
            <ul class="nav nav-tabs" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Block and Room</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="profile" aria-selected="false">Course</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-three" data-toggle="tab" href="#outline-three" role="tab" aria-controls="contact" aria-selected="false">Assign Instructor</a>
                </li>
                
            </ul>
            <div class="tab-content" id="myTabContent2">
                <div class="tab-pane fade active show" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">


     <div class="card">
            <div class="alert alert-warning alert-dismissible fade show">
                <button type="button" class="close h-100" data-dismiss="alert" aria-label="Close"><span><i class="mdi mdi-close"></i></span>
                </button>
                  <strong>Remember! </strong> 
                Please Insert a College Number Which is given to this specific college only
            </div>
                <h5 class="card-header">Add Block</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                   
                   

                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                                <input id="inputEmail2" type="text" required  placeholder="Block" class="form-control" />
                            </div>
                               
            
                        </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" style={{width: '15em'}} class="btn btn-space btn-success">Save</button>
                            <Link to="" style={{width: '15em'}} class="btn btn-space btn-danger">Cancel</Link>
                        </p>
                    </div>
                    </form>
                </div>
            </div>



            

    <div class="card">
     <div class="alert alert-warning alert-dismissible fade show">
         <button type="button" class="close h-100" data-dismiss="alert" aria-label="Close"><span><i class="mdi mdi-close"></i></span>
         </button>
           <strong>Remember! </strong> 
         Please Insert a College Number Which is given to this specific college only
     </div>
         <h5 class="card-header">Add Block</h5>
         <div class="card-body">
             <form id="form" data-parsley-validate="">

             <RoomDisplay room={Room} />
                 <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                 <p class="text-center">
                     <button type="submit" style={{width: '15em'}} class="btn btn-space btn-success">Save</button>
                     <Link to="" style={{width: '15em'}} class="btn btn-space btn-danger">Cancel</Link>
                 </p>
             </div>
             </form>
         </div>
     </div>







        
           

                        
            </div>
                <div class="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">
                   
                    <AddCourse />
                
                
                </div>
                <div class="tab-pane fade" id="outline-three" role="tabpanel" aria-labelledby="tab-outline-three">

                        
                
                </div>
            </div>
        </div>
    </div>    )
}



export default AddBlockandRoom
