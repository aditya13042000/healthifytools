import * as React from 'react';
//import { createContext } from 'react';
import "./Bodyfat.css";
import {Box,TextField,MenuItem,Button,FormControl} from '@mui/material';
import Bmr from '../Bmr/Bmr'

//Defining Context for Bmr fields
export const GenderContext = React.createContext()
export const HeightContext = React.createContext()

//Array of genders
const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

var globalgender;
var globalheight;
var globalresult="Output will be diplayed here";
var tempresult="";
var isset="false";

//Main Bodyfat function
const Bodyfat = () => {

 //Defning different state variables
  const [gender, setGender] = React.useState('Male');
  const [waist, setWaist] = React.useState(0);
  const [neck, setNeck] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const [error, setError] = React.useState({});

  //Validate function for validating form fields
  const validate = () => {
    let temp={}
    var waistnum = Number(waist);
    if(waistnum>=38 && waistnum<=500)
      temp.waist="";
    else
      temp.waist="waist size should be in range of 38-500";

    var necknum = Number(neck);
    if(necknum>=13 && necknum<=75)
      temp.neck="";
    else
      temp.neck="neck size should be in range of 13-75";
        
    var heightnum = Number(height);
    if(heightnum>=50 && heightnum<=300)
      temp.height="";
    else
      temp.height="height size should be in range of 50-300";

     setError({...temp});

     return Object.values(temp).every(x => x == "");
}

 //Different handle function for managing states of input field when it is changed
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeWaist = (event) => {
    setWaist(event.target.value);
  };

  const handleChangeNeck = (event) => {
    setNeck(event.target.value);
  };

  const HandleChangeHeight = (event) => {
    setHeight(event.target.value);
  };

  //passing callback values to bodyfat function
  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [gender]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [waist]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [neck]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [height]);

//calculate bodyat upo change in text value
  const handleSubmitonfield = () => {
    //e.preventDefault();
    if(validate())
    {
      var bodyfats;
      globalgender = gender;
      globalheight = height;

    var newwaist = Number(waist);
    var newneck = Number(neck);
    var newheight = Number(height);
    
    if (gender === 'Male')
    {
        var waistinch = (newwaist/2.54);
        var neckinch = (newneck/2.54);
        var heightinch = (newheight/2.54);

        //console.log(typeof waist+ " " + neck + " " + height);
        //console.log(waistinch+ " " + neckinch + " " + heightinch);

        var logwn = Math.log10(waistinch - neckinch);
        var logh = Math.log10(heightinch);

        var bfp = ((86.010*logwn)-(70.041*logh)+36.76);

        bodyfats = Number(bfp);
        
    }
    else
    {
      var waistinch = (newwaist/2.54);
      var hipinch = 1.25*waistinch;
      var neckinch = (newneck/2.54);
      var heightinch = (newheight/2.54);

      console.log(waistinch+ " " + neckinch + " " + heightinch);

      var logwn = Math.log10(waistinch + hipinch - neckinch);
      var logh = Math.log10(heightinch);

      var bfp = ((163.205*logwn)-(97.684*logh)-78.387);

      bodyfats = Number(bfp);
      
    }
    bodyfats=Math.round(bodyfats);
    globalresult = `Your Bodyfat is ${bodyfats}% `;
    isset="true";
    tempresult=bodyfats;
    console.log(isset);
     // alert(`body fat is ${bodyfats} % `);
   // resetForm();
  }
  
}
  //Calculate Bodyfat upon pressing button through handlesubmit function
  const handleSubmit = (e) => {
      e.preventDefault();
      if(validate())
      {
        var bodyfats;
        globalgender = gender;
        globalheight = height;

      var newwaist = Number(waist);
      var newneck = Number(neck);
      var newheight = Number(height);
      
      if (gender === 'Male')
      {
          var waistinch = (newwaist/2.54);
          var neckinch = (newneck/2.54);
          var heightinch = (newheight/2.54);

          //console.log(typeof waist+ " " + neck + " " + height);
          //console.log(waistinch+ " " + neckinch + " " + heightinch);

          var logwn = Math.log10(waistinch - neckinch);
          var logh = Math.log10(heightinch);

          var bfp = ((86.010*logwn)-(70.041*logh)+36.76);

          bodyfats = Number(bfp);
          
      }
      else
      {
        var waistinch = (newwaist/2.54);
        var hipinch = 1.25*waistinch;
        var neckinch = (newneck/2.54);
        var heightinch = (newheight/2.54);

        console.log(waistinch+ " " + neckinch + " " + heightinch);

        var logwn = Math.log10(waistinch + hipinch - neckinch);
        var logh = Math.log10(heightinch);

        var bfp = ((163.205*logwn)-(97.684*logh)-78.387);

        bodyfats = Number(bfp);
        
      }
      bodyfats=Math.round(bodyfats);
      globalresult = `Your Bodyfat is ${bodyfats}% `;
      isset="true";
      console.log(isset);
      tempresult=bodyfats;
       // alert(`body fat is ${bodyfats} % `);
     // resetForm();
    }
    
  }

  //Function to reset form data to initial values
  const resetForm = () => {
      setGender('Male');
      setWaist(0);
      setNeck(0);
      setHeight(0);
      setError({});
  }

  //Defining structure of form and it's input fields
  return (
    <div className='Bigone'> 

      <div className='Firstone'>

        <div className='Firstquarter'>
    <h4 className='Bodyfatheading'>BODY FAT CALCULATOR</h4>
    <form  onSubmit={handleSubmit} className='Buttonenter'>
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      x
    >
      <div>
        <TextField
          id="outlined-select-gender"
          select
          label="Gender"
          value={gender}
          onChange={handleChangeGender}
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField  
        type="number" 
        id="outlined-basic" 
        value={waist} 
        label="Waist[cm]" 
        variant="outlined" 
        onChange={handleChangeWaist}
        
        {...(error.waist && {error : true ,helperText : error.waist })}
        />
      </div>

      <div>
      <TextField 
      type="number" 
      id="outlined-basic" 
      value={neck} 
      label="Neck[cm]" 
      variant="outlined" 
      onChange={handleChangeNeck}
      
      {...(error.neck && {error : true ,helperText : error.neck })}
      />
      <TextField 
      type="number" 
      id="outlined-basic" 
      value={height} 
      label="Height[cm]" 
      variant="outlined" 
      onChange={HandleChangeHeight}

      {...(error.height && {error : true ,helperText : error.height })}
      />
      </div>
      <div>
      <Button type='submit'  variant="contained" >BODY FAT</Button>
      </div>
    </Box>
    </form>
    <br></br>
       </div>

       <div className='Secondquarter'>
       <Box className='out' component="span" sx={{ display: 'block' }}><h4>Your Body fat is : {tempresult}%</h4></Box>
       <p className='Paratext'>Your body fat% is a key indicator of your good health. 
         A high body fat% may put you at a higher risk of lifestyle diseases. 
         A body fat% of 15 or lower is recommended for males,
          while a body fat% of 25 or lower is recommended for females.
          </p>
          <br></br>
       </div>
    </div>

    
    <div className='Secondone'>
    <GenderContext.Provider value={globalgender} >
    <HeightContext.Provider value={globalheight} >
      <Bmr />
    </HeightContext.Provider>
    </GenderContext.Provider>
    <br></br>
    </div>


    </div>
  );
          }

  export default Bodyfat;
  
