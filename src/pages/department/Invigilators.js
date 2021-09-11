import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from './layout';


const Invigilators = ()=>{

    const[department_id,setDepartmentID] = useState()
    const[invigilators,setInvigilators] = useState()

    const GetInvigilator = async ()=>{

        

                axios({
                'method': 'post',
                'url': 'department/invigilator/get',
                data:{
                    'department_id':department_id
                }}).then((response)=>{
                    console.log(response.data)
                    setInvigilators(response.data.invigilators)
                })


    }

    useEffect(() => {
     
       
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    console.log(response.data.id)
                    setDepartmentID(response.data.id)
                })
            }
        )();

        GetInvigilator()

       
   
        
        
    }, [department_id])


    return (

        <div>

        {Layout && <Layout />}

        <div style={{ position: 'absolute', top: '7em',left: '19em' ,width: '60em'}}>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
            <h5 class="card-header">Exam Invigilator</h5>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered first">
                        <thead>
                            <tr>
                                <th style={{ paddingLeft: '5em',paddingRight: '5em' }}>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>

                                {invigilators && 
                                   
                                invigilators.map((invigilator)=>{
                                    return (
                                        <tr>
                                            <td>{invigilator.invigilator_name}</td>
                                            <td><button className="btn btn-warning">Edit</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                                                                      
                                    </tr>
                                    )
                                })

                                }

                                {invigilators &&
                                   
                                    invigilators.length == 0 ?

                                    <tr>
                                            <td colSpan="4">No Data Yet</td>
                                               
                                    </tr> : ''

                                }
                        
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
        
        
        </div>

        </div>
    )
}

export default Invigilators