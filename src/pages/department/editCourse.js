import axios from 'axios'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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


const EditCourse = (props)=>{ 

    

    const course = props.location.state

    const[courseTitle,setCourse] = useState(course.course_title)
    const[courseTitleErr,setCourseTitleErr] = useState(false)
    
    const[courseCode,setCourseCode] = useState(course.course_code)
    const[courseCodeErr,setCourseCodeErr] = useState(false)
    
    const[year,setYear] = useState(course.year)
    const[yearErr,setYearErr] = useState(false)
    
    const[semester,setSemester] = useState(course.semester)
    const[semesterErr,setSemesterErr] = useState(false)
    
    const[hasLab,setHasLab] = useState(course.course_has_lab)
    const[hasLabErr,setHasLabErr] = useState(false)
    
    const[hasLecture,setHasLecture] = useState(course.course_has_lecture)
    const[hasLectureErr,setHasLectureErr] = useState(false)
    
    const[courseType,setCourseType] = useState(course.course_type)
    const[courseTypeErr,setCourseTypeErr] = useState(false)
    
    const[courseCreditHour,setCourseCreditHour] = useState(course.course_credit_hour)
    const[courseCreditHourErr,setCourseCreditHourErr] = useState(false)
    
    const[validateOnUpdate,setValidateOnUpdate] = useState(false)

    const[department_id,setDepartmentID] = useState()
    
    const[success,setSuccess] = useState(false)
    const[notSuccess,setNotSuccess] = useState(false)
    
    const makeBorderAlert = (tagId,status)=>{
        
        const element = document.getElementById(tagId);

        if(status == ''){
            element.style.border = '1px solid red'
        }else{
            element.style.border = '1px solid green'
        }
        
    }
   

    const CreateCourse = async (e)=>{
        e.preventDefault()

    try{
            axios({
                method: 'post',
                url: `/department/course/edit/${course.id}`,
                data:{
                    'course_title' : courseTitle,
                    'year' : year,
                    'course_code' : _.toUpper(courseCode),
                    'course_credit_hour' : courseCreditHour,
                    'course_has_lab' : hasLab,
                    'course_has_lecture' : hasLecture,
                    'course_type' : courseType,
                    'course_department_id' : department_id,

                }
            }).then((response)=>{
                //console.log(response.data.Error_detail)
                
               
                if(response.data.Error_detail){    
                    setNotSuccess('Something Went Wrong Please Try Again...') 
                }else{
                    setNotSuccess(false)
                    setSuccess('Course Edited Successfully')
                    setTimeout(()=>{ props.history.push({ pathname: `/department/courses`})},3000)
                   
                }

                
            }).catch((e)=>{
                
                setNotSuccess(true) 
            })
       

    }catch(e){
        //console.log(e)
    }
      
    }


    useEffect(() => {
          
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                   // console.log(response.data.id)
                    setDepartmentID(response.data.id)
                })
            }
        )();
        //console.log(props.location.state)
    }, [department_id])
    


        return(
            <div>
           {Layout &&  <Layout />}
       
    
            <div style={{ position: 'absolute', top: '8em',left: '30em',height: '84vh',overflowY: 'scroll'}}>
           
            <div class="col-lg-12">
            <div class="card">
                {success && <Success message={success}/>}
                {notSuccess && <InputAlert message={notSuccess} />}
                <div class="card-header">
                    <h3 class="card-header-title">Edit Course</h3>
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
                                            <input type="text" value={courseTitle} onChange={(e)=>{setCourseTitleErr(false);  makeBorderAlert('val-course-title',e.target.value);setCourse(e.target.value)}} class="form-control" id="val-course-title" name="val-username" placeholder="Course Title" />
                                            {courseTitleErr && <InputAlert message={courseTitleErr}/>}
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="val-username">Course Code
                                       
                                    </label>
                                    <div class="col-lg-12">
                                        <input type="text" value={courseCode} onChange={(e)=>{setCourseCodeErr(false);makeBorderAlert('val-course-code',e.target.value);setCourseCode(e.target.value)}} class="form-control" id="val-course-code" name="val-username" placeholder="Course Code" />
                                        {courseCodeErr && <InputAlert message={courseCodeErr}/>}

                                        </div>
                                </div>

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Year
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select value={year} onClick={(e)=>{setYearErr(false); makeBorderAlert('val-year',e.target.value);setYear(e.target.value)}} class="form-control" id="val-year" name="val-skill">
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
                                    <select value={hasLab} onClick={(e)=>{setHasLabErr(false);  makeBorderAlert('val-has-lab',e.target.value);makeBorderAlert('val-has-lab',hasLab);setHasLab(e.target.value)}} class="form-control" id="val-has-lab" name="val-skill">
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
                                <select value={hasLecture} onClick={(e)=>{setHasLectureErr(false);makeBorderAlert('val-has-lecture',e.target.value);setHasLecture(e.target.value)}} class="form-control" id="val-has-lecture" name="val-skill">
                                    <option defaultValue>Please select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                   
                                </select>
                                {hasLectureErr && <InputAlert message={hasLectureErr}/>}

                            </div>
                        </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-course-type"> Course Type   
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select value={courseType} onClick={(e)=>{setCourseTypeErr(false); makeBorderAlert('val-course-type',e.target.value);setCourseType(e.target.value)}} class="form-control" id="val-course-type" name="val-skill">
                                        <option defaultValue>Please select</option>
                                        <option value="Major_course">Major Course</option>
                                        <option value="Common_course">Common Course</option>
                                        <option value="Supporting_course">Supporting Course</option>
                                    
                                    </select>
                                
                                {courseTypeErr && <InputAlert message={courseTypeErr}/>}

                                    
                                </div>
                            </div>
                                 
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-credit-hour">Credit Hour
                                        </label>
                                        <div class="col-lg-12">
                                            <input type="number" value={courseCreditHour}  onChange={(e)=>{setCourseCreditHourErr(false);makeBorderAlert('val-credit-hour',e.target.value);setCourseCreditHour(e.target.value)}} class="form-control" id="val-credit-hour" name="val-digits" placeholder=" Credit Hour" />
                                        {courseCreditHourErr && <InputAlert message={courseCreditHourErr}/>}

                                        </div>
                                    </div>
                                    
                                   
                                    
                                    <div class="form-group row">
                                        <div class="col-lg-8 ml-auto">
                                            <button type="submit" onClick={(e)=>{CreateCourse(e)}} style={{float: 'center'}} class="btn btn-success">Save</button>
                                            <Link to="/department/courses" style={{margin: '2px 6px'}} class="btn btn-danger">Cancel</Link>
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

export default EditCourse