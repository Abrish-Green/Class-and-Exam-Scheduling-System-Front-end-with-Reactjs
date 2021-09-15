import React from 'react'
import aastuLogo from '../../images/logo.png'

const Home = ()=>{





    const Search =()=>{
                


        return(
        <div class="result">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr style={{ borderBottom: 'none' }}>
                            <th scope="col" style={{ textAlign: 'center' }} colspan="11">Addis Ababa Science and Technology University</th>                                 
                        </tr>
                        <tr style={{ borderBottom: 'none'}}>
                        <th scope="col" style={{ textAlign: 'center' }} colspan="11">College of Electrical and Mechanical Engineering</th>                                 
                        </tr>
                        <tr style={{ borderBottom: 'none'}}>
                        <th scope="col" style={{ textAlign: 'center' }}  colspan="11">Department of Software Engineering</th>                                 
                        </tr>
                        <tr style={{ borderBottom: 'none'}}>
                        <th scope="col" style={{ textAlign: 'center' }}  colspan="11">Final Exam Schedule</th>                                 
                        </tr>
                        <tr>
                        <th scope="col" colspan="6"></th>                                 
                        <th scope="col" colspan="2">Acadamic Year : 2021</th>   
                        <th scope="col" colspan="4">Semester : I </th>                                 
        
                        </tr>
                        <tr>
                        <th scope="col" colspan="4"></th>                                 
                        <th scope="col" colspan="3">Program : Degree</th>   
                        <th scope="col" colspan="2">Enrollement : Regular</th>                                 
        
                        </tr>
                        <tr>
                                                            
                            <th scope="col" colspan="10" style={{ textAlign: 'center' }}>From June 30, 2021 G.C  - July 9, 2021 G.C</th>   
                                                        

                    </tr>

                    
                    <tr>
                            <th scope="col" colspan="2">College: Electrical and Mechanical Engineering</th>
                            <th scope="col" colspan="3">Department: Software Engineering</th>
                            <th scope="col">Year: II</th>
                            <th scope="col" colspan="2">Group I </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="col" colSpan="11"></td>               
                </tr> 
                <tr>
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" colspan="2">Course Title</th>               
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Course Code</th>
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" >Invigilator</th>
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col" colspan="2">Exam Date</th>
                    <th style={{ color: 'green',fontWeight: 'bold' }}  scope="col">Exam Date</th>
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Time Session</th>
                    <th style={{ color: 'green',fontWeight: 'bold' }} scope="col">Room</th>
            </tr> 
            <tr>

                    <th scope="col" colspan="2">Global Trend</th>               
                    <th scope="col">GLaf1002</th>
                    <th scope="col" colspan="2">Abdi M. and Mesfin F</th>
                    <th scope="col">30-Jun-21</th> 		
                    <th scope="col">Wednsday </th>
                    <th scope="col">8:30 AM (Morning)</th>
                    <th scope="col">B57 R101</th>
            </tr>   
            <tr>

                    <th scope="col" colspan="2">Global Trend</th>               
                    <th scope="col" >GLaf1002</th>
                    <th scope="col" colspan="2">Abdi M. and Mesfin F</th>
                    <th scope="col">30-Jun-21</th> 		
                    <th scope="col">Wednsday </th>
                    <th scope="col">8:30 AM (Morning)</th>
                    <th scope="col">B57 R101</th>
            </tr>   
            <tr>

                    <th scope="col" colspan="2">Global Trend</th>               
                    <th scope="col">GLaf1002</th>
                    <th scope="col" colspan="2">Abdi M. and Mesfin F</th>
                    <th scope="col">30-Jun-21</th> 		
                    <th scope="col">Wednsday </th>
                    <th scope="col">8:30 AM (Morning)</th>
                    <th scope="col">B57 R101</th>
            </tr>   
            <tr>

                    <th scope="col" colspan="2">Global Trend</th>               
                    <th scope="col">GLaf1002</th>
                    <th scope="col" colspan="2">Abdi M. and Mesfin F</th>
                    <th scope="col">30-Jun-21</th> 		
                    <th scope="col">Wednsday </th>
                    <th scope="col">8:30 AM (Morning)</th>
                    <th scope="col">B57 R101</th>
            </tr>   
                                    
            </tbody>
            </table>
            
                </div>

        )
    }





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
                            <a className="dropdown-item" href="/instructor/login"><i className="fas fa-user mr-2"></i>Instructor</a>

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
                                            <Search />
                                    </div>

                                </div>
                            </div>

                            <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">College
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{}} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                       
                                    </select>
                                   

                                </div>
                            </div>

                           
                                   
                                </div>
                                <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Department
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{}} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                       
                                    </select>
                                   

                                </div>
                            </div>

                           
                                   
                                </div>

                                <div class="col-xl-12">
                                   
                                   
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-has-lab"> Semester
                                   
                                </label>

                                <div class="col-lg-12">
                                    <select onClick={(e)=>{}} class="form-control" id="val-has-lab" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">I</option>
                                        <option value="2">II</option>
                                       
                                    </select>
                                   

                                </div>
                            </div>
                            </div>
                                <div class="col-xl-12">

                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Batch
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{}} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1 Year</option>
                                        <option value="2">2 Year</option>
                                        <option value="3">3 Year</option>
                                        <option value="4">4 Year</option>
                                        <option value="5">5 Year</option>
                                        <option value="6">6 Year</option>
                                       
                                    </select>
                                   

                                </div>
                            </div>

                            
                           
                                   
                               
                                <div class="form-group row">
                                <label class="col-lg-4 col-form-label" for="val-skill">Section 
                                   
                                </label>
                                <div class="col-lg-12">
                                    <select onClick={(e)=>{}} class="form-control" id="val-year" name="val-skill">
                                        <option >Please select</option>
                                        <option value="1">1 Section</option>
                                        <option value="2">2 Section</option>
                                        <option value="3">3 Section</option>
                                        <option value="4">4 Section</option>
                                        <option value="5">5 Section</option>
                                        <option value="6">6 Year</option>
                                       
                                    </select>
                                   

                                </div>
                            </div>


                           
                            </div>
                                </div>
                           

                           
                                    
                                    <div class="form-group row">
                                        <div class="col-lg-8 ml-auto">
                                            <button type="submit" onClick={(e)=>{}} style={{padding: '1em' ,width:'15em',}} class="btn btn-success">Search Class Schedule</button>
                                            
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