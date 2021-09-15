import react, { Component } from 'react'

import aastuLogo from '../../images/logo.png'



const Layout = ()=>{
    const Logout =()=>{

        localStorage.removeItem('IsDepartmentAuth');

    }


    return(
      <div className="admin-layout">
      
       
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
                                 
                                  <a className="dropdown-item" href=""><i className="fas fa-user mr-2"></i>Account</a>
                                  <a className="dropdown-item" href=""><i className="fas fa-cog mr-2"></i>Setting</a>
                                  <a onClick={Logout} className="dropdown-item" href=""><i className="fas fa-power-off mr-2"></i>Logout</a>
                              </div>
                            
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
         

          <div className="nav-left-sidebar sidebar-dark">
              <div className="menu-list">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a className="d-xl-none d-lg-none" href="#">Head Dashboard</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav flex-column">
                              <li className="nav-divider">
                                  Menu
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link active" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Head Dashboard <span className="badge badge-success">6</span></a>
                                  <div id="submenu-1" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/edit">Edit Department</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket"></i>Instructors</a>
                                  <div id="submenu-2" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/create/instructor">Create Instructors <span className="badge badge-secondary">New</span></a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/instructors">View Instructors</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Assign Instructors</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie"></i>Course</a>
                                  <div id="submenu-3" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/add/course">Create Course</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/courses">View Courses</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Assign Courses</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/create/exam/course/">Add Exam Courses</a>
                                          </li>

                                          
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Classes</a>
                                  <div id="submenu-4" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/add/section">Manage classes</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Exam Invigilators</a>
                                  <div id="submenu-5" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/add/invigilator">Create Invigilator</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/department/invigilators">View Invigilators</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-divider">
                                  Schedules
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file"></i> Class Schedule </a>
                                  <div id="submenu-6" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Generate Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">View Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Print Schedule</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox"></i>Exam Schedule </a>
                                  <div id="submenu-7" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Generate Exam Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">View Exam Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">Print Schedule</a>
                                          </li>
        
                                      </ul>
                                  </div>
                              </li>
                            </ul>
                      </div>
                  </nav>
              </div>
          </div>
                                    
          </div>
          
      </div>
      
      
    
    )
}

export default Layout