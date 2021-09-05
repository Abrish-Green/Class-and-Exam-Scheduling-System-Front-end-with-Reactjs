import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class AddInstructor extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }



    render(){

        return(
            <div style={{ position:'absolute', top:'5%',left: '15%',width: '60%' }}>
            <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Create Instructor</h4>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="form-valide" action="#" method="post">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-username">Instructor Name
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" id="val-username" name="val-username" placeholder="Instructor Name" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-email">Email <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-email" name="val-email" placeholder="Your valid email.." />
                                            </div>
                                    </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill"> Type  
                                        <span class="text-danger">*</span>
                                </label>
                                <div class="col-lg-6">
                                        <select class="form-control" id="val-skill" name="val-skill">
                                            <option value="lecture">Lecture</option>
                                            <option value="assistant">Lab Assistant</option>
                                           
                                        </select>
                                    </div>
                                </div>

                           
                                   
                                </div>
                                <div class="col-xl-6">
                
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label" for="val-skill"> Has Class Lecture  
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-6">
                                <select class="form-control" id="val-skill" name="val-skill">
                                    
                                    <option value="yes" selected>Yes</option>
                                    <option value="no">No</option>
                                   
                                </select>
                            </div>
                        </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill"> Course Type   
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-lg-6">
                                    <select class="form-control" id="val-skill" name="val-skill">
                                        <option value="major">Major Course</option>
                                        <option value="common">Common Course</option>
                                        <option value="supporting">Supporting Course</option>
                                    
                                    </select>
                                </div>
                            </div>
                                    
                                   
                                   
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-digits">Credit Hour <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" id="val-digits" name="val-digits" placeholder=" Credit Hour" />
                                        </div>
                                    </div>
                                    
                                   
                                    
                                    <div class="form-group row">
                                        <div class="col-lg-8 ml-auto">
                                            <button type="submit" style={{float: 'center'}} class="btn btn-success">Save</button>
                                            <Link to="/" style={{margin: '2px 6px'}} class="btn btn-danger">Cancel</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
            
            </div>
        )
    }

}

export default AddInstructor