import * as React from 'react';
import "./Dietplan.css";
import {Box,TextField,MenuItem,Button,FormControl} from '@mui/material';

//array for underweight persons
const uwbeakfast = ["2 egg brown bread sandwich","green chutney","1 cup milk/1 cup curd","3 cashews + 4 almonds + 2 walnuts"];
const uwlunch = ["1 cup arhar or moong dal/chicken curry","3 chapatti","1/2 cup rice","1 cup low curd + salad"];
const uwsnacks = ["1 cup tomato/strawberry soup","1 cup poha/upma","1 bread/banana"];
const uwdinner = ["1 cup veg/1.5 cup non-veg","3 chapati","salad + 1/2 cup rice"];

//array for overweight persons
const owbeakfast = ["3 egg whites/2 besan cheelas","1/2 cup low fat curd","1 apple/1 papaya","1 cup coconut water"];
const owlunch = ["1 cup masoor or arhar dal","1 cup rajma/chicken curry","1 chapatti","1/4 cup rice + salad"];
const owsnacks = ["1 cup vegetable soup","1 cup low fat milk","1 banana"];
const owdinner = ["1 cup parwal-veg/1 cup beans or peas","1 chapati","salad + 1/4 cup rice"];

//array for obese persons
const obbeakfast = ["1 cucumber hungcurd sandwich","Brown bread upma/oats with milk","1 apple","1 watermelon/musk-melon"];
const oblunch = ["1 cup white chana or chana dal","1 cup soyabean/chicken curry","1 chapatti","1/2 cup curd + salad"];
const obsnacks = ["1 cup fruit salad/sprout salad","1 cup low fat milk","1 banana"];
const obdinner = ["1 cup tinda or ghia veg/cauliflower veg","1 chapati","salad + no-rice"];

var bfres,lunres,snares,dinres;
var bmis,val,expectedweight,netweightdiff,perfact,output="Your output would be displayed here",isset="false";
function Dietplan() {

  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const [error, setError] = React.useState({});

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const HandleChangeHeight = (event) => {
    setHeight(event.target.value);
    console.log(event.target.value);
  };

  const validate = () => {
    let temp={}
    
    var weightnum = Number(weight);
    if(weightnum>=38 && weightnum<=500)
      temp.weight="";
    else
      temp.weight="weight should be in range of 38-500";
        
    var heightnum = Number(height);
    if(heightnum>=50 && heightnum<=300)
      temp.height="";
    else
      temp.height="height should be in range of 50-300";

     setError({...temp});

     return Object.values(temp).every(x => x == "");
}

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
}, [height]);

//calculate bodyat upo change in text value
const handleSubmitonfield = () => {
  //e.preventDefault();
  if(validate())
  {
    var newweight = Number(weight);
    var newheight = Number(height);
    var heightmeter = newheight/100;
    
    bmis = newweight / (heightmeter*heightmeter);
    bmis=Math.round(bmis);

    if(bmis<18)
    val="Underweight";

    if(bmis>=18 && bmis<=25)
    val="Normal"

    if(bmis>25 && bmis<=30)
    val="Overweight"

    if(bmis>30)
    val="Obese"

    if(val === "Underweight")
    {
      expectedweight = 19 * (heightmeter*heightmeter);
      expectedweight = Math.round(expectedweight);
      netweightdiff = expectedweight - newweight ;
      perfact = "increase"

      bfres=uwbeakfast
      lunres=uwlunch
      snares=uwsnacks
      dinres=uwdinner
    }

    if(val === "Overweight" || val === "Obese")
    {
      expectedweight = 24 * (heightmeter*heightmeter);
      expectedweight = Math.round(expectedweight);
      netweightdiff = newweight - expectedweight ; 
      perfact = "decrease"

      if(val === "Overweight")
      {
        bfres=owbeakfast
        lunres=owlunch
        snares=owsnacks
        dinres=owdinner
      }
      else
      {
        bfres=obbeakfast
        lunres=oblunch
        snares=obsnacks
        dinres=obdinner
      }
    }
}

}

const handleSubmit = (e) => {
    e.preventDefault();
    if(validate())
    {
      isset="true";
      
    var newweight = Number(weight);
    var newheight = Number(height);
    var heightmeter = newheight/100;
    
    bmis = newweight / (heightmeter*heightmeter);
    bmis=Math.round(bmis);

    if(bmis<18)
    val="Underweight";

    if(bmis>=18 && bmis<=25)
    val="Normal"

    if(bmis>25 && bmis<=30)
    val="Overweight"

    if(bmis>30)
    val="Obese"

    if(val === "Underweight")
    {
      expectedweight = 19 * (heightmeter*heightmeter);
      expectedweight = Math.round(expectedweight);
      netweightdiff = expectedweight - newweight ;
      perfact = "increase"

      bfres=uwbeakfast
      lunres=uwlunch
      snares=uwsnacks
      dinres=uwdinner
    }

    if(val === "Overweight" || val === "Obese")
    {
      expectedweight = 24 * (heightmeter*heightmeter);
      expectedweight = Math.round(expectedweight);
      netweightdiff = newweight - expectedweight ; 
      perfact = "decrease"

      if(val === "Overweight")
      {
        bfres=owbeakfast
        lunres=owlunch
        snares=owsnacks
        dinres=owdinner
      }
      else
      {
        bfres=obbeakfast
        lunres=oblunch
        snares=obsnacks
        dinres=obdinner
      }
    }

  }
  
}

  return (
      <div className='Greatone'>
         
          <div className='Grandonestwo'>

          <h4 className='Dietheading'><strong>MY DIET-PLAN</strong></h4>
              <div className='Grandonestwofirst'>
              <br></br>
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
      type="number" 
      id="outlined-basic" 
      value={weight} 
      label="Weight[kg]" 
      variant="outlined" 
      onChange={handleChangeWeight}

      {...(error.weight && {error : true ,helperText : error.weight })}
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
      <Button className='Buttonpos' type='submit'  variant="contained" >BMI</Button>
      </div>
      </Box>
    </form>
    <br></br>
    </div>
    
    <div className='Grandonestwosecond'>
      <br></br>
      {isset == "false" && <p className='Gotspara'>{output}</p>}
      {(val=="Underweight" || val=="Overweight" || val=="Obese") && isset == "true" && 
        <ul>
          <li>Your BMI is <b>{bmis}%</b> and hence you fall into <b>{val}</b> category.</li>
          <li>Your expected weight shoud be <b>{expectedweight}kgs</b> for you to be in normal bmi category.</li>
          <li> Hence you need to <b>{perfact}</b> your weight by <b>{netweightdiff}kgs</b>.</li>
          <li>So,we suggest you an advisable diet plan which will fulfill the nutritional demands of your body.</li>
        </ul>
      }
      {(val=="Normal") && isset == "true" && 
        <ul>
          <li>Your BMI is <b>{bmis}%</b> and hence you fall into <b>{val}</b> category.</li>
          <li>You are having a perfect body weight w.r.t to the height that you have.</li>
          <li>Just follow your daily dietry routine and your body will remain in perfect BMI.</li>
        </ul>
      }
      <br></br>
      
    </div>
    <br></br>
        </div>
    <div className='Bigones'> 
      <div className='Firstones'>
        <div className='Firstquarters'>
        <h4 className='Bodyfatheading'>Breakfast : (8-9 AM)</h4>
      {(isset=="false" || val=="Normal") && <p className='Paratext'>The following section tells about the list of food items 
      that needs to be consumed in morning time between the slot of 8-9 am.Food items mentioned will be in 
      accordance with person's BMI status.It is adviced to follow the diet strictly to get the best possible 
      result.
          </p> }
          {isset == "true" && (val=="Underweight" || val=="Overweight" || val=="Obese") &&
          <ul className='Listval'>
            {
              bfres.map((value)=> <li>{value}</li>)
            }
          </ul>
            }
          <br></br>
       </div>

       <div className='Firstquarters'>
    <h4 className='Bodyfatheading'>Lunch : (12-1 PM)</h4>
    {(isset=="false" || val=="Normal") && <p className='Paratext'>The following section tells about the list of food items 
      that needs to be consumed in afternoon time between the slot of 12-1 pm.Food items mentioned will be in 
      accordance with person's BMI status.It is adviced to follow the diet strictly to get the best possible 
      result.
          </p> }
          {isset == "true" && (val=="Underweight" || val=="Overweight" || val=="Obese") &&
          <ul className='Listval'>
            {
              lunres.map((value)=> <li>{value}</li>)
            }
          </ul>
            }
          <br></br>
       </div>

       <div className='Secondquarters'>
       <h4 className='Bodyfatheading'>Snacks : (5-6 PM)</h4>
       {(isset=="false" || val=="Normal") && <p className='Paratext'>The following section tells about the list of food items 
      that needs to be consumed in evening time between the slot of 5-6 pm.Food items mentioned will be in 
      accordance with person's BMI status.It is adviced to follow the diet strictly to get the best possible 
      result.
          </p> }
          {isset == "true" && (val=="Underweight" || val=="Overweight" || val=="Obese") &&
          <ul className='Listval'>
            {
              snares.map((value)=> <li>{value}</li>)
            }
          </ul>
            }
          <br></br>
       </div>
    

       <div className='Secondquarters'>
       <h4 className='Bodyfatheading'>Dinner : (8-9 PM)</h4>
       {(isset=="false" || val=="Normal") && <p className='Paratext'>The following section tells about the list of food items 
      that needs to be consumed in night time between the slot of 8-9 pm.Food items mentioned will be in 
      accordance with person's BMI status.It is adviced to follow the diet strictly to get the best possible 
      result.
          </p> }
          {isset == "true" && (val=="Underweight" || val=="Overweight" || val=="Obese") &&
          <ul className='Listval'>
            {
              dinres.map((value)=> <li>{value}</li>)
            }
          </ul>
            }
          <br></br>
       </div>
       </div>

    </div>
    </div>
  )
}

export default Dietplan