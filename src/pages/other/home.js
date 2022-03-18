import React, { useEffect, useState } from 'react'
import aastuLogo from '../../images/logo.png'
import axios from 'axios'
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
const Home = ()=>{



    const[college_id,setCollege_id] = useState()
    const[college_idERR,setCollege_idERR] = useState()
    const[department_id,setDepartment_id] =useState();
    const[department_idERR,setDepartment_idERR] =useState();
    const[semester,setSemester] = useState()
    const[semesterERR,setSemesterERR] = useState()
    const[year,setYear] = useState()
    const[yearERR,setYearERR] = useState()
    const[section,setSection] = useState()
    const[sectionERR,setSectionERR] = useState()


    const[loadedColleges,setLoadedColleges] = useState([]);
    const[loadedDepartment,setLoadedDepartment] = useState([]);
    const[loadedSection,setLoadedSection] = useState([]);
    const[loadedYear,setLoadedYear] = useState([]);

    const[examSearchResult,setExamSearchResult] = useState(null);
    const[fail,setFail] = useState(false)
    const Search =()=>{
                

        if(examSearchResult.length > 0){
            return(

                <div class="result">
                        <table class="table table-hover table-bordered" style={{ border: '3px solid lightblue' }}>
                            <thead>
                                <tr style={{ borderBottom: 'none' }}>
                                    <th scope="col" style={{ textAlign: 'center' }} colspan="11">Addis Ababa Science and Technology University</th>                                 
                                </tr>
                                <tr style={{ borderBottom: 'none'}}>
                                <th scope="col" style={{ textAlign: 'center' }} colspan="11">College of {examSearchResult[0].college_name}</th>                                 
                                </tr>
                                <tr style={{ borderBottom: 'none'}}>
                                <th scope="col" style={{ textAlign: 'center' }}  colspan="11">Department of {examSearchResult[0].department_name}</th>                                 
                                </tr>
                                <tr style={{ borderBottom: 'none'}}>
                                <th scope="col" style={{ textAlign: 'center' }}  colspan="11">Final Exam Schedule</th>                                 
                                </tr>
                                <tr>
                                <th scope="col" colspan="6"></th>                                 
                                <th scope="col" colspan="2">Acadamic Year : 2021</th>   
                                <th scope="col" colspan="4">Semester : {examSearchResult[0].semester} </th>                                 
                
                                </tr>
                                <tr>
                                <th scope="col" colspan="4"></th>                                 
                                <th scope="col" colspan="3">Program : Degree</th>   
                                <th scope="col" colspan="2">Enrollement : Regular</th>                                 
                
                                </tr>
                                <tr>
                                                                    
                                                                
        
                            </tr>
        
                            
                            <tr>
                                    <th scope="col" colspan="2">College: {examSearchResult[0].college_name}</th>
                                    <th scope="col" colspan="3">Department: {examSearchResult[0].department_name}</th>
                                    <th scope="col">Year: {examSearchResult[0].year}</th>
                                    <th scope="col" colspan="2"> {examSearchResult[0].class_name} </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="col" colSpan="11"></td>               
                        </tr> 
                        <tr>
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" colspan="2">Course Title</th>               
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Course Code</th>
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" colspan="2">Invigilator</th>
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" >Exam Date</th>
                            <th style={{ color: 'green',fontWeight: 'bold' }}  scope="col">Exam Date</th>
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Time Session</th>
                            <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Room</th>
                    </tr> 
                   
                   
                   {examSearchResult &&

                    examSearchResult.map((row)=>{
                        
                        
                        return (
                            <tr key={row.id}>
                                <th scope="col" colspan="2">{row.course_title}</th>               
                                <th scope="col">{row.course_code}</th>
                                <th scope="col" colspan="2">{row.invigilator_1} and {row.invigilator_2}</th>
                                <th scope="col">{row.exam_date}</th> 		
                                <th scope="col">{row.day} </th>
                                <th scope="col">{row.session}</th>
                                <th scope="col">B{row.block} R{row.room}</th>
                            </tr>
                            )
                    })

                   }
                   
                   
                    
                                    
                    </tbody>
                    </table>
                    
                        </div>
        
                )
        }else{
            return(
                <div>
                    <h2>Searching...</h2>
                </div>
            )
        }
        
    }

    const LoadCollege = ()=>{
        try{
            axios({
                method: 'get',
                url: '/users/get/colleges'
            }).then((response)=>{
                console.log(response.data)
                setLoadedColleges(response.data.college)
            })
    
        }catch(e){
            console.log(e)
        }
    }
    const LoadDepartment = ()=>{
        try{
            axios({
                method: 'post',
                url: '/users/get/departments',
                data: {
                    'college_id':college_id,
                }
            }).then((response)=>{
                console.log(response.data)
                setLoadedDepartment(response.data.department)
            })
    
        }catch(e){
            console.log(e)
        }
    }
    const LoadSection = ()=>{
        try{
            axios({
                method: 'post',
                url: '/users/get/sections',
                data: {
                    'department_id':department_id,
                    'year': year,
                    'semester': semester
                }
            }).then((response)=>{
                console.log(response.data)
                setLoadedSection(response.data.section)
            })
    
        }catch(e){
            console.log(e)
        }
    }
    const LoadYear = ()=>{
        
    }



    const SearchExam = async (e)=>{
        e.preventDefault();

    if(college_id == undefined || department_id== undefined || semester== undefined || year== undefined || section== undefined){
        if(college_id == undefined){
            setCollege_idERR('Please Select a College');

        }
        if(department_id == undefined){
            setDepartment_idERR('Please Select a Department');
        }
        if(semester == undefined){
            setSemesterERR('Please Select a Semester');
        }
        if(year == undefined){
            setYearERR('Please Select a Year');
        }
        if(section == undefined){
            setSectionERR('Please Select a Section');
        }
    }else{
       

        try{
            axios({
                method: 'post',
                url: '/users/get/exam/schedule',
                data: {
                    'college_id': college_id,
                    'department_id':department_id,
                    'semester':semester,
                    'year':year,
                    'section':section,
                }
            }).then((response)=>{
                console.log(response.data)
                if(response.status ==200){
                    setFail(false); 
                }
                setExamSearchResult(response.data.exam_schedule)
                if(response.data.Message == 'Fail'){
                    setFail(true);
                }
            })
    
        }catch(e){
            console.log(e)
        }

       

    }
        

    }



    useEffect(() => {
        LoadCollege()
        LoadDepartment()
        LoadSection()
    }, [college_id,department_id,year,semester,section])


    return (
        <div className="dashboard-main-wrapper">

        
         
        <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top" style={{ height:'13.5vh' }}>
            <a className="navbar-brand" href="index.html">
            <img src={aastuLogo} style={{width:'5em',borderRadius: '50%'}} alt="AASTU"/>
            AASTU Class and Exam Scheduling System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto navbar-right-top">
                    <li className="nav-item dropdown nav-user" style={{ backgroundColor: 'white' }}>
                        <a className="nav-link nav-user-img" href="" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/user_logo.png" alt="" class="user-avatar-md rounded-circle" /></a>
                        <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                           
                            <a className="dropdown-item" href="/admin/login"><i className="fas fa-user mr-2"></i>Registrar</a>
                            <a className="dropdown-item" href="/college/login"><i className="fas fa-user mr-2"></i>College Dean</a>
                            <a className="dropdown-item" href="/department/login"><i className="fas fa-user mr-2"></i>Department</a>

                        </div>
                      
                    </li>
                </ul>
            </div>
        </nav>
    </div>


        <div style={{ position:'absolute',left: '12em',top: '-12em' ,width: '80em'}}>
            <div class="col-lg-12">
            <div class="card">
             
                <div class="card-header">
                    <h3 class="card-header-title">Search Schedule</h3>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="form-valide" action="#" method="post">
                            <div class="row">
                            <div class="col-xl-12">
                            
                                <div class="form-group row">
                            
                                    <div>
                                      
                                        {
                                            examSearchResult && 

                                            <Search />
                                        }

                                        {fail &&
                                            <InputAlert message="Exam Schedule Not Found.Please Try again with valid Information"/>
                                        }
                                    </div>

                                </div>
                            </div>

                            <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">College
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setCollege_id(e.target.value);setCollege_idERR('')}} value={college_id} class="form-control" id="val-year" name="val-skill">
                                        
                                        <option >Please select</option>
                                        
                                        {
                                            loadedColleges  && 
                                            loadedColleges.map((college)=>{
                                                return <option key={college.id} value={college.id}>{college.name}</option>
                                            })
                                        }
                                        
                                       
                                       
                                       
                                    </select>
                                    {college_idERR && <InputAlert message={college_idERR} />}

                                </div>
                            </div>

                           
                                   
                                </div>
                                <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Department
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setDepartment_id(e.target.value);setDepartment_idERR('')}} value={department_id} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        {
                                            loadedDepartment  && 
                                            loadedDepartment.map((department)=>{
                                                return <option key={department.id} value={department.id}>{department.name}</option>
                                            })
                                        }
                                        
                                       
                                    </select>
                                   
                                    {department_idERR && <InputAlert message={department_idERR} />}
                                </div>
                            </div>

                           
                                   
                                </div>

                                <div class="col-xl-12">
                                   
                                   
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-has-lab"> Semester
                                   
                                </label>

                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setSemester(e.target.value);setSemesterERR('')}} value={semester} class="form-control" id="val-has-lab" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">I</option>
                                        <option value="2">II</option>
                                       
                                    </select>
                                   
                                    {semesterERR && <InputAlert message={semesterERR} />}
                                </div>
                            </div>
                            </div>
                                <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Batch
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setYear(e.target.value);setYearERR('')}} value={year} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1 Year</option>
                                        <option value="2">2 Year</option>
                                        <option value="3">3 Year</option>
                                        <option value="4">4 Year</option>
                                        <option value="5">5 Year</option>
                                       
                                       
                                    </select>
                                   
                                    {yearERR && <InputAlert message={yearERR} />}
                                </div>
                            </div>

                            
                           
                                   
                               
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Section 
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{setSection(e.target.value);setSectionERR('')}} value={section} class="form-control" id="val-year" name="val-skill">
                                       
                                    <option >Please select</option>
                                        {
                                            loadedSection  && 
                                            loadedSection.map((section)=>{
                                                return <option key={section.id} value={section.class_name}>{section.class_name}</option>
                                            })
                                        }
                                                

                                    </select>
                                   
                                    {sectionERR && <InputAlert message={sectionERR} />}
                                </div>
                            </div>

                        
                           
                            </div>
                                </div>
                           

                           
                                    
                                    <div class="form-group row">
                                        <div class="col-lg-8 ml-auto">
                                            <button type="submit" onClick={(e)=>{}} style={{padding: '1em' ,width:'15em',}} class="btn btn-success">Search Class Schedule</button>
                                            
                                     
                                            <button type="submit" onClick={(e)=>{SearchExam(e)}} style={{padding: '1em' ,marginLeft: '1em',width:'15em',}} class="btn btn-info">Search Exam Schedule</button>
                                            
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
export default Home