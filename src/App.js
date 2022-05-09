import logo from './logo.svg';
import './App.css';
import { Link,Route,Router } from 'react-router-dom';
import Switch from "react-switch";
import Homepage from './components/Homepage/Homepage';
import Dietplan from './components/Utils/Dietplan/Dietplan';

function App() {
  return (
      <div className="App">
       <Homepage />
       </div>
    
  );
}

export default App;
