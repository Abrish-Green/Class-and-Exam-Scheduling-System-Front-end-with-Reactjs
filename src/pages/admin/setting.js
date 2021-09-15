import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Layout from './layout'



const Success = (props)=>{
    return(
        <div className="alert alert-success  alert-dismissible fade show" role="alert">
          {props.message}
         
        </div>
    )
}
const Sending = (props)=>{
    return(
        <div className="alert alert-info  alert-dismissible fade show" role="alert">
          {props.message}
          
        </div>
    )
}
const InputAlert = (props)=>{
    return(
        <div style={{width: '25em'}}  className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.message}
          
        </div>
    )
}


const Setting =()=>{

   
    const[exam_starting_date,setExamStartingDate] = useState()
    const[exam_ending_date,setExamEndingDate] = useState()
    const[exam_starting_date_err,setExamStartDateErr] = useState()
    const[exam_ending_date_err,setExamEndingDateErr] = useState()
    const[success,setSuccess] = useState(false)
    const[semester,setSemester] = useState()
    const[semesterErr,setSemesterErr] = useState()

    const[class_starting_date,setClassStartingDate] = useState()
    const[class_ending_date,setClassEndingDate] = useState()
    const[class_starting_date_err,setClassStartDateErr] = useState()
    const[class_ending_date_err,setClassEndingDateErr] = useState()
    const[successClass,setSuccessClass] = useState(false)
    const[semesterClass,setSemesterClass] = useState()
    const[semesterErrClass,setSemesterErrClass] = useState()

    const history = useHistory()



    const ExamDateSetting =async (e)=>{
        e.preventDefault()
      

        if(exam_starting_date == undefined){
            setExamStartDateErr(true)
            
        }
        if(exam_ending_date == undefined){
            setExamEndingDateErr(true)
        }
        if(semester == undefined){
            setSemesterErr(true)
        }

        if(exam_starting_date != undefined && exam_ending_date != undefined ){
            setExamStartDateErr(false)
            setExamEndingDateErr(false)
            setSemesterErr(false)

            await axios({
                method: 'post',
                url: '/registrar/set/exam/date',
                data:{
                    'starting_date' : exam_starting_date ,
                    'ending_date' : exam_ending_date,
                    'semester' : semester,
                }
            }).then((response)=>{
                console.log(response.data.setting)
                if(response.data.setting) setSuccess(true);
               
        });


            console.log(exam_starting_date ,exam_ending_date)
        }
        


    }

    return (
    <div>

        {Layout && <Layout />}

        <div style={{ position:'absolute',top: '7em',left:'20em',width:'70em'}}>
            <div className="card" >
            <h3 className="card-header">Setting</h3>
                <div className="card-body">
                {success && <Success message="Exam Date Successfully Set" />}
               
                <div className="card" >
            <h3 className="card-header">Class Settings</h3>
                <div className="card-body">
               
                   
                 
                   
                <form id="form" data-parsley-validate="" >
                 
                        <div className="form-group row">
                            
                            <p style={{ marginLeft:'1em' }}>Please Enter Exam Starting Data and Ending Date</p> 
                          <br />
                          <div className="col-9 col-lg-12"  style={{ padding:'1em' }}>
                                <label> Semester</label>
                                <input id="inputPassword2" type="number" style={{width: '25em'}} required="" placeholder="Semester" onChange={(e)=>setSemester(e.target.value)} className="form-control" />
                                {semesterErr && <InputAlert message="Please Provide a valid Information" /> }
                            </div>
                            <div className="col-9 col-lg-12"  style={{ padding:'1em' }}>
                                <label> Starting Date :</label>
                                <input id="inputPassword2" type="date" style={{width: '25em'}} required="" placeholder="Dean Email" onChange={(e)=>setExamStartingDate(e.target.value)} className="form-control" />
                                {exam_starting_date_err && <InputAlert message="Please Provide a valid Information" /> }
                            </div>
                            <div className="col-9 col-lg-12" style={{ padding:'1em' }}>
                                <label> Ending Date :</label>
                                <input id="inputPassword2" type="date" style={{width: '25em'}} required="" placeholder="Dean Email" onChange={(e)=>setExamEndingDate(e.target.value)} className="form-control" />
                                {exam_ending_date_err && <InputAlert message="Please Provide a valid Information" /> }

                            </div>
                            <div className="col-sm-6 pl-0">
                            <p className="text-left">
                                <button type="submit" style={{ marginLeft:'1em',padding: '.6em 3em' }} onClick={(e)=>{}} className="btn btn-space btn-success">Save</button>
                            </p>
                        </div>
                           
                        </div>

                          
                    </form>
                </div>
            </div>
            <div className="card" >
            <h3 className="card-header">Exam Settings</h3>
                <div className="card-body">
               
                   
                <form id="form" data-parsley-validate="" >
                 
                        <div className="form-group row">
                            
                            <p style={{ marginLeft:'1em' }}>Please Enter Exam Starting Data and Ending Date</p> 
                          <br />
                          <div className="col-9 col-lg-12"  style={{ padding:'1em' }}>
                                <label> Semester</label>
                                <input id="inputPassword2" type="number" style={{width: '25em'}} required="" placeholder="Semester" onChange={(e)=>setSemester(e.target.value)} className="form-control" />
                                {semesterErr && <InputAlert message="Please Provide a valid Information" /> }
                            </div>
                            <div className="col-9 col-lg-12"  style={{ padding:'1em' }}>
                                <label> Starting Date :</label>
                                <input id="inputPassword2" type="date" style={{width: '25em'}} required="" placeholder="Dean Email" onChange={(e)=>setExamStartingDate(e.target.value)} className="form-control" />
                                {exam_starting_date_err && <InputAlert message="Please Provide a valid Information" /> }
                            </div>
                            <div className="col-9 col-lg-12" style={{ padding:'1em' }}>
                                <label> Ending Date :</label>
                                <input id="inputPassword2" type="date" style={{width: '25em'}} required="" placeholder="Dean Email" onChange={(e)=>setExamEndingDate(e.target.value)} className="form-control" />
                                {exam_ending_date_err && <InputAlert message="Please Provide a valid Information" /> }

                            </div>
                            <div className="col-sm-6 pl-0">
                            <p className="text-left">
                                <button type="submit" style={{ marginLeft:'1em',padding: '.6em 3em' }} onClick={(e)=>{ExamDateSetting(e)}} className="btn btn-space btn-success">Save</button>
                            </p>
                        </div>
                           
                        </div>

                          
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Setting