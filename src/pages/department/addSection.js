import react, { useEffect, useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import AddCourse from '../department/addDepartmentCourse'

import { Link, useHistory } from 'react-router-dom'
import { isNumber } from 'lodash'
import Layout from './layout'
var _ = require('lodash');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('d_auth');
const AddSection =()=>{
       
    const[startSectioning, setStartSection] = useState(false)
    const[year,setYear] = useState(null)
    const[examYear,setExamYear] = useState(null)
    
    const[semester,setSemester] = useState(null)
    const[yearError,setYearError] = useState(null) 
    const[ExamYearError,setExamYearError] = useState(null) 

    const[info,setInfo] = useState(true)
    const[amount,setAmount] = useState('')
    const[ExamAmount,setExamAmount] = useState('')
    const[ExamAmountError,setExamAmountError] = useState('')
    
    const[amountError,setAmountError] = useState(null)
    const[user,setUser] = useState()
    const[department_id,setDepartmentID] = useState()  
    const[success,setSuccess] = useState(false)
    const[already,setAlready] = useState(false)
    const[examAlready,setExamAlready] = useState(false)
    const[validated,setValidated] = useState(false)
    const[examValidated,setExamValidated] = useState(false)
    const[sections,setSections] = useState([])
    const[ExamSections,setExamSections] = useState([])
    const[fixedYear,setFixedYear] = useState([1,2,3,4,5,6])
    const[load,setLoad] = useState(false)

    
const InputAlert = (props)=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.message}
          
        </div>
    )
}

const Success = (props)=>{
    return(
        <div className="alert alert-success  alert-dismissible fade show" role="alert">
          {props.message}
          
        </div>
    )
}

const Info = ()=>{
    return(
        <div  className="alert alert-info alert-dismissible fade show">
       
                    <p>To Start Creating Classes Please Fill the Form </p>
                    
                </div>
            )
}

const DeleteYear = async (e,year,department_id,type)=>{
        e.preventDefault()


        if(type== 'lecture'){
            const response = await axios({
                method: 'post',
                url: `/department/delete/class/sections`,
                data:{
                    'year':year,
                    'department_id': department_id 
                }
            }).then((response)=>{
                console.log(response)
                GetAllSections()
              
            });

        }else{
            const response = await axios({
                method: 'post',
                url: `/department/delete/exam/sections`,
                data:{
                    'year':year,
                    'department_id': department_id 
                }
            }).then((response)=>{
                console.log(response)
                GetAllSections()
              
            });

        }


       


    }

const ChooseYearSemester = ()=>{


        return(
            <div>

            </div>
        )
    }

const CreateSection = (e,type)=>{
        e.preventDefault()


        if(type == 'lecture'){

                

        if(year != "Please Select Year" && year != null){
            setYearError(false)
            setValidated(true)
            
        
        }else{
            setYearError('Please Select a Valid Year')
            setValidated(false)
            
        }
        if(amount != '' && amount > 0){
            setAmountError(false)
            setValidated(true)
           
        }else{
            setAmountError('Please Enter a valid Section Amount')
            setValidated(false)
           
        }

        if(year != '' && amount > 0){
            (
                async()=>{
                     await axios({
                        method: 'post',
                        url: '/department/create/class/sections',
                        data: {
                            'year': year,
                            'department_id': department_id,
                            'amount': amount
                        }
                      }).then((response)=>{
                         console.log(response.data)
                         if(response.data.Error != null ){
                             setAlready(true)
                         }
                         if(response.data.Message == 'Successful'){
                            setInfo(false);
                            setYearError(false);
                            setAlready(false)
                            setSuccess(true)
                         }
                        
                      });
                    }
                     
                
            )();
    
        }else{
            //console.log('errrr')
        }



        }else{

                

        if(examYear != "Please Select Year" && examYear != null){
            setExamYearError(false)
            setExamValidated(true)
            
        
        }else{
            setExamYearError('Please Select a Valid Year')
            setExamValidated(false)
            
        }
        if(ExamAmount != '' && ExamAmount > 0){
            setExamAmountError(false)
            setExamValidated(true)
           
        }else{
            setExamAmountError('Please Enter a valid Section Amount')
            setExamValidated(false)
           
        }

        if(examYear != '' && ExamAmount > 0){
            (
                async()=>{
                     await axios({
                        method: 'post',
                        url: '/department/create/exam/sections',
                        data: {
                            'year': examYear,
                            'department_id': department_id,
                            'amount': ExamAmount
                        }
                      }).then((response)=>{
                         console.log(response.data)
                         if(response.data.Error != null ){
                             setExamAlready(true)
                         }
                         if(response.data.Message == 'Successful'){
                            setInfo(false);
                            setExamYearError(false);
                            setExamAlready(false)
                            setSuccess(true)
                         }
                        
                      });
                    }
                     
                
            )();
    
        }else{
            //console.log('errrr')
        }

        }







        
    }
   
const GetAllSections = (e)=>{

        (
            async()=>{
                 await axios({
                    method: 'post',
                    url: '/department/get/class/sections',
                    data: {
                        'year': year,
                        'department_id': department_id,
                    }
                  }).then((response)=>{
                     //console.log(response.data)  
                     setLoad(true)
                     try{
                     if(response.data){
                        var allSection = [];
                        var eachSection = []
                        for(var i=1;i<=fixedYear.length;i++){
                            eachSection = []
                            response.data.sections.map((section)=>{
                                if(section.year == i){
                                    eachSection.push(section)
                                }
                            })
                            if(eachSection.length != 0){
                                allSection.push(eachSection)  
                            }
                                
                        }
                        setSections(allSection)
                        allSection.map((each)=>{
                            each.map((inner)=>{
                                //console.log(inner)
                            })
                        }) 
                     }}catch(e){
                         console.log(e)
                     }
                         
                });
        
    })();

    //-----------------------------------
    (
        async()=>{
             await axios({
                method: 'post',
                url: '/department/get/exam/sections',
                data: {
                    'year': year,
                    'department_id': department_id,
                }
              }).then((response)=>{
                 //console.log(response.data)  
                 setLoad(true)
                 try{
                 if(response.data){
                    var allSection = [];
                    var eachSection = []
                    for(var i=1;i<=fixedYear.length;i++){
                        eachSection = []
                        response.data.sections.map((section)=>{
                            if(section.year == i){
                                eachSection.push(section)
                            }
                        })
                        if(eachSection.length != 0){
                            allSection.push(eachSection)  
                        }
                            
                    }
                    setExamSections(allSection)
                    allSection.map((each)=>{
                        each.map((inner)=>{
                            //console.log(inner)
                        })
                    }) 
                 }}catch(e){
                     console.log(e)
                 }
                     
            });
    
})();

        
}


const DisplayAllYears = (props)=>{

        const Year = [null,'First Year (Fresh)','Second Year','Third Year','Fourth Year','Fifth Year','Sixth Year']
        const [realYear, setRealYear] = useState()
        
        console.log(props.section)
        return (
            <div>
                <div className="accrodion-regular">
                    <form>
                        <div id="accordion3">
                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                    <button onClick={(e)=>e.preventDefault()} className="btn btn-link collapsed" data-toggle="collapse" data-target={props.section[0].year &&'#col-'+props.section[0].year} aria-expanded="false" aria-controls="collapseSeven">
                                        <span className="fas mr-3 fa-angle-down"></span>{props.section[0].year && Year[props.section[0].year]}
                                    </button>
                                   
                                    </h5>
                                    <button onClick={(e)=>{DeleteYear(e,props.section[0].year,props.section[0].department_id,props.type)}} className="btn btn-danger">Delete</button>
                                </div>
                               
                            <div id={props.section[0].year && 'col-'+props.section[0].year} className="collapse" aria-labelledby="headingSeven" data-parent="#accordion3" >
                            <div className="card">
                                
                          
                            <div className="card-body">
                                <form id="form" data-parsley-validate="">
                                    
                                <div>
                                <div className="">
                                                <div className="card">
                                                    <h5 className="card-header"></h5>
                                                    <div className="card-body">
                                                        <ul className="list-group">
                                                           
                                                        {props.section && 

                                                            props.section.map((innerSection)=>{
                                                                return  <li className="list-group-item " key={innerSection.id}>{innerSection.class_name}</li>
                                                            })

                                                        }
                                                           
                                                        </ul>
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
       </form>
     </div>
</div>
        )
    }


useEffect(() => {
     
        if(yearError || success || already || info){
            setTimeout(()=>{setInfo(false);setSuccess(false);setAlready(false)},3000)
        }
        
        (
            async()=>{
                 await axios.get('/department/current',{headers:{'Authorization': localStorage.getItem('d_auth')}}).then((response)=>{
                    //console.log(response.data)
                    setUser(response.data)
                    setDepartmentID(response.data.id)
                })
            }
        )();

        GetAllSections()
   
        
        
    }, [yearError,amountError,success,info,load])

    
    return(


        <div>
        
        
        {Layout && <Layout />}



        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5"  style={{  position:'absolute', top:'2em',marginLeft: '20em',width:'100em' }}>
        <div class="section-block">
            <h2 class="section-title"> Section Configration</h2>
        </div>
        <div class="tab-outline">
            <ul class="nav nav-tabs" id="myTab2" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="create" aria-selected="true">Create Section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="class" aria-selected="false">Class Section</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="tab-outline-three" data-toggle="tab" href="#outline-three" role="tab" aria-controls="exam" aria-selected="false">Exam Section</a>
                </li>
                
            </ul>
            <div class="tab-content" id="myTabContent2">
                <div class="tab-pane fade active show" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">


     <div class="card">
            
               {success && <Success message="Section Successfully Created" />}
               {already && <InputAlert message="Section Already Created" />}
               {examAlready && <InputAlert message="Section Already Created" />}
               {info && <Info />}
                
               <h3 class="card-header">Create Lecture Section</h3>
                
                <h5 class="card-header">Year</h5>
                <div class="card-body">
                    <form id="form" data-parsley-validate="">
                   
                        
                        <div class="form-group row">
                            <div class="col-9 col-lg-10">
                            
                            <div class="col-lg-6">
                            <select onClick={(e)=>{setYear(e.target.value)}} class="form-control" id="val-skill" name="val-skill">
                                <option >Please Select Year</option>
                                <option value="1">First Year(Fresh)</option>
                                <option value="2">Second Year</option>
                                <option value="3">Third Year</option>
                                <option value="4">Fourth Year</option>
                                <option value="5">Fifth Year</option>
                                <option value="6">Sixth Year</option>
                            
                            </select>
                            {yearError && <InputAlert message={yearError} />}
                        </div>
                  </div>
                               
            
                        </div>
                        <div class="form-group row">
                           
        
                       </div>
                    <div class="form-group row">

                    <div class="col-9 col-lg-10">
                                <h4>Section Amount</h4>
                                <div class="col-lg-6">
                                <input type="number" class="form-control" id="" onChange={(e)=>{setAmount(e.target.value)}} name="" placeholder="Enter Valid Number" />
                                {amountError && <InputAlert message={amountError} />}
                            </div>
                      </div>
                                   
                
                            </div>
                        <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
                        <p class="text-center">
                            <button type="submit" style={{width: '15em'}} onClick={(e)=>{CreateSection(e,'lecture')}} class="btn btn-space btn-success text-light">Create Lecture Section</button>
                            <Link to="" style={{width: '15em'}} class="btn btn-space btn-danger">Cancel</Link>
                        </p>
                    </div>
                    </form>
                </div>
            </div>



            
     <div class="card">
            
     
     <h3 class="card-header">Create Exam Section</h3>
                
      <h5 class="card-header">Year</h5>
      <div class="card-body">
          <form id="form" data-parsley-validate="">
         
              
              <div class="form-group row">
                  <div class="col-9 col-lg-10">
                  
                  <div class="col-lg-6">
                  <select onClick={(e)=>{setExamYear(e.target.value)}} class="form-control" id="val-skill" name="val-skill">
                      <option >Please Select Year</option>
                      <option value="1">First Year(Fresh)</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                      <option value="5">Fifth Year</option>
                      <option value="6">Sixth Year</option>
                  
                  </select>
                  {ExamYearError && <InputAlert message={ExamYearError} />}
              </div>
        </div>
                     
  
              </div>
              <div class="form-group row">
                 

             </div>
          <div class="form-group row">

          <div class="col-9 col-lg-10">
                      <h4>Section Amount</h4>
                      <div class="col-lg-6">
                      <input type="number" class="form-control" id="" onChange={(e)=>{setExamAmount(e.target.value)}} name="" placeholder="Enter Valid Number" />
                      {ExamAmountError && <InputAlert message={ExamAmountError} />}
                  </div>
            </div>
                         
      
                  </div>
              <div class="col-sm-6 pl-0" style={{ marginTop: '1em' }}>
              <p class="text-center">
                  <button type="submit" style={{width: '15em'}} onClick={(e)=>{CreateSection(e,'exam')}} class="btn btn-space btn-success text-light">Create Exam Section</button>
                  <Link to="" style={{width: '15em'}} class="btn btn-space btn-danger">Cancel</Link>
              </p>
          </div>
          </form>
      </div>
  </div>


                        
            </div>
                <div class="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">

                    {sections &&

                        sections.map((section)=>{
    
                          return <DisplayAllYears section={section} type="lecture"/>
                           
                        })
                       
                    }
                    {sections.length == 0 &&
                        <div className="card" style={{ padding: '2%' }}>No Data Yet</div>
                    }

                    
        
                
                </div>
                <div className="tab-pane fade" id="outline-three" role="tabpanel" aria-labelledby="tab-outline-three">
                {sections &&

                    ExamSections.map((section)=>{

                      return <DisplayAllYears section={section} type="exam"/>
                       
                    })
                   
                }
                {ExamSections.length == 0 &&
                    <div className="card" style={{ padding: '2%' }}>No Data Yet</div>
                }
                    
                </div>
            </div>
        </div>
    </div> 
</div>
    )
}



export default AddSection
