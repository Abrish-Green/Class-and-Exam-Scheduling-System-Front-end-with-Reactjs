import react, { useEffect, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
axios.defaults.headers.common['Authorization'] = localStorage.getItem('c_auth');



const Department = ()=> {
    const [departments,setDepartments] = useState([]);
    const [deleted,setDeleted] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [fetching,setFetching] = useState(true)
    const [user,setUser] = useState('')
    const history = useHistory()
    const[college_id,setCollegeID] = useState()
    const[collegeName,setCollegeName] = useState('')


    
    const Row = (props)=>{
        
        const EditLink = "registrar/college/edit/"+ props.department.id;
        const DeleteLink = "registrar/college/delete/" + props.department.id
        setDeleted(false)
        const DeleteCollege = async () => {
            setFetching(true);
            setDeleted(true)
            const response = await axios({
                method: 'post',
                url: `/college/delete/${props.department.id}`
            }).then((response)=>{
                //console.log(response)
                setFetching(false)
            });

        }
        const editDepartment = async (e)  =>{
            setFetching(true);
            setUpdated(true)
            history.push({ pathname: `/college/department/edit/${props.department.id}`,state: props.department});
        }
        return(
            <tr>
                <td>{props.department.name}</td>
                <td><button type="button" onClick={(e)=>{editDepartment(e)}} className="btn btn-warning">Edit</button></td>
                <td><button onClick={DeleteCollege} type="button" className="btn btn-danger">Delete</button></td>
        
            </tr>
        )
    }



    useEffect(() => {
        

        (
            async()=>{
                const user = axios.get(`college/current`).then((response)=>{
                    setCollegeID(response.data.college_id)
                    
                });
                const getDepartment = axios.get(`college/${college_id}/departments`).then((response)=>{
                    setDepartments(response.data.department)
                    setFetching(false)
                })
               
            }
        )();

        return () => {
            
        }
    }, [fetching])

    //console.log(departments)

    return(
        <div style={{ position:'absolute',top:'1%',left:'30%' }}>
               
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0">Departments of your College in Addis Ababa Science and Technology University </h5>
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
                           return <Row department={department} key={department.id} />
                        })
                    }
                     {fetching && <tr><td colSpan="3"><center>Data</center></td></tr>}

                     
                    </tbody>
                </table>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Department

