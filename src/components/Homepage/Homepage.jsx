import * as React from 'react';
import "./Homepage.css";
import Bodyfat from '../Utils/Bodyfat/Bodyfat'
import {FormControl,TextField,Box,MenuItem} from "@mui/material"


function Homepage() {
  return (
    <div className="homepage">

      <div className='upperpart'>
       <h3 className='top-heading'><b><u>Healthify Tools</u></b></h3>
      </div>
        
       <div className='firsthalf'>     
           <div className='firstquarter'> 
               <Bodyfat />
           </div>    
       </div>

      gergdv
    </div>
  )
}

export default Homepage;