import * as React from 'react';
import { useState,useEffect } from 'react';
import "./Homepage.css";
import axios from "axios";
import Bodyfat from '../Utils/Bodyfat/Bodyfat'
import Dietplan from '../Utils/Dietplan/Dietplan';
import {FormControl,TextField,Box,MenuItem,Button} from "@mui/material"
import { Link,Route,Router } from 'react-router-dom';
import Switch from "react-switch";

var temp="My Diet plan";
function Homepage() {

  const [flag, setFlag] = useState("false");

  const handleClick = (event) => {
    if(flag === "false")
    {
      setFlag("true");
      temp="Go to calculator Page"
    }
    else
    {
      setFlag("false");
      temp="My Diet plan"
    }
   // console.log(flag);
  };

  // React.useEffect(() => {
  //   if(flag == true)
  //   {
  //     console.log(flag);
  //   }
  // }, [flag]);

  return (
    <div className="homepage">

      <div className='upperpart'>
       <h3 className='top-heading'><b>HEALTHIFY TOOLS</b></h3>
      </div>
        
       <div className='firsthalf'>     
           <div className='firstquarter'> 
           {flag === "false" && <Bodyfat />}
           {flag === "true" && <Dietplan />}
           </div>   
           <Button  onClick={handleClick} variant="contained">{temp}</Button> 
       </div>

      
      {/* {flag === "true" && <Dietplan />} */}
       {/* {flag ? <Dietplan /> : <Homepage /> } */}

    </div>
  )
}

export default Homepage;