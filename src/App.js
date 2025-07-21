// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode , setMode] =useState("light")  //whether dark mode enabled or not
  const [alert ,setAlert] = useState(null); // alert ki state

  const showAlert = (message , type)=>{
     setAlert({
      msg:message,
      type:type
     })
      
     setTimeout(()=>{
        setAlert(null)
     }, 1500)
  } 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled" , "success");
      document.title = 'TextUtils-Dark Mode'
    }
    else{
      setMode("light");
       document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Has Been Enabled" , "success");
        document.title = 'TextUtils-Light Mode'
    }
  }
  return (
    <>
    <BrowserRouter>
  {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
  <Navbar title= "TextUtils" mode ={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
    <div className="container my-3">
     
      <Routes>
          <Route exact path="/about" element={<About />}/>
          
          <Route exact path="/"  element={<TextForm heading="Enter the text to analyze below" mode ={mode} showAlert={showAlert}/> }/>

      </Routes>
   </div>
   </BrowserRouter>
    </>
  );
}

export default App;
