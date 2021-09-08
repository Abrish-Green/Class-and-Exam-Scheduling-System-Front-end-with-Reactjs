import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash'

const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.message}
          
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
    
    const[semester,setSemester] = useState('')
    const[semesterErr,setSemesterErr] = useState(false)
    
    const[hasLab,setHasLab] = useState('')
    const[hasLabErr,setHasLabErr] = useState(false)
    
    const[hasLecture,setHasLecture] = useState('')
    const[hasLectureErr,setHasLectureErr] = useState(false)
    
    const[courseType,setCourseType] = useState('')
    const[courseTypeErr,setCourseTypeErr] = useState(false)
    
    const[courseCreditHour,setCourseCreditHour] = useState('')
    const[courseCreditHourErr,setCourseCreditHourErr] = useState(false)
    
    const[validateOnUpdate,setValidateOnUpdate] = useState(false)

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
        if(_.isEmpty(semester)){
            setSemesterErr('Please Provide a Semester')
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

    const CreateCourse = (e)=>{
        e.preventDefault()

        console.log(validate())
      
    }

    useEffect(() => {
          
    }, [])
    


        return(
            <div style={{ position:'absolute', top:'5%',left: '30%',width: '40%' }}>
            <div class="col-lg-12">
            <div class="card">
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

                            <div class="form-group row">
                            <label class="col-lg-4 col-form-label" for="val-skill">Semester
                               
                            </label>
                            <div class="col-lg-12">
                                <select onClick={(e)=>{setSemesterErr(false);makeBorderAlert('val-semester',e.target.value);setSemester(e.target.value)}} class="form-control" id="val-semester" name="val-skill">
                                    <option >Please select</option>
                                    <option value="1">I</option>
                                    <option value="2">II</option>
                                   
                                </select>
                                {semesterErr && <InputAlert message={semesterErr}/>}
    
                            </div>
                         </div>
                                   
                                </div>
                                <div class="col-xl-12">
                                   
                                   
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-has-lab"> Has Lab class  
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setHasLabErr(false);  makeBorderAlert('val-has-lab',e.target.value);makeBorderAlert('val-has-lab',hasLab);setHasLab(e.target.value)}} class="form-control" id="val-has-lab" name="val-skill">
                                      
                                        <option value="yes" defaultValue>Yes</option>
                                        <option value="no">No</option>
                                       
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
                                    <select onClick={(e)=>{setCourseTypeErr(false); makeBorderAlert('val-course-type',e.target.value);setCourseType(e.target.value)}} class="form-control" id="val-course-type" name="val-skill">
                                        <option value="major">Major Course</option>
                                        <option value="common">Common Course</option>
                                        <option value="supporting">Supporting Course</option>
                                    
                                    </select>
                                
                                {courseTypeErr && <InputAlert message={courseTypeErr}/>}

                                    
                                </div>
                            </div>
                                    
                                   
                                   
                                    <div class="form-group row">
                                        <label class="col-lg-4 col-form-label" for="val-credit-hour">Credit Hour
                                        </label>
                                        <div class="col-lg-12">
                                            <input type="text"  onChange={(e)=>{setCourseCreditHourErr(false);makeBorderAlert('val-credit-hour',e.target.value);setCourseCreditHour(e.target.value)}} class="form-control" id="val-credit-hour" name="val-digits" placeholder=" Credit Hour" />
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
        )
    

}

export default AddCourse