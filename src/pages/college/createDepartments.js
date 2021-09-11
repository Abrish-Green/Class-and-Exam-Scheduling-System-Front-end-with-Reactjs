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
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
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
const CreateCollege = () => {

    const [departmentName,setdepartmentName] = useState('');
    const [departmentHead,setdepartmentHead] = useState('')
    const [success,setSuccess] = useState(false)
    const [departmentNameError,setdepartmentNameError] = useState('')
    const [departmentHeadError,setdepartmentHeadError] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState()
    const [departmentID,setDepartmentID] = useState()
    const history = useHistory()
    
    
    useEffect(() => {
        (
            async ()=>{
                 await axios.get('/college/current',{headers:{
                    'Authorization' : localStorage.getItem('c_auth')
                }}).then((response)=>{
                    console.log(response.data.college_id)
                    setUser(response.data)
                })
            }
        )();
       
    }, [])
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(departmentName == '' || departmentHead == ''){
        
            if((departmentName == '')){
                setdepartmentNameError('Please provide Department Name')
            }else{
                setdepartmentNameError('')
            }
            if((departmentHead == '')){
                setdepartmentHeadError('Please provide a valid Head Email')
            }else{
                setdepartmentHeadError('')
            }
            
            return false;
        }
       
        console.log()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (departmentHead.match(regexEmail)) {
            return true;
          } else {
            setdepartmentHeadError('Please provide a valid Email')
            return false;
          }
        
    }
    const CreateColleges = async (e) =>{
        e.preventDefault()
        setdepartmentNameError('')
        setdepartmentHeadError('')
        console.log(Validate(e))
        if(Validate(e)){
            setLoading(true)
           const response1 = await axios({
                method: 'post',
                url: '/college/create-department',
                data: {
                    'name' : departmentName,
                    'college_id' : user.college_id
                }
              }); 
              console.log(response1.data.Department.id)
              setDepartmentID(response1.data.Department.id)
                
                
                const response2 = await axios({
                    method: 'post',
                    url: '/college/create-department-user',
                    data: {
                        'name': 'TBA',
                        'email': departmentHead,
                        'password' : 'TBA',
                        'remember_token' : 'TBA',
                        'department_id' : response1.data.Department.id,
                        'college_id' : user.college_id

                    }
                  });
                  console.log(response2.data)
                  const response3 = await axios({
                    method: 'post',
                    url: '/college/create-college-user-email',
                    data: {
                        'email': departmentHead,
                    }
                  });
                  console.log(response3)


                  
                  if(response1 && response2 && response3){
                    setLoading(false)    
                    setSuccess(true)
                        //should redirect                        
                  }
                  
              }

    }

    

    return(
        <div style={{ position:'relative',left:'30em' }}>
            <div className="card" >
            <h5 className="card-header">Create Department</h5>
                <div className="card-body">
                { success && <Success message="Successfully Created. Email Has been sent to Department Head. " />}
                    <form id="form" data-parsley-validate="" >
                   {loading && <Sending message="Sending..."/>}
                        <div className="form-group row">
                        
                            <p style={{ marginLeft:'1em' }}>Department Name</p>
                            
                            <div className="col-9 col-lg-12">
                                <input id="inputEmail2" type="email" required=""  placeholder="Department Name" onChange={(e)=>setdepartmentName(e.target.value)} className="form-control" />
                                {departmentNameError && <InputAlert message={departmentNameError} />}
                                </div>
                        </div>
                      
                        <div className="form-group row">
                            
                            <p style={{ marginLeft:'1em' }}>Department Head Email</p> 
                          <br />
                            <div className="col-9 col-lg-12">
                                <input id="inputPassword2" type="Email" required="" placeholder="Department Head Email" onChange={(e)=>setdepartmentHead(e.target.value)} className="form-control" />
                                {departmentHeadError && <InputAlert message={departmentHeadError} />}
                            </div>
                           
                        </div>

                            <div className="col-sm-6 pl-0">
                                <p className="text-right">
                                    <button type="submit" onClick={(e)=>CreateColleges(e)} className="btn btn-space btn-primary">Submit</button>
                                    <a href="/admin/home" className="btn btn-space btn-danger">Cancel</a>
                                </p>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default CreateCollege
