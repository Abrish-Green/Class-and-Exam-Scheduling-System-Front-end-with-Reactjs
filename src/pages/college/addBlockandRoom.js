import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import RoomTab from './assignRoom'
import AssignRoomToDepartment from './assignRoomToDepartment'
import { Link, useHistory } from 'react-router-dom'
import Layout from './layout'
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
    const[Block, setBlock] = useState([]);
    const[department_id,setDepartment_id]  = useState('')
    const[college_id,setCollege_id] = useState()
    const[myDepartments,setMyDepartments] = useState()
    const[myBlock,setMyBlock] = useState([])
    const[update,setUpdate] = useState(false)
    const[block_id,setBlock_id] = useState('')
    const[block_name,setBlockName] = useState('')
    const[blockOwner,setBlockOwner] = useState()
    const[user,setUser] = useState(null)
    const[selectedBlocks,setSelectedBlocks] = useState([])
    const[blockInfo,setBlockInfo] = useState()


    const [liColor, setLiColor] = useState('')
    const [borderColor, setBorderColor] = useState('darkgray')
    const [selectedRooms,setSelectedRooms] = useState([])
    const tempRoom = []
    
    //const block = [57,58]
    
    const SelectBlockDropdown = (props)=>{
        
        return(
                <option value={props.block.block_name}>{props.block.block_name}</option>
        )
    }

    const SelectedBlocks = (props)=>{
        const selectedBlock = []
       
        
        return(
            <tr>
                <td>
                        Block
                </td>
                <td>
                        {props.block.block_name}    
                </td>
                <td>
                        <button to="" onClick={()=>{}} className="btn btn-warning">Edit</button>
                </td>
                <td>
                        <button to="" onClick={()=>{}} className="btn btn-danger">Remove</button>
                </td>
            </tr>
        )
    }

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

    const GetAllBlock = async ()=>{
        try{
            
             await axios({
                method: 'get',
                url: '/registrar/get/blocks'
            }).then((response)=>{
                //console.log(response.data.block)
                
                setBlock(response.data.block)
              
                
        }); 
        }catch(e){
            //this.setState({Block:null})
        }
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
                
               setMyBlock(response.data.block)
              
                
        }); 
        }catch(e){
            setMyBlock(null)
        }
    }

    const GetMyDepartment = async ()=>{
    
        try{

            const response = await axios.get('/college/current').then((res)=>setCollege_id(res.data.id));
            //console.log(response)
                
             await axios({
                method: 'get',
                url: `/college/${college_id}/departments/`
            }).then((response)=>{
               // console.log(response.data.block)
               setMyDepartments(response.data.department)
              
                
        }); 
        }catch(e){
            //setMyDepartments(null)
        }
        setUpdate(true)
    }

    const UseBlock = async()=>{
        
        try{

           // const response = await axios.get('/college/current').then((res)=>res);
            //console.log(response.data)
             await axios({
                method: 'post',
                url: '/college/use/block/',
                data:{
                    'block_name': block_name,
                    'block_id': block_id,
                    'college_id' : user.college_id
                }
            }).then((response)=>{
               response.data.map((data)=>{
                  // console.log('data',data)
               })
                
               //setMyBlock(response.data.block)
              
                
        }); 
        }catch(e){
           // setMyBlock(null)
        }


    }

    const UsedBlocks = async ()=>{

        try{

            // const response = await axios.get('/college/current').then((res)=>res);
             //console.log(response.data)
              await axios({
                 method: 'post',
                 url: '/college/used/block/',
                 data:{
                     'block_id': block_id,
                     'college_id' : user.college_id
                 }
             }).then((response)=>{
                 console.log(response.data.college_block)
                 
                setMyBlock(response.data.college_block)
               
                 
         }); 
         }catch(e){
            // setMyBlock(null)
         }
 
 



    }
 
    const SelectBlockOwner = (e)=>{
        e.preventDefault();

      
        if(blockOwner != e.target.textContent.split(' ')[1] || blockOwner == 'undefined' ){
            setSelectedRooms([])
            setBlockOwner(e.target.textContent.split(' ')[1])
            console.log('block-owner',blockOwner)
        }
        
    }

    const MultipleSelectRooms = (e)=>{
        e.preventDefault()
         
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
        
       
        return tempRoom
    }
    const UseRoom = async()=>{

        await axios({
            method: 'post',
            url: '',
            data:{
                
            }
        })








    }
    

    useEffect(() => {
       
        (
            async()=>{
                await axios(
                    {
                        method: 'get',
                        'url':  '/college/current',
                        headers:{
                            'Authorization' : localStorage.getItem('c_auth') 
                        }
                    }
                  ).then((res)=>setUser(res.data));
                  await axios(
                    {
                        method: 'get',
                        'url':  '/college/current',
                        headers:{
                            'Authorization' : localStorage.getItem('c_auth') 
                        }
                    }
                  ).then((res)=>setUser(res.data));
            }
        )();

       
        GetAllBlock()
        GetMyBlock()
        GenerateRoom()
        GetMyDepartment()
        UsedBlocks()
      
       
    }, [update])

    
    return(
        <div>

        {Layout && <Layout />}
        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'8em',marginLeft: '20em', }}>
        <div class="section-block">
            <h2 class="section-title">Block and Room </h2>
        </div>
        <div class="tab-outline">
            <ul class="nav nav-tabs" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Block </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="profile" aria-selected="false">Room</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-three" data-toggle="tab" href="#outline-three" role="tab" aria-controls="contact" aria-selected="false">Assign Room to Department</a>
                </li>
                
            </ul>
            <div class="tab-content" id="myTabContent2">
                <div class="tab-pane fade active show" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">


     <div class="card">
            
                <h5 class="card-header">Select Blocks for This College</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                   
                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                            <p className="">Please Select your block to assign Room for each and every Department under this college from the Menu below.</p>
                            Block :
                            <select onChange={(e)=> {}} class="form-select form-control" placeholder="Select Your Block" aria-label="Default select example">

                            <option selected> Available Blocks</option>
                               
                            { Block &&
                                Block.map((block)=>{
                                   return <option onClick={(e)=>{setBlock_id(block.id);setBlockName(block.block_name)}} key={block.id} value={block.block_name}>{block.block_name}</option>
                                    
                                })
                            }

                                
                          </select>


                            </div>
                               
            
                        </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" onClick={(e)=>{e.preventDefault();UseBlock()}} style={{float:'left',width: '10em'}} class="btn btn-space btn-success">Use Block</button>
                            
                        </p>


                        
                      </div>
                    </form>
                </div>
            
            </div>            
            </div>
                <div class="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">
                      <p style={{padding:'1em'}} className="card">Please Select Rooms from each block which are assigned to this college only.This selection help you to give Specific Rooms to Departments in the next Tab.</p>
                        
                        
                      
                    { myBlock &&
                        myBlock.map((block)=>{
                            return (
                                <div key={block.id}>
                                <div class="accrodion-regular">
                        <form>
                            <div id="accordion3">
                                <div class="card">
                                    <div class="card-header" id="headingSeven">
                                        <h5 class="mb-0">
                                        <button onClick={(e)=>{SelectBlockOwner(e)}} class="btn btn-link collapsed" data-toggle="collapse" data-target={'#col-'+block.id} aria-expanded="false" aria-controls="collapseSeven">
                                            <span class="fas mr-3 fa-angle-down"></span>Block {block.block_name}
                                        </button>
                                        </h5>
                                    </div>
                                <div id={'col-'+block.id} class="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                                <div class="card">
                                    
                                <h2 class="card-header">Select Your Given Rooms</h2>
                                <div class="card-body">
                                    <form id="form" data-parsley-validate="">
                    
                                    <div class="card" style={{ marginTop: '3em' }}>
                                    <h5 class="card-header">Room : </h5>
                                    <div class="card-body">
                                        <ul class="list-group" style={{ height: '36vh',overflowY: 'scroll' }}>
                                        
                                            {
                                                Room.map((room)=>{
                                                    return  <li style={{border: `1px solid ${borderColor}`}} className="list-group-item" onClick={(e)=>{MultipleSelectRooms(e)}}>{room}</li>
                                                    
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
                        })
                    } 
                      
                      
                        
                              
            
                </div>
                
             
                <div class="tab-pane fade" id="outline-three" role="tabpanel" aria-labelledby="tab-outline-three">


                     <p style={{padding:'1em'}} className="card">Please Assign Rooms to each Department which legible to this college only.</p>

                            {myDepartments &&

                                myDepartments.map((department)=>{
                                    return <AssignRoomToDepartment department={department} collapse={'col-'+department.id}/>
                                })

                            }
                </div>
            </div>
        </div>
    </div>
</div>
    )
}



export default AddBlockandRoom
