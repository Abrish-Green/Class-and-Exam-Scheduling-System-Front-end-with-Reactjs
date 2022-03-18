import React from 'react'
import axios from 'axios'

const Generate = async ()=>{


    try{
            axios({
                method: 'post',
                url: 'department/exam/generate',
                
            })
        }catch(e){
            console.log(e)
        }
    


   return(
       <div>
       Generated
       </div>
   )
}
export default Generate