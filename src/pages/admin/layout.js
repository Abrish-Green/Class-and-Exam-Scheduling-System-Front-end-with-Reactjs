import react, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import aastuLogo from '../../images/logo.png'
import axios from 'axios'


const Layout = ()=>{

    return(
      <div className="admin-layout">
      
      <div className="dashboard-main-wrapper">
         
        
         
          <div className="dashboard-header">
              <nav className="navbar navbar-expand-lg bg-white fixed-top" style={{ height:'13.5vh' }}>
                  <a className="navbar-brand" href="/admin">
                  <img src={aastuLogo} style={{width:'5em',borderRadius: '50%'}} alt="AASTU"/>
                  AASTU Class and Exam Scheduling System</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto navbar-right-top">
                          <li className="nav-item dropdown nav-user" style={{ backgroundColor: 'white' }}>
                              <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/user_logo.png" alt="" class="user-avatar-md rounded-circle" /></a>
                              <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                  <div className="nav-user-info">
                                      <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                                      <span className="status"></span><span className="ml-2">Available</span>
                                  </div>
                                  <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Setting</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
                              </div>
                            
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
         

          <div className="nav-left-sidebar sidebar-dark">
              <div className="menu-list">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a className="d-xl-none d-lg-none" href="#">Registrar Dashboard</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav flex-column">
                              <li className="nav-divider">
                                  Admin
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link active" href="/admin"><i className="fa fa-fw fa-user-circle"></i>Registrar</a>
                                  
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket"></i>Account</a>
                                  <div id="submenu-2" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/cards.html">Edit Profile <span className="badge badge-secondary">New</span></a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie"></i>College</a>
                                  <div id="submenu-3" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/admin/create-colleges">Create College</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="/admin/colleges">Manage College</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Block Configration</a>
                                  <div id="submenu-4" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="/admin/create-blocks">Create Block</a>
                                          </li>
                                          
                                      </ul>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Schedule</a>
                                  <div id="submenu-5" className="collapse submenu" >
                                      <ul className="nav flex-column">
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/general-table.html">Class Schedule</a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="pages/data-tables.html">Exam Schedule</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              
                              <li className="nav-item">
                                  <a className="nav-link" href="/admin/setting" ><i className="fas fa-fw fa-file"></i> Setting </a>
                                 
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="" ><i className="fas fa-fw fa-inbox"></i>Logout </a>
                                  
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