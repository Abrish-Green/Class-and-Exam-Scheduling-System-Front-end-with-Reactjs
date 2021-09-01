import { useState } from "react";


export default function useAuth(initialValue){
    const [isAuth,setIsAuth] = useState(initialValue)

    function login(){
        setIsAuth(true);
    }
    function logout(){
        setIsAuth(false)
    }
    function wait(){
        setIsAuth('loading')
    }
    return [isAuth,login,wait,logout];
}