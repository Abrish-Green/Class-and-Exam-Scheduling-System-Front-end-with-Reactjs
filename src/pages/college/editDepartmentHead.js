import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import { useHistory } from 'react-router-dom'

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
const EditDepartmentHead = (props) => {

    const [departmentName,setdepartmentName] = useState('');
    const [departmentHead,setdepartmentHead] = useState('')
    const [success,setSuccess] = useState(false)
    const [departmentNameError,setdepartmentNameError] = useState('')
    const [emailError,setEmailError] = useState('');
    const [departmentHeadError,setdepartmentHeadError] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState()
    const [departmentID,setDepartmentID] = useState()
    const history = useHistory()
    
    

    useEffect(() => {
        
        (
            async ()=>{
                const response = await axios.get('/college/current',{headers:{'Authorization' : localStorage.getItem('c_auth')}}).then((response)=>{

                    setUser(response.data)
                    
                })
               
                }
        )();

        setdepartmentName(props.location.state.name)
        setdepartmentHead(props.location.state.email)
        setDepartmentID(props.location.state.id)
        console.log( props.location.state.email)
        setDepartmentID(props.location.state.id)
       
    }, [])

    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(departmentName == ''){
        
            if((departmentName == '')){
                setdepartmentNameError('Please provide Department Head Name')
            }else{
                setdepartmentNameError('')
            }
            if((departmentHead == '')){
                setdepartmentHeadError('Please provide Department Head Email')
            }else{
                setdepartmentHeadError('')
            }
         
            return false;
        }
       
       return true;
    }
    const EditDepartment = async (e) =>{
        e.preventDefault()
        setdepartmentNameError('')
        setdepartmentHeadError('')
        if(Validate(e)){
        setLoading(true)
            //console.log('00',departmentHead)
        const response = await axios({
                method: 'post',
                url: `/college/department/head/edit/${departmentID}`,
                data: {
                    'name' : departmentName,
                    'email': departmentHead
                },
                headers:{'Authorization' : localStorage.getItem('c_auth')
            }
              }).then((response)=>{
                  console.log(response)
                  history.push({ pathname: `/college/department/heads`,state: []});
      
              }); 
                  
                  if(response){
                    setLoading(false)    
                    setSuccess(true)
                        //should redirect                        
                  }
                  
              }

    }

    return(
        <div style={{ position:'relative',left:'30em',width:'60%' }}>
        <div className="card" >
        <h5 className="card-header">Edit Department</h5>
            <div className="card-body">
            { success && <Success message="Successfully Created. Email Has been sent to Department Head. " />}
                <form id="form" data-parsley-validate="" >
               {loading && <Sending message="Updating..."/>}
                    <div className="form-group row">
                    
                        <p style={{ marginLeft:'1em' }}>Department Head Name :</p>
                        
                        <div className="col-10 col-lg-10">
                            <input id="inputEmail2" type="email" required=""  placeholder="Department Name" onChange={(e)=>setdepartmentName(e.target.value)} value={departmentName} className="form-control" />
                            {departmentNameError && <InputAlert message={departmentNameError} />}
                        </div>
                        <p style={{ marginLeft:'1em',marginTop:'1em' }}>Department Head Email :</p>
                        
                        <div className="col-10 col-lg-10" style={{ marginTop:'0em' }}>
                            <input id="inputEmail2" type="email" required=""  placeholder="Department Name" onChange={(e)=>setdepartmentHead(e.target.value)} value={departmentHead} className="form-control" />
                            {departmentNameError && <InputAlert message={departmentNameError} />}
                        </div>
                     </div>
                         
                  


                        <div className="col-sm-6 pl-0">
                            <p className="text-right">
                                <button type="submit" onClick={(e)=>EditDepartment(e)} className="btn btn-space btn-primary">Submit</button>
                                <a href="/admin/home" className="btn btn-space btn-danger">Cancel</a>
                            </p>
                        </div>
                </form>
            </div>
        </div>
    </div>


    )

}


export default EditDepartmentHead
