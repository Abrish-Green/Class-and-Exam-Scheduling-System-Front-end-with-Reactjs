import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './layout'




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
    const[success,setSuccess] = useState()


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
                      setSuccess('Invigilator SuccessFully Created')
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

        {Layout && <Layout />}

        <div class="card"  style={{ marginLeft:'30em',width:'500px',height:'60vh' }}>
        {invigilatorError && <InputAlert message={invigilatorError}/>}
        {success && <Success message={success}/>}
            <h5 class="card-header">Insert Invigilator</h5>
            <div class="card-body" style={{ padding: '4em' }}>
                <form action="#" id="basicform" data-parsley-validate="">
                    <div class="form-group">
                        <label for="inputUserName">Invigilator Name</label>
                        <input id="inputUserName" type="text" onChange={(e)=>{setInvigilator(e.target.value);setInvigilatorError(null);}} name="name" data-parsley-trigger="change" required="" placeholder="Enter user name" autocomplete="off" class="form-control" />
                    </div>
                    <div class="row"style={{ marginTop:'2em',padding: '1em' }}>
                        <div class="col-sm-6 pl-0" >
                            <p class="text-left">
                                <button type="submit" onClick={(e)=>{AddInvigilators(e)}} class="btn btn-space btn-success">Submit</button>
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