import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import RoomTab from './assignRoom'
import AssignRoomToDepartment from './assignRoomToDepartment'
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
    const[Block, setBlock] = useState([]);
    const[department_id,setDepartment_id]  = useState('')
    const[college_id,setCollege_id] = useState()
    const[myDepartments,setMyDepartments] = useState()
    const[myBlock,setMyBlock] = useState([])
    const[update,setUpdate] = useState(false)
    const[block_id,setBlock_id] = useState('')
    const[user,setUser] = useState(null)

    //const block = [57,58]
    
    const SelectBlockDropdown = (props)=>{
        
        return(
                <option value={props.block.block_name}>{props.block.block_name}</option>
        )
    }

    const SelectedBlocks = (props)=>{

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
                console.log(response.data.block)
                
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
                url: '/college/get/block/',
                data:{
                    'college_id' : college_id
                }
            }).then((response)=>{
               // console.log(response.data.block)
                
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
 
    useEffect(() => {
       
        (
            async()=>{
                const response = await axios(
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

        GetMyDepartment()
        GetAllBlock()
        GetMyBlock()
        GenerateRoom()

        UsedBlocks()
       
        //setBlock(block)
        console.log((Block));
    }, [update])

    
    return(
        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'2em',marginLeft: '20em', }}>
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
                                   return <option onClick={(e)=>setBlock_id(block.id)} key={block.id} value={block.block_name}>{block.block_name}</option>
                                    
                                })
                            }

                          
                           

                                <div class="input-group mb-3">
                                                <input type="text" class="form-control" />
                                                <div class="input-group-append">
                                                    <button type="button" class="btn btn-primary">Go!</button>
                                                </div>
                                </div>
                                
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
            


            <div class="card" style={{ width: '580px' }}>
            <h5 class="card-header">Selected Blocks for this College</h5>
            <div class="card-body">
                <ul class="list-group">
                    <table className="table table-border table-striped table-hover">

                    { myBlock &&
                        myBlock.map((block)=>{
                            return <SelectedBlocks block={block} />
                        })
                    } 
                
                    
                    </table>
                   
                </ul>
            </div>
        </div>

                        
            </div>
                <div class="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">
                      <p style={{padding:'1em'}} className="card">Please Select Rooms from each block which are assigned to this college only.This selection help you to give Specific Rooms to Departments in the next Tab.</p>
                        
                        
                      
                    { Block &&
                        Block.map((block)=>{
                            return (
                                <div>
                                    
                                    <RoomTab block={block} room={Room} collapse={'col-'+block.block_name} />  
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
    </div>    )
}



export default AddBlockandRoom