import react, { Component } from 'react'

import aastuLogo from '../../images/logo.png'

const Layout = ()=>{

    const Logout =()=>{

        localStorage.removeItem('isCollegeAuth');

    }

    return(
      <div className="admin-layout">
      
      <div className="dashboard-main-wrapper">
         
        
         
          <div className="dashboard-header">
              <nav className="navbar navbar-expand-lg bg-white fixed-top" style={{ height:'16vh' }}>
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
                                  <div className="nav-user-info">
                                      <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                                      <span className="status"></span><span className="ml-2">Available</span>
                                  </div>
                                  <a className="dropdown-item" href=""><i className="fas fa-user mr-2"></i>Account</a>
                                  <a className="dropdown-item" href=""><i className="fas fa-cog mr-2"></i>Setting</a>
                                  <a onClick={()=>{Logout()}} className="dropdown-item" href=""><i className="fas fa-power-off mr-2"></i>Logout</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
         

          <div className="nav-left-sidebar sidebar-dark">
              <div className="menu-list">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a className="d-xl-none d-lg-none" href="#"></a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav flex-column">
                              <li className="nav-divider">
                                  Menu
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>College Dean Dashboard <span className="badge badge-success">6</span></a>
                                  <div id="submenu-1" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                         
                                          <li className="nav-item">
                                              <a className="nav-link" href="">View Progress</a>
                                          </li>
                                         
                                         
                                      </ul>
                                  </div>
                              </li>
                              
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie"></i>Department Manager</a>
                                  <div id="submenu-3" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                        <li className="nav-item">
                                              <a className="nav-link" href="/college/create-department">Create Departments</a>
                                          </li>  
                                        <li className="nav-item">
                                              <a className="nav-link" href="/college/departments">View Departments</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/college/department/heads">View Department Heads</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Block and Room Management</a>
                                  <div id="submenu-4" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/college/department/select/block">Block Manager</a>
                                          </li>
                                          
                                         
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Schedules</a>
                                  <div id="submenu-5" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/general-table.html">Class Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/general-table.html">Exam Schedule</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-divider">
                                  Features
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file"></i> Pages </a>
                                  <div id="submenu-6" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/blank-page.html">Blank Page</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox"></i>Apps <span className="badge badge-secondary">New</span></a>
                                  <div id="submenu-7" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/inbox.html">Inbox</a>
                                          </li>
                                         
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns"></i>Icons</a>
                                  <div id="submenu-8" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/icon-fontawesome.html">FontAwesome Icons</a>
                                          </li>
                                        
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt"></i>Maps</a>
                                  <div id="submenu-9" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/map-google.html">Google Maps</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/map-vector.html">Vector Maps</a>
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