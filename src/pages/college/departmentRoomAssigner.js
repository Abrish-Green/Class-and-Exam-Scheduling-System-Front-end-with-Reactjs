import React, { useState } from 'react'
import Layout from './layout';

const DepartmentRoomAssigner = ()=>{

  

    return (
        <div>

        {Layout && <Layout />}
        <div class="card" style={{ marginLeft:'30em',height: '70vh' }}>
                
            <h5 class="card-header">Select Blocks for This College</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                
                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                            <p className="">Please Select your block to assign Room for each and every Department under this college from the Menu below.</p>
                            </div>
                            
                        </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" onClick={(e)=>{e.preventDefault();}} style={{float:'left',width: '10em'}} class="btn btn-space btn-success">Use Block</button>
                            
                        </p>


                        
                    </div>
                    </form>
                </div>
            
            </div>
        
        
        
        </div>
    )
}

export default DepartmentRoomAssigner