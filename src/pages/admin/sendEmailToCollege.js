import React, { Component, useEffect, useState } from 'react';

const HowManyColleges =(props)=>{
    
    return (
             
        <div className="card" style={{ left: '33em',top: '0em' }}>
        <h3 className="card-header">Create College</h3>
        <div className="card-body">
        <h5 style={{alignContent:'center'}}className="form-label">How Many Colleges Do you Have In AASTU ?</h5>
            <form action="#" id="basicform" data-parsley-validate="" >
                <div className="Form-group">
                    <label For="inputUserName"></label>
                    <input id="inputNumber"  type="Number" name="name" placeholder="Enter College Amount " className="form-control" />

                 </div>
                 <div className="col-sm-6 pl-0">
                 <p className="text-right">
                     <button type="submit" className="btn btn-space btn-primary" >Submit</button>
                 </p>
             </div>
            </form>
        </div>
    </div>
    )
}
    
const InputEmail = (props)=>{

    return(

        <div className="card" style={{ left: '33em' }}>
        <h3 className="card-header">Create College</h3>
        <div className="card-body">
        <h5 style={{alignContent:'center'}}className="form-label">Please Provide email of Colleges deans</h5>
            <form action="#" id="basicform" data-parsley-validate="" >
                <div className="form-group">
                    <label for="inputUserName">User Name</label>
                    <input id="inputUserName" type="text" name="name" data-parsley-trigger="change" required="" placeholder="Enter user name" autocomplete="off" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input id="inputEmail" type="email" name="email" data-parsley-trigger="change" required="" placeholder="Enter email" autocomplete="off" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputRepeatPassword">Repeat Password</label>
                    <input id="inputRepeatPassword" data-parsley-equalto="#inputPassword" type="password" required="" placeholder="Password" className="form-control" />
                </div>
                <div className="row">
                    <div className="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                        <label className="be-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Remember me</span>
                        </label>
                    </div>
                    <div className="col-sm-6 pl-0">
                        <p className="text-right">
                            <button type="submit" className="btn btn-space btn-primary">Submit</button>
                            <button className="btn btn-space btn-secondary">Cancel</button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>

    )
}
const SendEmail = ()=>{
    const [CollegeAmount,setCollegeAmount] = useState();
    const [screen,setScreen] = useState(HowManyColleges);

 
    return(
        <div>
        {screen && screen}
        </div>
    )
}

export default SendEmail;