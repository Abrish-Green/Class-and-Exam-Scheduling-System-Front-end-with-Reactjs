import React from 'react'
import { Redirect, Route ,useHistory} from 'react-router-dom';

const AdminPortal = ({auth,component:Component,...rest})=>{
    const  history = useHistory()
    return (
        <Route {...rest} render={
            (props)=>{
                if(auth =='loading'){
                    return null;
                }
                if(auth){
                    return <Component {...rest} />
                }
                if(auth == false){
                    history.push('/admin/login')
                }
            }
        }/>
    )

}

export default AdminPortal;