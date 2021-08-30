import react, { useEffect, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import date from 'date-and-time';
import React from 'react';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true; 
axios.defaults.headers.common['Authorization'] = localStorage.getItem('d_auth');



const Instructors = ()=> {
    const [instructors,setinstructors] = useState([{}]);
    const [deleted,setDeleted] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [fetching,setFetching] = useState(true)
    const [user,setUser] = useState('')
    const history = useHistory()
    const[department_id,setDepartmentID] = useState()
    const[departmentName,setdepartmentName] = useState('')
    const[id,setId] = useState(0)

    

    
    class Row extends React.Component {


        constructor(props){
            super(props);
            this.state = {
                 deleted : false,
                 id : 0,
                 departmentName : ''
            }
            this.DeleteInstructor = this.DeleteInstructor.bind(this)
            this.EditInstructor = this.EditInstructor.bind(this)
        
        }
    


         DeleteInstructor ()  { 
            (
                async()=>{
                    setFetching(true);
                    setDeleted(true)
                    const response = await axios({
                        method: 'post',
                        url: `/department/instructor/delete/${this.props.instructor.id}`
                    }).then((response)=>{
                        //console.log(response)
                        setFetching(false)
                    });
        
                }
            )();
        }

        EditInstructor(){
            (
                async(e)=>{
                    setFetching(true);
                    setUpdated(true)
                   // console.log('edit')
                    history.push({ pathname: `/department/instructor/edit/${this.props.instructor.id}`,state: this.props.instructor});
               
                }
            )();
        }
      
        render(){
           
            return(
                <tr>
                    
                    <td>{this.props.instructor.name}</td>
                    <td>{this.props.instructor.email}</td>   
                    <td><button type="button" onClick={(e)=>{this.EditInstructor(e)}} className="btn btn-warning">Edit</button></td>
                    <td><button onClick={this.DeleteInstructor} type="button" className="btn btn-danger">Delete</button></td>
                </tr>
            )
        }

       
    }


   
    useEffect(() => {
       
        (
            
            async()=>{
                
                
                const user =await axios.get(`department/current`).then((response)=>{
                 
                 
                  //setDepartmentID(response.data.id)
                  //console.log(response.data)
                  setId(response.data.id);
                 
                 axios({
                    method: 'get',
                    url: `/department/${id}/instructors`
                }).then((response)=>{
                
                        setinstructors(response.data.instructors)
                        //console.log(response)
                        setFetching(false)
                      
                });
               
                });
              
               
         
               
               
               
            }
        )();

        return () => {
                      
        }
    }, [fetching])

    

    return(
        <div style={{ position:'absolute',top:'1%',left:'15%' }}>
               
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0">Instructors of your college in Addis Ababa Science and Technology University </h5>
            <p></p>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table id="example2" className="table table-striped table-bordered" style={{ width:"100%" }}>
                    <thead>
                        <tr>
                            
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        instructors.length >=1 ? 
                        instructors.map((instructor)=>{
                           return <Row instructor={instructor} key={instructor.id} />
                        })
                        :
                        <tr><td colSpan="6"><center>No Data</center></td></tr>
                    }
                     {fetching && <tr><td colSpan="6"><center>Loading...</center></td></tr>}

                     
                    </tbody>
                </table>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Instructors

