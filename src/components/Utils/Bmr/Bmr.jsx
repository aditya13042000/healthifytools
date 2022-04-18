import * as React from 'react';
import { useContext } from 'react';
import "./Bmr.css";
import {Box,TextField,MenuItem,Button,FormControl} from '@mui/material';
import { GenderContext,HeightContext } from '../Bodyfat/Bodyfat';

//frequencies array for exercise done
const frequencies = [
  {
    value: 'Little/no exercise',
    label: 'Little/no exercise',
  },
  {
    value: 'Light exercise',
    label: 'Light exercise',
  },
  {
    value: 'Moderate exercise (3-5 days/wk)',
    label: 'Moderate exercise (3-5 days/wk)',
  },
  {
    value: 'Very active (6-7 days/wk)',
    label: 'Very active (6-7 days/wk)',
  },
  {
    value: 'Extra active (very active & physical job)',
    label: 'Extra active (very active & physical job)',
  }
];

//diets array for type of diet consumed
const diets = [
  {
    value: 'High carb',
    label: 'High carb',
  },
  {
    value: 'Moderate carb',
    label: 'Moderate carb',
  },
  {
    value: 'Zone diet',
    label: 'Zone diet',
  },
  {
    value: 'Low carb',
    label: 'Low carb',
  },
  {
    value: 'Keto diet',
    label: 'Keto diet',
  }
];

var globalresult="Output will be diplayed here";
var tempresult="";
var isset="false";
var carbs="";
var proteins="";
var fats="";

//Main Bmr function
const Bmr = (props) => {
  
  //Defining different state parameters
  const genderfetched = useContext(GenderContext)
  const heightfetched = useContext(HeightContext)

  const [frequency, setFrequency] = React.useState('Little/no exercise');
  const [weight, setWeight] = React.useState(0);
  const [age, setAge] = React.useState(0);
  const [diet, setDiet] = React.useState('High carb');
  
  const [error, setError] = React.useState({});
  
  //Validate function for validation purposes of different form fields
  const validate = () => {
    let temp={}

    var weightnum = Number(weight);
    if(weightnum>=38 && weightnum<=500)
      temp.weight="";
    else
      temp.weight="weight should be in range of 38-500";

    var agenum = Number(age);
    if(agenum>=5 && agenum<=125)
      temp.age="";
    else
      temp.age="age should be in range of 5-125";
        
     setError({...temp});

     return Object.values(temp).every(x => x == "");
}

 //Different handle function for handeling change in state of input text fields
  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handleChangeWeight= (event) => {
    setWeight(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeDiet = (event) => {
    setDiet(event.target.value);
  };

  //passing callback value to bmr calculate function
  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [frequency]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [weight]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [age]);

  React.useEffect(() => {
    if(isset === "true")
    {
      handleSubmitonfield();
    }
  }, [diet]);

 //calculate bmr upon change in text field value
  const handleSubmitonfield = () => {
    if(validate())
      {

      var finalbmr;
      var carb;
      var protein;
      var fat;
      var newweight = Number(weight);
      var newage = Number(age);
      
      //this part should be set dynamically fetching values from bodyfat component
      var newheight=Number(heightfetched);
      var gender = genderfetched ;

      //console.log(gender + " " + newheight);
      
      if (gender === 'Male')
      {
          //console.log(typeof waist+ " " + neck + " " + height);
          //console.log(waistinch+ " " + neckinch + " " + heightinch);

          var tempbmr = 66.47 + (13.75 * newweight) + (5.003 * newheight) - (6.755 * newage);
 
          var bmr=0;

          if(frequency === 'Little/no exercise')
          bmr = tempbmr*1.2;

          if(frequency === 'Light exercise')
          bmr = tempbmr*1.375;

          if(frequency === 'Moderate exercise (3-5 days/wk)')
          bmr = tempbmr*1.55;

          if(frequency === 'Very active (6-7 days/wk)')
          bmr = tempbmr*1.725;

          if(frequency === 'Extra active (very active & physical job)')
          bmr = tempbmr*1.9;
          
          finalbmr= Math.round(Number(bmr));
          
      }
      else
      {
        var tempbmr = 655.1 + (9.563 * newweight) + (1.85 * newheight) - (4.676 * newage);
 
        var bmr=0;

        if(frequency === 'Little/no exercise')
        bmr = tempbmr*1.2;

        if(frequency === 'Light exercise')
        bmr = tempbmr*1.375;

        if(frequency === 'Moderate exercise (3-5 days/wk)')
        bmr = tempbmr*1.55;

        if(frequency === 'Very active (6-7 days/wk)')
        bmr = tempbmr*1.725;

        if(frequency === 'Extra active (very active & physical job)')
        bmr = tempbmr*1.9;
        
        finalbmr= Math.round(Number(bmr));
      }
      //alert(`BMR obtained is  ${finalbmr} calories `);

      if(diet === 'High carb')
      {
          var democarb = (finalbmr * 60)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 25)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 15)/100;
          fat = demofat/9;
      }

      if(diet === 'Moderate carb')
      {
          var democarb = (finalbmr * 50)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 30)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 20)/100;
          fat = demofat/9;
      }

      if(diet === 'Zone diet')
      {
          var democarb = (finalbmr * 40)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 30)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 30)/100;
          fat = demofat/9;
      }

      if(diet === 'Low carb')
      {
          var democarb = (finalbmr * 25)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 35)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 40)/100;
          fat = demofat/9;
      }

      if(diet === 'Keto diet')
      {
          var democarb = (finalbmr * 5)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 35)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 60)/100;
          fat = demofat/9;
      }
      carb=Math.round(carb);
      protein=Math.round(protein);
      fat=Math.round(fat);

      globalresult = `Bmr is ${finalbmr} calories .Required nutrients intake are : 
      carbohydrates ${carb}gm , Proteins ${protein}gm and fat ${fat}gm `;
      isset="true";
      tempresult=finalbmr;
      carbs=carb;
      proteins=protein;
      fats=fat;
     // alert(`BMR obtained is  ${finalbmr} calories and  carbo being ${carb} gm, protein ${protein} gm and fat ${fat} gm`);
    // resetForm();
    }
  
}

  //Calculate Bmr upon pressing button through handlesubmit function
  const handleSubmit = (e) => {
      e.preventDefault();
      if(validate())
      {

      var finalbmr;
      var carb;
      var protein;
      var fat;
      var newweight = Number(weight);
      var newage = Number(age);
      
      //this part should be set dynamically fetching values from bodyfat component
      var newheight=Number(heightfetched);
      var gender = genderfetched ;

      //console.log(gender + " " + newheight);
      
      if (gender === 'Male')
      {
          //console.log(typeof waist+ " " + neck + " " + height);
          //console.log(waistinch+ " " + neckinch + " " + heightinch);

          var tempbmr = 66.47 + (13.75 * newweight) + (5.003 * newheight) - (6.755 * newage);
 
          var bmr=0;

          if(frequency === 'Little/no exercise')
          bmr = tempbmr*1.2;

          if(frequency === 'Light exercise')
          bmr = tempbmr*1.375;

          if(frequency === 'Moderate exercise (3-5 days/wk)')
          bmr = tempbmr*1.55;

          if(frequency === 'Very active (6-7 days/wk)')
          bmr = tempbmr*1.725;

          if(frequency === 'Extra active (very active & physical job)')
          bmr = tempbmr*1.9;
          
          finalbmr= Math.round(Number(bmr));
          
      }
      else
      {
        var tempbmr = 655.1 + (9.563 * newweight) + (1.85 * newheight) - (4.676 * newage);
 
        var bmr=0;

        if(frequency === 'Little/no exercise')
        bmr = tempbmr*1.2;

        if(frequency === 'Light exercise')
        bmr = tempbmr*1.375;

        if(frequency === 'Moderate exercise (3-5 days/wk)')
        bmr = tempbmr*1.55;

        if(frequency === 'Very active (6-7 days/wk)')
        bmr = tempbmr*1.725;

        if(frequency === 'Extra active (very active & physical job)')
        bmr = tempbmr*1.9;
        
        finalbmr= Math.round(Number(bmr));
      }
      //alert(`BMR obtained is  ${finalbmr} calories `);

      if(diet === 'High carb')
      {
          var democarb = (finalbmr * 60)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 25)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 15)/100;
          fat = demofat/9;
      }

      if(diet === 'Moderate carb')
      {
          var democarb = (finalbmr * 50)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 30)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 20)/100;
          fat = demofat/9;
      }

      if(diet === 'Zone diet')
      {
          var democarb = (finalbmr * 40)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 30)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 30)/100;
          fat = demofat/9;
      }

      if(diet === 'Low carb')
      {
          var democarb = (finalbmr * 25)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 35)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 40)/100;
          fat = demofat/9;
      }

      if(diet === 'Keto diet')
      {
          var democarb = (finalbmr * 5)/100;
          carb = democarb/4;

          var demoprotein = (finalbmr * 35)/100;
          protein = demoprotein/4;

          var demofat = (finalbmr * 60)/100;
          fat = demofat/9;
      }
      carb=Math.round(carb);
      protein=Math.round(protein);
      fat=Math.round(fat);

      globalresult = `Bmr is ${finalbmr} calories .Required nutrients intake are : 
      carbohydrates ${carb}gm , Proteins ${protein}gm and fat ${fat}gm `;
      isset="true";
      tempresult=finalbmr;
      carbs=carb;
      proteins=protein;
      fats=fat;
     // alert(`BMR obtained is  ${finalbmr} calories and  carbo being ${carb} gm, protein ${protein} gm and fat ${fat} gm`);
    // resetForm();
    }

  }
  
  //Function to reset form data to initial values
  const resetForm = () => {
      setFrequency('Little/no exercise');
      setWeight(0);
      setAge(0);
      setError({});
  }
 
  //Defining structure of form and it's input fields
  return (
    <div>
    <div className='Firstquarter'>
    <h4 className='Bmrheading'>BMR CALCULATOR</h4>
    <form onSubmit={handleSubmit} >
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off" 
    >
      <div>
        <TextField
          id="outlined-select-frequency"
          select
          label="Exercise-frequency"
          value={frequency}
          onChange={handleChangeFrequency}
        >
          {frequencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField  
        type="number" 
        id="outlined-basic" 
        value={weight} 
        label="Weight[kg]" 
        variant="outlined" 
        onChange={handleChangeWeight}
        
        {...(error.weight && {error : true ,helperText : error.weight })}
        />
      </div>

      <div>
      <TextField 
      type="number" 
      id="outlined-basic" 
      value={age} 
      label="Age[years]" 
      variant="outlined" 
      onChange={handleChangeAge}
      
      {...(error.age && {error : true ,helperText : error.age })}
      />

        <TextField
          id="outlined-select-diet"
          select
          label="Diet-type"
          value={diet}
          onChange={handleChangeDiet}
        >
          {diets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      <Button type='submit' variant="contained" >BMR</Button>
      
      </div>
    </Box>
    </form>
    <br></br>
    </div>
    <div className='Secondquarter'>
    <Box className='out' component="span" sx={{ display: 'block' }}>
      <h4>BMR is : {tempresult} Calories Carb : {carbs}gm Proteins : {proteins}gm Fat : {fats}gm</h4>
    </Box>
    <p className='Paratext'>Your Basal Metabolic Rate (BMR) signifies the total calories you burn in a day.
     It also includes the calories burned through daily activity, including exercise.
     Carbs ,Proteins and Fat quantity determines daily carbohydrates protein and fat consumption. 
    </p>
          <br></br>
    </div>

    </div>
  );
}

  export default Bmr;
