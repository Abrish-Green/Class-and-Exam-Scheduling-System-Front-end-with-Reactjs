import axios from 'axios';
import react, { useState } from 'react'


const Success = (props)=>{
    return(
        <div className="alert alert-success" role="alert">
          {props.message}
        </div>
    )
}
const ResetPassword = ()=>{

    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    axios.defaults.withCredentials = false;

    const [email,setEmail] = useState('')
    const [success,setSuccess] = useState(false);
    const [successTxt,setSuccessTxt] = useState('');
    const [emailError,setEmailError] = useState('')

    const InputAlert = (props)=>{
        return(
            <div className="alert alert-warning" role="alert">
              {props.message}
            </div>
        )
    }

    const Validate = (e) =>{
        e.preventDefault();
        if((email == '')){
            setEmailError('Please provide a valid Email Address')
            return false;
        }else{
            setEmailError()
        }
        return true;          
    } 


    const ResetPassword = async(e)=>{

        if(Validate(e)){

        const response = await axios({
            method: 'post',
            url: '/registrar/reset',
            data: {
                'email' : email,
            }
        });  

        if(response.data.Status){
          
            setEmailError();
           
            if(response.data.Message == 'Email Doesn\'t Exists'){
                setSuccess(false);
                setEmailError('Email Not Registered in this system Before..Please try again')
            }else{
                setSuccessTxt(response.data.Message);
                setSuccess(true);
                
            }
        }else{
            setSuccess(false);
            setEmailError('The email must be a valid email address.')
            
        }

        }
        return (
            <div>
                
            </div>
        )
    }

    return (
     <div className="splash-container Admin-reset">
        <div className="card">
            <div className="card-header text-center">
                <img style={{height:'18vh'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
                    
                <span className="splash-description">Reset Password</span></div>
            <div className="card-body">
                <form>
                {success && <Success message={successTxt}/>}
                {emailError && <InputAlert message={emailError}/>}
                    <p>Use your email to reset your password.we'll send you an email in a moment.</p>
                    <div className="form-group">
                        <input className="form-control form-control-lg" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" required placeholder="Your Email" />
                    </div>
                    <div className="form-group pt-1"><button className="btn btn-block btn-primary btn-xl"  onClick={(e)=>ResetPassword(e)} >Reset Password</button></div>
                </form>
            </div>
            <div className="card-footer text-center">
                <span>Don't have an account? <a href="/admin/register">Sign Up</a></span>
            </div>
        </div>
    </div>
    
    )
}

export default ResetPassword;