import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import { useHistory } from 'react-router-dom'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('d_auth');



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
const EditInstructor = (props) => {

    const [departmentName,setdepartmentName] = useState('');
    const [InstructorEmail,setInstructorEmail] = useState('')
    const [success,setSuccess] = useState(false)
    const [departmentNameError,setdepartmentNameError] = useState('')
    const [InstructorEmailError,setInstructorEmailError] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState()
    const [InstructorID,setInstructorID] = useState()
    const history = useHistory()
    
    
    useEffect(() => {
        (
            async ()=>{
                const response = await axios.get('/department/current').then((response)=>{
                    //console.log(response.data.college_id)
                    setUser(response.data)
                })
                //console.log(await props.location.state.id)
                setInstructorID(await props.location.state.id)
            }
        )();
       
    }, [])
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(InstructorEmail == ''){
        
            if((departmentName == '')){
                setInstructorEmailError('Please provide Instructor Email')
            }else{
                setInstructorEmailError('')
            }
         
            return false;
        }
       
       return true;
    }
    const EditDepartment = async (e) =>{
        e.preventDefault()
        setdepartmentNameError('')
        setInstructorEmailError('')
        if(Validate(e)){
        setLoading(true)
            //console.log('00',InstructorEmail)
        const response = await axios({
                method: 'post',
                url: `/department/instructor/edit/${InstructorID}`,
                data: {
                    'name' : InstructorEmail,
                }
              }).then((response)=>{
                  console.log(response)
                  setLoading(false)
                  setSuccess(true)
                  history.push({ pathname: `/department/instructors`,state: []});
      
              }); 
                  
                  if(response){
                    setLoading(false)    
                    setSuccess(true)
                        //should redirect                        
                  }
                  
              }

    }

    

    return(
        <div style={{ position:'relative',left:'30em' }}>
            <div className="card" >
            <h5 className="card-header">Edit Department</h5>
                <div className="card-body">
                { success && <Success message="Successfully Created. Email Has been sent to Department Head. " />}
                    <form id="form" data-parsley-validate="" >
                   {loading && <Sending message="Updating..."/>}
                        <div className="form-group row">
                        
                            <p style={{ marginLeft:'1em' }}>Department Name</p>
                            
                            <div className="col-9 col-lg-12">
                                <input id="inputEmail2" type="email" required=""  placeholder="Department Name" onChange={(e)=>setInstructorEmail(e.target.value)} className="form-control" />
                                {InstructorEmailError && <InputAlert message={InstructorEmailError} />}
                                </div>
                       
                        
                                <div className="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                                <p className="text-right">
                                    <button type="submit" onClick={(e)=>EditDepartment(e)} className="btn btn-space btn-primary">Submit</button>
                                    <a href="/department/instructors" className="btn btn-space btn-danger">Cancel</a>
                                </p>
                            </div>
                                </div>
                      


                           
                    </form>
                </div>
            </div>
        </div>
    )
}



export default EditInstructor
