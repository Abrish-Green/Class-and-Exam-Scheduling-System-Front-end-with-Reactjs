import React from 'react'
import { Link } from 'react-router-dom';






const AddDepartmentCourse = ()=>{



    return (
        <div>
                <div class="card">
                
                    <h5 class="card-header">Course</h5>
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

        
        
        </div>
    )
}

export default AddDepartmentCourse;