import react, { useEffect, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
axios.defaults.headers.common['Authorization'] = localStorage.getItem('r_auth');



const Colleges = ()=> {
    const [colleges,setColleges] = useState([]);
    const [deleted,setDeleted] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [fetching,setFetching] = useState(true)
    const history = useHistory()

    
const Row = (props)=>{
    const EditLink = "registrar/college/edit/"+ props.college.id;
    const DeleteLink = "registrar/college/delete/" + props.college.id
    setDeleted(false)
    const DeleteCollege = async () => {
        setDeleted(true)
        const response = await axios({
            method: 'post',
            url: `registrar/colleges/delete/${props.college.id}`
          });
    }
    return(
        <tr>
            <td>{props.college.name}</td>
            <td><button type="button"  className="btn btn-warning">Edit</button></td>
            <td><button onClick={DeleteCollege} type="button" className="btn btn-danger">Delete</button></td>
       
         </tr>
    )
}


    
    const viewCollege = async () =>{
        const response = await axios.get('/registrar/colleges')
        .then((response)=>{
            setColleges( response.data.college)
            if(colleges != []){
                setFetching(false)
            }
           
        }) 
    }
    
   
    useEffect(() => {
        viewCollege()
        
        return () => {
            viewCollege()
            
        }
    }, [deleted,updated])
    console.log(colleges)

    return(
        <div style={{ position:'absolute',top:'1%',left:'30%' }}>
               
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0">Colleges of Addis Ababa Science and Technology University </h5>
            <p></p>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table id="example2" className="table table-striped table-bordered" style={{ width:"100%" }}>
                    <thead>
                        <tr>
                            <th>College</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        colleges.map((college)=>{
                          return <Row college={college} key={college.id}/>
                        })
                     } 

                     {fetching && <tr><td colSpan="3">...</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Colleges

