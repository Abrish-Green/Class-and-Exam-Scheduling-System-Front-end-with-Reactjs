import react, { Component, useEffect, useState } from 'react'
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




const AdminRegister = (props)=> {

    const[user,setUser] = useState();
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirm_password,setConfirmPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const [confirmValidation,setConfirmValidation] = useState('')
    const [confirmValidationMessage,setConfirmValidationMessage] = useState('')

    const history = useHistory()
    const [usernameError,setUsernameError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [confirm_passwordError,setConfirm_passwordError] = useState('')
    const [id,setId] = useState();
    
    (
        async()=>{
            setId(await props.location.state.id)
        }
    )();
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    axios.defaults.withCredentials = false;
    const [cookies, setCookie, removeCookie] = useCookies(['']);
    
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(username == '' || password == '' || confirm_password == '' ){
            
            if((username == '')){
                setUsernameError('Please provide a username')
            }else{
                setUsernameError('')
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


    console.log(id)
    const registerDean = async(e)=>{
        
       
        
        e.preventDefault()
    
        if(Validate(e)){
            setUsernameError('');
            setPasswordError('')
            setConfirm_passwordError('')

           const response = await axios({
                method: 'post',
                url: '/college/updates',
                data: {
                    'id' : id,
                    'name': username,
                    'password': password,
                }
              }).then((response)=>{
                //console.log(response)
                  setSuccess(true)
                    //redirect
              });  
              
        }
        

    }

    useEffect(() => {
        console.log(id)
        return () => {
           
        }
    }, [])
    return(
    <div className="Admin-register">
   
    <form className="splash-container" method="post">
    
        <div className="card">
       
        
            <div className="card-header">
            <img style={{height:'18vh',position:'relative',left:'28%'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
                <h3 style={{textAlign:'center'}}className="mb-1">Welcome To UCESS College Dean</h3>
                <p>Please Complete you personal information to start using the system</p>
            </div>
           
            <div className="card-body">
                <div className="form-group">
                    <input className="form-control form-control-lg username" onChange={(e)=>setUsername(e.target.value)} type="text" name="nick" placeholder="Username" required/>
                    {usernameError && <InputAlert message={usernameError} />}
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
                    <input onClick={(e)=>registerDean(e)} className="btn btn-block btn-primary" type="submit"  value="Complete My Account"/>
                </div>
            </div>
             { success && <Success message="Congratulation!You Successfully Completed Your Account" />}
            <div className="card-footer bg-white">
                <p>Already member? <a href="/college/login" className="text-secondary">Login Here.</a></p>
            </div>
        </div>
       
        
        </form>
    </div>
    )
}

export default AdminRegister;