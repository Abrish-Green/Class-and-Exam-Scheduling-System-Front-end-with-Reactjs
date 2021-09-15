import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import { useHistory } from 'react-router-dom'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('c_auth');



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
const CreateCollege = (props) => {

    const [departmentName,setdepartmentName] = useState('');
    const [departmentHead,setdepartmentHead] = useState('')
    const [success,setSuccess] = useState(false)
    const [departmentNameError,setdepartmentNameError] = useState('')
    const [departmentHeadError,setdepartmentHeadError] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState()
    const [departmentID,setDepartmentID] = useState()
    const [college_id,setCollege_id] = useState()
    const history = useHistory()
    
    
    useEffect(() => {
        (
            async ()=>{
                const response = await axios.get('/college/current',{headers: {'Authorization': localStorage.getItem('c_auth')}}).then((response)=>{
                    //console.log(response.data.college_id)
                    setUser(response.data)
                })
                //console.log(props.location.state)
                setDepartmentID(props.location.state.department_id)
                setdepartmentHead(departmentHead)
                setCollege_id(props.location.state.college_id)
            }
        )();
       
    }, [])
    const Validate = (e) =>{
        e.preventDefault();
        
        setSuccess(false)
        if(departmentHead == ''){
        
            if((departmentHead == '')){
                setdepartmentHeadError('Please provide Department Email')
            }else{
                setdepartmentHeadError('')
            }
         
            return false;
        }
       
       return true;
    }
    const EditDepartment = async (e) =>{
        e.preventDefault()
        setdepartmentHeadError('')
        if(Validate(e)){
        setLoading(true)
        var res1 = false;
        var res2 = false;
        var res3 = false;
        try{
            //console.log('00',departmentHead)
            const response1 = await axios({
                method: 'post',
                url: '/college/create-department-user',
                data: {
                    'name': 'TBA',
                    'email': departmentHead,
                    'password' : 'TBA',
                    'remember_token' : 'TBA',
                    'department_id' : departmentID,
                    'college_id' : college_id

                },headers: {'Authorization': localStorage.getItem('c_auth')}
              }).then((response)=>{
                  console.log(response)
                  res1 = true;
                  
              });
              //console.log(response1)
              const response2 = await axios({
                method: 'post',
                url: '/college/create-college-user-email',
                data: {
                    'email': departmentHead,
                },headers: {'Authorization': localStorage.getItem('c_auth')}
              }).then((response)=>{
                  console.log(response)
                  res2 = true;

              });
             // console.log(response2)
              const response4 = await axios({
                method: 'post',
                url: `/college/department-head/delete/${props.location.state.id}`,
                headers: {'Authorization': localStorage.getItem('c_auth')}
              }).then((response)=>{
                console.log(response)
                res3 = true;
              });
              //console.log(response2)
                  
                  if(res1 && res2 && res3){
                    setLoading(false)    
                    setSuccess(true)
                    history.push({ pathname: `/college/department/heads`,state: []});
                        //should redirect                        
                  }
                  
              
        }catch(e){
            console.log(e)
        }

    }
}

    

    return(
        <div style={{ position:'relative',left:'30em' }}>
            <div className="card" >
            <h5 className="card-header">Change Department Head</h5>
                <div className="card-body">
                { success && <Success message="Successfully Changed the Department Head " />}
                    <form id="form" data-parsley-validate="" >
                   {loading && <Sending message="Updating..."/>}
                        <div className="form-group row">
                        
                            <p style={{ marginLeft:'1em' }}>New Department Head Email</p>
                            
                            <div className="col-9 col-lg-12">
                                <input id="inputEmail2" type="email" required=""  placeholder="Department Email" onChange={(e)=>setdepartmentHead(e.target.value)} className="form-control" />
                                {departmentNameError && <InputAlert message={departmentNameError} />}
                                </div>
                        </div>
                      


                            <div className="col-sm-6 pl-0">
                                <p className="text-right">
                                    <button type="submit" onClick={(e)=>EditDepartment(e)} className="btn btn-space btn-primary">Submit</button>
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
