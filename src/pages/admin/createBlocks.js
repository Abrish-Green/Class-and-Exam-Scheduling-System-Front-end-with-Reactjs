import react, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { render } from '@testing-library/react';

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



class SelectBlockDropdown extends Component{
        
   
      render(){
        return(
            <option value={this.props.block}>{this.props.block}</option>
        )
      }
    
}
class CreateBlocks extends Component {


    constructor(props){
        super(props);

        this.state = {
            Block : [],
            FixedBlock : [],
            selectedValue : '',
            isDeleted: false
          }
        this.CollegeBlock = this.CollegeBlock.bind(this);
        this.GenerateRoom = this.GenerateRoom.bind(this)
        this.SelectBlock = this.SelectBlock.bind(this)
        this.DeleteBlock = this.DeleteBlock.bind(this)
      
    }
     DeleteBlock = async (id)=>{
        
        console.log('delete')
         await axios({
            method: 'post',
            url: `/registrar/block/${id}/delete`,
           
          }).then((response)=>{
              console.log(response)
          }); 
          this.setState({isDeleted:true})
         
          this.CollegeBlock()
          


    }

     GenerateRoom = () =>{
        const block = [];
        for(var i=1;i<=100;i++){
            block.push(i)
        }
       
        this.setState({FixedBlock:block})
    }
   
     SelectBlock = async (e)=>{
        e.preventDefault()

         await axios({
            method: 'post',
            url: '/registrar/create/block',
            data: {
                'block_name' : this.state.selectedValue,
            }
          }).then((response)=>{
              console.log(response)
          }); 

          this.CollegeBlock()

    
    }

     CollegeBlock =async ()=>{
        try{
            
             await axios({
                method: 'get',
                url: '/registrar/get/blocks'
            }).then((response)=>{
                console.log(response.data.block)
                
                this.setState({Block:response.data.block})
              
                
        }); 
        }catch(e){
            this.setState({Block:null})
        }
    }
     

    componentDidMount(){
        this.GenerateRoom()
        this.CollegeBlock()
        console.log(this.state.Block ? this.state.Block: 'loading...' )
    }


    

    render(){
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
                                <select class="form-select form-control" placeholder="Select Your Block" aria-label="Default select example" onChange={(e)=>{console.log(e.target.value)}} >
                                     <option selected>Choice Block Number</option>
                                    {this.state.FixedBlock &&
                                        this.state.FixedBlock.map((block)=>{
                                          return  <option onClick={(e)=>{this.setState({selectedValue: e.target.value})}} value={block}>{block}</option> 
                                        })
                                    }
                                                              
                                </select>
    
    
                                </div>
                                   
                
                            </div>
                            <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                            <p class="text-center">
                                <button type="submit" onClick={(e)=>{this.SelectBlock(e)}} style={{float:'left',width: '10em'}} class="btn btn-space btn-success">Create Block</button>
                                
                            </p>
    
    
                            
                          </div>
                        </form>
                    </div>
                
                </div>
                
                
                <div class="card" style={{ width: '580px' }}>
                <h5 class="card-header">Building Blocks in AASTU</h5>
                <div class="card-body">

                {this.state.isDeleted && <Success message="Block Successfully Deleted" />}
                    <ul class="list-group">
                        <table className="table table-border table-striped table-hover">
    
                        { this.state.Block &&
                            this.state.Block.map((block)=>{
                                return (
                                    <tr>
                                        <td>
                                                Block
                                        </td>
                                        <td>
                                                {block.block_name}
                                        </td>
                                        
                                        <td>
                                                <button to="" onClick={(e)=>{e.preventDefault();this.DeleteBlock(block.id)}}  className="btn btn-danger">Remove</button>
                                        </td>
                                </tr>
                                )
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

    }



export default CreateBlocks
