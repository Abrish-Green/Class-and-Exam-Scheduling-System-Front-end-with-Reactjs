import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import _, { toUpper } from 'lodash'
import axios from 'axios';
import Layout from './layout'


const Success = (props)=>{
    return(
        <div className="alert alert-success  alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning  alert-dismissible fade show" role="alert">
          {props.message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

const AddCourse = ()=>{ 


    const[courseTitle,setCourse] = useState('')
    const[courseTitleErr,setCourseTitleErr] = useState(false)
    
    const[courseCode,setCourseCode] = useState('')
    const[courseCodeErr,setCourseCodeErr] = useState(false)
    
    const[year,setYear] = useState('')
    const[yearErr,setYearErr] = useState(false)
    
    
    const[hasLab,setHasLab] = useState('')
    const[hasLabErr,setHasLabErr] = useState(false)
    
    const[hasLecture,setHasLecture] = useState(1)
    const[hasLectureErr,setHasLectureErr] = useState(false)
    
    const[courseType,setCourseType] = useState('')
    const[courseTypeErr,setCourseTypeErr] = useState(false)
    
    const[courseCreditHour,setCourseCreditHour] = useState('')
    const[courseCreditHourErr,setCourseCreditHourErr] = useState(false)
    
    const[validateOnUpdate,setValidateOnUpdate] = useState(false)

    const[department_id,setDepartmentID] = useState()
    const[course_id,setCourseID] = useState()
    const[success,setSuccess] = useState(false)
    const[notSuccess,setNotSuccess] = useState(false)

    const[courseTracker,setCourseTracker] = useState('Major_course')
    const[departments,setDepartments] = useState([])
    const makeBorderAlert = (tagId,status)=>{
        
        const element = document.getElementById(tagId);

        if(status == ''){
            element.style.border = '1px solid red'
        }else{
            element.style.border = '1px solid green'
        }
        
    }
    const validate = () => {
        setValidateOnUpdate(true)
        const response = []
        if(_.isEmpty(courseTitle)){
            setCourseTitleErr('Please Provide Course Title')

            response.push(false)
        }
        if(_.isEmpty(courseCode)){
            setCourseCodeErr('Please Provide Course Code')
            response.push(false)
        }
        if(_.isEmpty(year)){
            setYearErr('Please Provide a Year')
            response.push(false)
        }
        if(_.isEmpty(hasLab)){
            setHasLabErr('Please Select an option ')
            response.push(false)
        }
        if(_.isEmpty(hasLecture)){
            setHasLectureErr('Please Select an option')
            response.push(false)
        }
        if(_.isEmpty(courseType)){
            setCourseTypeErr('Please Select an Course Type')
            response.push(false)
        }
        if(_.isEmpty(courseCreditHour)){
            setCourseCreditHourErr('Please Provide a Course Credit Hour')
            response.push(false)
        }
        if(response.length == 0){
            setValidateOnUpdate(false)
            return true;
        }else{
            return false;
        }
       
    }


    const SelectDepartment = ()=>{

        return(
                <div>
                    <div class="col-lg-12" style={{ width: '25em',marginLeft: '9.5em',marginTop: '1em' }}>
                    <label class="col-lg-4 col-form-label">Select Course Owner
                                           
                    </label>
                        <select onClick={(e)=>{}} class="form-control" id="val-year" name="val-skill">

                            {departments &&
                                departments.map((department)=>{
                                    
                                    return <option value={department.id}>{department.name}</option>
                                })
                            }
                        </select>
                    </div>
                        
                </div>

        )
    }




    const CreateCourse = async (e)=>{
        e.preventDefault()

        try{
        const isValidated = validate()

        console.log('is validated',isValidated)

        if(isValidated){
           await axios({
                method: 'post',
                url: '/department/course/create',
                data:{
                    'course_title' : courseTitle,
                    'year' : year,
                    'course_code' : _.toUpper(courseCode),
                    'course_credit_hour' : courseCreditHour,
                    'course_has_lab' : hasLab,
                    'course_has_lecture' : hasLecture,
                    'course_type' : courseType,
                    'department_id' : department_id,

                }
            }).then((response)=>{
                //console.log(response.data.Error_detail)
                
                setNotSuccess(false)
                setSuccess(false)
                console.log(response.data)
                if(response.data.course){
                    setSuccess('Course Create Successfully')
                    setCourseID(response.data.course.id)
                    console.log('success')
                     axios({
                        method: 'post',
                        url: '/department/course/owner',
                        data:{
                            'course_id' : response.data.course.id,
                            'department_id' : department_id,
        
                        }
                    }).then((response)=>{
                       console.log(response)
                    })
                }
                if(response.data.Error_detail){
                    
                    setNotSuccess('Something Went Wrong Please Try Again...') 
                }

                if(response.data.Message == 'Course Already Exists'){
                    setSuccess(false)
                    setNotSuccess('Course Already Exists') 
                    
                }
            }).catch((e)=>{
                
                setNotSuccess(true) 
            })

           


        }else{
         //   console.log('not validated')
        }

    }catch(e){
        //console.log(e)
    }
      
    }


    useEffect(() => {
          
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    console.log(response.data.id)
                    setDepartmentID(response.data.id)
                })

                await axios.get('/department/all',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    console.log(response.data.id)
                    setDepartments(response.data.department)
                    console.log(response.data.department)
                })
            }
        )();
    }, [department_id])
    


        return(
            <div>
            
            {Layout && <Layout />}
            <div style={{ position:'absolute', top:'15%',left: '30%',width: '40%',height: '90vh',overflowY:'scroll' }}>
            <div class="col-lg-12">
            <div class="card">
                {success && <Success message={success}/>}
                {notSuccess && <InputAlert message={notSuccess} />}
                <div class="card-header">
                    <h3 class="card-header-title">Create Course</h3>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="form-valide" action="#" method="post">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-username">Course Title
                                           
                                        </label>
                                        <div class="col-lg-12">
                                            <input type="text" onChange={(e)=>{setCourseTitleErr(false);  makeBorderAlert('val-course-title',e.target.value);setCourse(e.target.value)}} class="form-control" id="val-course-title" name="val-username" placeholder="Course Title" />
                                            {courseTitleErr && <InputAlert message={courseTitleErr}/>}
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="val-username">Course Code
                                       
                                    </label>
                                    <div class="col-lg-12">
                                        <input type="text"  onChange={(e)=>{setCourseCodeErr(false);makeBorderAlert('val-course-code',e.target.value);setCourseCode(e.target.value)}} class="form-control" id="val-course-code" name="val-username" placeholder="Course Code" />
                                        {courseCodeErr && <InputAlert message={courseCodeErr}/>}

                                        </div>
                                </div>

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Year
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setYearErr(false); makeBorderAlert('val-year',e.target.value);setYear(e.target.value)}} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                       
                                    </select>
                                    {yearErr && <InputAlert message={yearErr}/>}

                                </div>
                            </div>

                           
                                   
                                </div>
                                <div class="col-xl-12">
                                   
                                   
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-has-lab"> Has Lab class  
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setHasLabErr(false);  makeBorderAlert('val-has-lab',e.target.value);makeBorderAlert('val-has-lab',hasLab);setHasLab(e.target.value)}} class="form-control" id="val-has-lab" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                       
                                    </select>
                                    {hasLabErr && <InputAlert message={hasLabErr}/>}

                                </div>
                            </div>

                           

                            <div class="form-group row">
                            <label class="col-lg-6 col-form-label" for="val-has-lecture"> Has Class Lecture  
                               
                            </label>
                            <div class="col-lg-12">
                                <select onClick={(e)=>{setHasLectureErr(false);makeBorderAlert('val-has-lecture',e.target.value);setHasLecture(e.target.value)}} class="form-control" id="val-has-lecture" name="val-skill">
                                    <option value="1" defaultValue>Yes</option>
                                    <option value="0">No</option>
                                   
                                </select>
                                {hasLectureErr && <InputAlert message={hasLectureErr}/>}

                            </div>
                        </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-course-type"> Course Type   
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{ setCourseTracker(e.target.value);setCourseTypeErr(false); makeBorderAlert('val-course-type',e.target.value);setCourseType(e.target.value)}} class="form-control" id="val-course-type" name="val-skill">
                                       
                                        <option value="Major_course" defaultValue>Major Course</option>
                                        <option value="Common_course">Common Course</option>
                                        <option value="Supporting_course">Supporting Course</option>
                                    
                                    </select>
                                
                               

                                    
                                </div>
                                {courseTracker != 'Major_course' && <SelectDepartment />} 
                            </div>

                                 
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-credit-hour">Credit Hour
                                        </label>
                                        <div class="col-lg-12">
                                            <input type="number"  onChange={(e)=>{setCourseCreditHourErr(false);makeBorderAlert('val-credit-hour',e.target.value);setCourseCreditHour(e.target.value)}} class="form-control" id="val-credit-hour" name="val-digits" placeholder=" Credit Hour" />
                                        {courseCreditHourErr && <InputAlert message={courseCreditHourErr}/>}

                                        </div>
                                    </div>
                                    
                                   
                                    
                                    <div class="form-group row">
                                        <div class="col-lg-8 ml-auto">
                                            <button type="submit" onClick={(e)=>{CreateCourse(e)}} style={{float: 'center'}} class="btn btn-success">Save</button>
                                            <Link to="/" style={{margin: '2px 6px'}} class="btn btn-danger">Cancel</Link>
                                        </div>
                                    </div>
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

export default AddCourse