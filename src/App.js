
import "./App.css";
import Alert from "./components/Alert.js";

import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import React, { useState } from 'react'
import About from "./components/About.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState("light");
  const[alert,setalert]=useState(null);
  

  const showalert=(message,type)=>{
    setalert({
   msg:message,
   type:type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
    

    
}
  
  const modechange=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="grey"  
      
      showalert(" Dark mode is enable " ,"success")
    }
    else{
      setmode('light');    
      document.body.style.backgroundColor="white"
      showalert(" light mode is enable " ,"primary")
  }
}
const red=()=>{
  document.body.style.backgroundColor="red";
}

 
return (
 <>


 
 

 <Router>
 <Navbar titles ="Textutilsbolte" About="About us" mode={mode} modechange={modechange} red={red} />
 <Alert   alert={alert} />
 <Switch>
 
          <Route exact path="/about">
            <About />
          </Route>
      
          <Route   exact path="/">
          <Textform heading="Enter text to Analize :"showalert={showalert} mode={mode}/>
          </Route>
        </Switch>
        </Router>
 
        
 </>

  );
}

export default App;
