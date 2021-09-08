import axios from 'axios'
import React, { useEffect, useState } from 'react'


const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.message}
        </div>
    )
}
const AddInvigilator = ()=>{

    const[invigilator,setInvigilator] = useState('')
    const[invigilatorError,setInvigilatorError] = useState()
    const[department_id,setDepartmentID] = useState()


    const AddInvigilators = async (e)=>{
        e.preventDefault()

        if(invigilator != ''){

             await axios({
                method: 'post',
                url: '/department/invigilator/add',
                data: {
                    'invigilator_name' : invigilator,
                    'department_id': department_id
                }
              }).then((response)=>{
                  console.log(response)
              }); 
             



        }else{
            setInvigilatorError('Please Provide a Valid Invigilator Name')
        }
        //console.log(invigilator)


    }

    useEffect(() => {
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    setDepartmentID(response.data.id)
                    console.log(department_id)
                })
            }
        )();  
       
    }, [department_id])


    return (
    
        <div class="">
        <div class="card"  style={{ marginLeft:'30em',width:'400px' }}>
        {invigilatorError && <InputAlert message={invigilatorError}/>}
            <h5 class="card-header">Insert Invigilator</h5>
            <div class="card-body">
                <form action="#" id="basicform" data-parsley-validate="">
                    <div class="form-group">
                        <label for="inputUserName">Invigilator Name</label>
                        <input id="inputUserName" type="text" onChange={(e)=>{setInvigilator(e.target.value);setInvigilatorError(null);}} name="name" data-parsley-trigger="change" required="" placeholder="Enter user name" autocomplete="off" class="form-control" />
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pl-0">
                            <p class="text-right">
                                <button type="submit" onClick={(e)=>{AddInvigilators(e)}} class="btn btn-space btn-primary">Submit</button>
                                <button class="btn btn-space btn-danger">Cancel</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        
    )
}

export default AddInvigilator;