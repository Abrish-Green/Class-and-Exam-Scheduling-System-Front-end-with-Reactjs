import React from 'react'
import { Redirect, Route ,useHistory} from 'react-router-dom';
import Session from 'react-session-api'

const AdminPortal = ({auth,component:Component,...rest})=>{
    const  history = useHistory()
    return (
        <Route {...rest} render={
            (props)=>{
              
                if(localStorage.getItem('isRegistrarAuth')){
                    return <Component {...rest} />
                }
                if(!localStorage.getItem('isRegistrarAuth')){
                    props.history.push('/')
                }
            }
        }/>
    )

}

export default AdminPortal;