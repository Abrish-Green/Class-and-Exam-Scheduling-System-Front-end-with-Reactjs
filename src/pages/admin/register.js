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
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning  alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
        </div>
    )
}


const AdminRegister = ()=> {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirm_password,setConfirmPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const [confirmValidation,setConfirmValidation] = useState('')
    const [confirmValidationMessage,setConfirmValidationMessage] = useState('')

    const history = useHistory()
    const [usernameError,setUsernameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [emailExistError,setEmailExistError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [confirm_passwordError,setConfirm_passwordError] = useState('')
    


    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    axios.defaults.withCredentials = true;
    const [cookies, setCookie, removeCookie] = useCookies(['']);
    
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(username == '' || email == '' || password == '' || confirm_password == '' ){
        
            if((username == '')){
                setUsernameError('Please provide a username')
            }else{
                setUsernameError('')
            }
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
            if((confirm_password == '')){
                setConfirm_passwordError('Please provide a valid password')
            }else{
                setConfirm_passwordError('') 
            }
            return false;
        }

        if(password == confirm_password){
            setConfirmValidationMessage('')
            setConfirmValidation('')
            return true;
        }else{
            setConfirmValidation('No Match')
            setConfirmValidationMessage(`Password Doesn't Match`)
            return false;
        }
       
    }


    const registerAdmin = async(e)=>{
        e.preventDefault()

        if(Validate(e)){
            setUsernameError('');
            setEmailError('')
            setPasswordError('')
            setConfirm_passwordError('')
        
           const response = await axios({
                method: 'post',
                url: '/registrar/sign-up',
                data: {
                    'username': username,
                    'email' : email,
                    'password': password,
                }
              });  
              const emailExist = response.data; 
              console.log(emailExist.Message)
              if(emailExist.Message != ''){
                  setEmailExistError(emailExist.Message)
                  Redirect('/admin/signup');
              }
              if(response.data.Token){
                const token = response.data.Token;
                setSuccess(true)
                console.log('success',success)
                setTimeout(()=>{history.push('/admin/login')},1000)
                
              }

                
              
              
        }
        

    }


    return(
    <div className="Admin-register">
   
    <form className="splash-container" method="post">
    
        <div className="card">
       
        
            <div className="card-header">
            <img style={{height:'18vh',position:'relative',left:'28%'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
                <h3 style={{textAlign:'center'}}className="mb-1">Welcome To UCESS</h3>
                <p>Please enter your Admin information to start the system</p>
            </div>
            { success && <Success message="Congratulation!You Are Successfully Registered" />}
            <div className="card-body">
                <div className="form-group">
                    <input className="form-control form-control-lg username" onChange={(e)=>setUsername(e.target.value)} type="text" name="nick" placeholder="Username" required/>
                    {usernameError && <InputAlert message={usernameError} />}
                </div>
                
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)} type="email" name="email"  placeholder="E-mail"  required/>
                    {emailError && <InputAlert message={emailError} />}
                    {emailExistError && <InputAlert message={emailExistError} />}

                    
                    </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} id="pass1" type="password"  placeholder="Password" required/>
                    {passwordError && <InputAlert message={passwordError} />}
                    </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm" required/>
                    {confirm_passwordError && <InputAlert message={confirm_passwordError} />}
                    </div>
                   
                    { (confirmValidation != '') && <span style={{ color:'red' }}> {confirmValidationMessage}</span>}
                    

                <div className="form-group pt-2">
                    <input onClick={(e)=>registerAdmin(e)} className="btn btn-block btn-primary" type="button"  value="Register My Account"/>
                </div>
            </div>
            <div className="card-footer bg-white">
                <p>Already member? <a href="/admin/login" className="text-secondary">Login Here.</a></p>
            </div>
        </div>
        
        </form>
    </div>
    )
}

export default AdminRegister;