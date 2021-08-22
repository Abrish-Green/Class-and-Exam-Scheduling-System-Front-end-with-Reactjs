import react, { useEffect, useState } from 'react'
import './AdminRegister.css'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import {useHistory} from 'react-router-dom'





const Success = (props)=>{
    return(
        <div className="alert alert-success" role="alert">
          {props.message}
        </div>
    )
}
const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning" role="alert">
          {props.message}
        </div>
    )
}

const AdminLogin = (props)=>{
    


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


    const AdminLogin = async(e)=>{
        e.preventDefault()
        setEmailError('')
        setPasswordError('')
        console.log(Validate(e))
        if(Validate(e)){
            
            
           const response = await axios({
                method: 'post',
                url: '/registrar/login',
                data: {
                    'email' : email,
                    'password': password,
                }
              });  
              if(response.data.Message != 'undefined'){
                setFailedLogin(true)
              }
              console.log(response.data.Message)
              if(response.data.Token){
                setFailedLogin(false)
                const token = response.data.Token;
                const Auth = `Bear ${token}`
                setCookie('AdminAuthToken',Auth);
                console.log(Auth)
                setSuccess(true)
                console.log('success',success)
                //setTimeout(()=>{history.push('/admin/login')},1000)
                
              }

                
              
              
        }
        

    }


    const AuthToken  = cookies.AdminAuthToken

    return (
        <div className="splash-container Admin-login">
        <div className="card ">
            <div className="card-header text-center"><a href="../index.html">
            <img style={{height:'18vh'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
            </a><span className="splash-description">Registrar Login</span>
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
                    
                    <button type="submit" onClick={(e)=>{AdminLogin(e)}} className="btn btn-primary btn-lg btn-block">Sign in</button>
                </form>
            </div>
            <div className="card-footer bg-white p-0  ">
                <div className="card-footer-item card-footer-item-bordered">
                    <a href="/admin/register" className="footer-link">Create Account</a></div>
                <div className="card-footer-item card-footer-item-bordered">
                    <a href="/admin/reset" className="footer-link">Forgot Password</a>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default AdminLogin


















