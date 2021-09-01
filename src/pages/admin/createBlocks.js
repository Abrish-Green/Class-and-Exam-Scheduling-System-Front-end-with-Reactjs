import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

var _ = require('lodash');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('r_auth');



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



const CreateBlocks = (props) => {

    const[Block, setBlock] = useState([]);
    const[FixedBlock, setFixedBlock] = useState([]);

    const GenerateRoom = () =>{
        const block = [];
        for(var i=1;i<=100;i++){
            block.push(i)
        }
       
        setFixedBlock(block)
    }
    const SelectBlockDropdown = (props)=>{
        
        return(
            
                <option value={props.block}>{props.block}</option>
        )
    }

    const SelectedBlocks = (props)=>{

        return(
            <tr>
                <td>
                        Block
                </td>
                <td>
                        {props.block}
                </td>
                <td>
                        <button to="" onClick={true} className="btn btn-warning">Edit</button>
                </td>
                <td>
                        <button to="" onClick={true} className="btn btn-danger">Remove</button>
                </td>
            </tr>
        )
    }

    

    useEffect(() => {
        GenerateRoom()
        console.log((Block));
    }, [])

    
    return(
        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'2em',marginLeft: '20em', }}>
        <div class="section-block">
            <h2 class="section-title">University Block Manager</h2>
        </div>
        <div class="tab-outline">
            <ul class="nav nav-tabs" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Block </a>
                </li>
                
            </ul>
            <div class="tab-content" id="myTabContent2">
                <div class="tab-pane fade active show" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">


     <div class="card">
            
                <h5 class="card-header">Configure University Blocks</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                   
                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                            <p className="">Please Select your block to assign Room for each and every Department under this college from the Menu below.</p>
                            <select class="form-select form-control" placeholder="Select Your Block" aria-label="Default select example">
                                
                                {
                                    FixedBlock.map((block)=>{
                                      return  <SelectBlockDropdown block={block}/> 
                                    })
                                }
                                                          
                            </select>


                            </div>
                               
            
                        </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" style={{float:'left',width: '10em'}} class="btn btn-space btn-success">Create Block</button>
                            
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

                    {Block ?
                        
                        <h3 className="card text-center"> No Data</h3>
                        :
                        Block.map((block)=>{
                            return <SelectedBlocks block={block} />
                        })
                     
                        
                    } 
                    
                    </table>
                   
                </ul>
            </div>
        </div>

            </div>
                
            </div>
        </div>
    </div>    )
}



export default CreateBlocks
