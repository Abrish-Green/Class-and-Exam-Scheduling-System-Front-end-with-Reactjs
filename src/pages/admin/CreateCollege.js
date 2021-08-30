import react, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import { useHistory } from 'react-router-dom'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
axios.defaults.headers.common['Authorization'] = localStorage.getItem('r_auth');



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
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
        </div>
    )
}
const CreateCollege = () => {

  
    
    const [collegeName,setCollegeName] = useState('');
    const [collgeDean,setCollegeDean] = useState('')
    const [success,setSuccess] = useState(false)
    const [collegeNameError,setCollegeNameError] = useState('')
    const [collgeDeanError,setCollgeDeanError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(collegeName == '' || collgeDean == ''){
        
            if((collegeName == '')){
                setCollegeNameError('Please provide College Name')
            }else{
                setCollegeNameError('')
            }
            if((collgeDean == '')){
                setCollgeDeanError('Please provide a valid Dean Email')
            }else{
                setCollgeDeanError('')
            }
            
            return false;
        }
       
        console.log()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (collgeDean.match(regexEmail)) {
            return true;
          } else {
            setCollgeDeanError('Please provide a valid Dean Email')
            return false;
          }
        
    }
    const CreateColleges = async (e) =>{
        e.preventDefault()
        setCollegeNameError('')
        setCollgeDeanError('')
        console.log(Validate(e))
        if(Validate(e)){
            setLoading(true)
           const response1 = await axios({
                method: 'post',
                url: '/registrar/create-college',
                data: {
                    'name' : collegeName,
                }
              });  
                const College_id = response1.data.DATA.id;
                
                const response2 = await axios({
                    method: 'post',
                    url: '/registrar/create-college-user',
                    data: {
                        'name': 'TBA',
                        'email': collgeDean,
                        'password' : 'TBA',
                        'remember_token' : 'TBA',
                        'college_id' : College_id

                    }
                  });
                  const response3 = await axios({
                    method: 'post',
                    url: '/registrar/create-college-user-email',
                    data: {
                        'email': collgeDean,
                    }
                  });
                  console.log(response3)


                  
                  if(response1.data.DATA && response2.data.CollegeUser){
                    setLoading(false)    
                    setSuccess(true)
                        //should redirect                        
                  }
                  
              }

    }

    return(
        <div style={{ position:'relative',left:'30em' }}>
            <div className="card" >
            <h5 className="card-header">Create College</h5>
                <div className="card-body">
                { success && <Success message="Successfully Created. Email Has been sent to College Dean. " />}
                    <form id="form" data-parsley-validate="" >
                   {loading && <Sending message="Sending..."/>}
                        <div className="form-group row">
                        
                            <p style={{ marginLeft:'1em' }}>College Name</p>
                            
                            <div className="col-9 col-lg-12">
                                <input id="inputEmail2" type="email" required=""  placeholder="College Name" onChange={(e)=>setCollegeName(e.target.value)} className="form-control" />
                                {collegeNameError && <InputAlert message={collegeNameError} />}
                                </div>
                        </div>
                      
                        <div className="form-group row">
                            
                            <p style={{ marginLeft:'1em' }}>Dean Email</p> 
                          <br />
                            <div className="col-9 col-lg-12">
                                <input id="inputPassword2" type="Email" required="" placeholder="Dean Email" onChange={(e)=>setCollegeDean(e.target.value)} className="form-control" />
                                {collgeDeanError && <InputAlert message={collgeDeanError} />}
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
