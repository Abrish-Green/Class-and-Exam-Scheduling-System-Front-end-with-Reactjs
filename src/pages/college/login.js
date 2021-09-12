import react, { useEffect, useState } from 'react'
import './AdminRegister.css'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import {useHistory} from 'react-router-dom'





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
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
        </div>
    )
}

const CollegeLogin = (props)=>{
    


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [success,setSuccess] = useState(false);

    const history = useHistory()
    const [EmailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [failedLogin,setFailedLogin] = useState(false)
    


    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    axios.defaults.withCredentials = true;
    const [cookies, setCookie, removeCookie] = useCookies(['']);
    
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(email == '' || password == ''){
        
            if((email == '')){
                setEmailError('Please provide a valid Email Address')
            }else{
                setEmailError('')
            }
            if((password == '')){
                setPasswordError('Please provide a valid password')
            }else{
                setPasswordError('')
            }
            return false;
        }
        return true;
       
    }


    const CollegeLogin = async(e)=>{
        setFailedLogin('')
        e.preventDefault()
        setEmailError('')
        setPasswordError('')
        //console.log(Validate(e))
        if(Validate(e)){
            
            
           const response = await axios({
                method: 'post',
                url: '/college/login',
                data: {
                    'email' : email,
                    'password': password,
                }
              });  
              
             // console.log(response.data)

              if(response.data){
                  if(response.data.Message == 'College User Not Found'){
                    setFailedLogin(response.data.Message)
                  }else{
                    setFailedLogin('')
                    setSuccess('User Found');
                    console.log(response.data.College.name)
                    if(response.data.College.name === 'TBA'){
                        console.log('not completed')
                        props.history.push({ pathname: '/college/register',state: response.data.College});
                    }else{
                        //redirect to home
                        //console.log('completed')
                        console.log(response.data.Token)
                        localStorage.setItem('isCollegeAuth', response.data.Token);
                        localStorage.setItem('c_auth', "Bearer "+response.data.Token);
                        props.history.push({ pathname: '/college/'});
                    }



                  }
              }
          
                 
              
        }
        

    }

    return (
        <div className="splash-container Admin-login">
        <div className="card ">
        <div style={{ marginLeft:'4em' }}>
        <div className="card-header text-center"><a href="../index.html">
            <img style={{height:'18vh',marginLeft:'1em'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
            </a>
        </div>
        <div>
        <h2 className="">College Login</h2>
        </div>
    </div>
            <div className="card-body">
            { success && <Success message="Login was Successful" />}
            { failedLogin && <InputAlert message="User Not Found. Try Again" />}

                <form method="post">
                    <div className="form-group">
                        <input className="form-control form-control-lg" id="username" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"  />
                        {EmailError && <InputAlert message={EmailError} />}
                        </div>
                    <div className="form-group">
                        <input className="form-control form-control-lg" id="password" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                        {passwordError && <InputAlert message={passwordError} />}
                        </div>
                    
                    <button type="submit" onClick={(e)=>{CollegeLogin(e)}} className="btn btn-primary btn-lg btn-block">Sign in</button>
                </form>
            </div>
            <div className="card-footer bg-white p-0  ">
                <div className="card-footer-item card-footer-item-bordered">
                    <p href="/college/register" className="text-success"><i class='fas fa-lock' style={{ fontSize:"20px" }}></i> Secured Login</p></div>
                <div className="card-footer-item card-footer-item-bordered">
                    <a href="/college/reset" className="footer-link">Forgot Password</a>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default CollegeLogin


















