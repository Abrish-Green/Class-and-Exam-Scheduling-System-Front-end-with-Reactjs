import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import AddCourse from '../department/addDepartmentCourse'

import { Link, useHistory } from 'react-router-dom'
var _ = require('lodash');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('c_auth');

const AddSection =()=>{
       
    const[startSectioning, setStartSection] = useState(false)
    const[year,setYear] = useState(null)
    const[semester,setSemester] = useState(null)
    


    const ChooseYearSemester = ()=>{


        return(
            <div>

            </div>
        )
    }



    useEffect(() => {
    console.log(startSectioning)
    console.log(year,semester)
    setStartSection(false)
    }, [startSectioning])

    
    return(
        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'2em',marginLeft: '20em', }}>
        <div class="section-block">
            <h2 class="section-title"> Section Configration</h2>
        </div>
        <div class="tab-outline">
            <ul class="nav nav-tabs" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Class Section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="profile" aria-selected="false">Class Sections</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-three" data-toggle="tab" href="#outline-three" role="tab" aria-controls="contact" aria-selected="false">Exam Section</a>
                </li>
                
            </ul>
            <div class="tab-content" id="myTabContent2">
                <div class="tab-pane fade active show" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">


     <div class="card">
            
               
                <div  class="alert alert-info alert-dismissible fade show">
                    <button type="button" class="close h-100" data-dismiss="alert" aria-label="Close"><span><i class="mdi mdi-close"></i></span>
                    </button>
                    <p>To Start Creating Classes Please Fill the Form </p>
                </div>
                <h5 class="card-header">Year</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                   
                   

                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                            
                            <div class="col-lg-6">
                            <select onClick={(e)=>{setYear(e.target.value)}} class="form-control" id="val-skill" name="val-skill">
                                <option >Please Select Year</option>
                                <option value="1">First Year(Fresh)</option>
                                <option value="2">Second Year</option>
                                <option value="3">Third Year</option>
                                <option value="4">Fourth Year</option>
                                <option value="5">Fifth Year</option>
                                <option value="6">Sixth Year</option>
                            
                            </select>
                        </div>
                  </div>
                               
            
                        </div>
                        <div class="form-group row">
            <div class="col-9 col-lg-10">
                        <h4>Semester</h4>
                        <div class="col-lg-6">
                        <select onClick={(e)=>{setSemester(e.target.value)}} class="form-control" id="val-skill" name="val-skill">
                            <option >Please Select Semester</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                           
                        
                        </select>
                    </div>
              </div>
                           
        
                    </div>
                    <div class="form-group row">
                    <div class="col-9 col-lg-10">
                                <h4>Section Amount</h4>
                                <div class="col-lg-6">
                                <input type="number" class="form-control" id="" name="" placeholder="" />

                            </div>
                      </div>
                                   
                
                            </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" style={{width: '15em'}} onClick={(e)=>{e.preventDefault();setStartSection(true)}} class="btn btn-space btn-success">Start Sectioning</button>
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



export default AddSection
