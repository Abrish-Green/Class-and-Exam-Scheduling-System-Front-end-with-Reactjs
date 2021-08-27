import react, { useEffect, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = false; 
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;



const Department = ()=> {
    const [departments,setDepartments] = useState([]);
    const [deleted,setDeleted] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [fetching,setFetching] = useState(true)
    const history = useHistory()
    const[collegeName,setCollegeName] = useState('')

    
const Row = (props)=>{
 //   const EditLink = "registrar/college/edit/"+ props.college.id;
   /// const DeleteLink = "registrar/college/delete/" + props.college.id
    setDeleted(false)
    const DeleteCollege = async () => {
        setDeleted(true)
        viewDepartment()
        const response = await axios({
            method: 'post',
            url: ''
          });
    }

    return(
        <tr>
            <td>{departments === [] ? 'No Data Yet' : props.departments.name}</td>
            <td><button type="button"  className="btn btn-warning">Edit</button></td>
            <td><button onClick={DeleteCollege} type="button" className="btn btn-danger">Delete</button></td>
       
         </tr>
    )
}


    
    const viewDepartment = async () =>{
        const college_id = 70;
        const response = await axios.get('/registrar/department/{id}')
        .then((response)=>{
            if(departments =='undefind'){
                setDepartments( response.data.department)
            }else{
                setDepartments([{ id: 70, name: "Chemical", created_at: "2021-08-27T11:48:30.000000Z"}])
            }
            setDepartments( response.data.department)
            if(departments != []){
                setFetching(false)
            }
           
        }) 
    }
    
   
  
    

    return(
        <div style={{ position:'absolute',top:'1%',left:'30%' }}>
               
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0">Department of  in {collegeName} Addis Ababa Science and Technology University </h5>
            <p></p>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table id="example2" className="table table-striped table-bordered" style={{ width:"100%" }}>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        departments.map((department)=>{
                          return <Row college={department} key={department.id}/>
                        })
                     } 

                     
                    </tbody>
                </table>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Department

