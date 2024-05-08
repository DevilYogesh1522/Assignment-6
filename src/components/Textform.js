import { useState } from "react"
import React from 'react'

export default function Textform(props) {
  
  const handleOnClick=()=>{
    
    let upp=Text.toUpperCase();
    SetText(upp);
    props.showalert("Converted to uppercase","danger")
    }
  const handleOnChange=(event)=>{
   SetText(event.target.value)
  }

  const handleToLower=()=>{
    let down=Text.toLowerCase();
    SetText(down)
    props.showalert("Converted to Lowercase","warning")
  }
  const handleToClear=()=>{
    let down="";
    SetText(down)
  }



  const [ Text,SetText] = useState("");
  return (


    
<div className="container">

          <div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className={`form-label my-3 text-${props.mode==='dark'?'light':'dark'}`}><h2>{props.heading}</h2></label>
<textarea className="form-control"  value={Text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='light'?'dark':'white'}} id="exampleFormControlTextarea1" rows="3"></textarea>
<button type="button" className="btn btn-primary my-3" onClick={handleOnClick}>convert to upperCase</button>
<button type="button" className="btn btn-primary my-3 mx-3" onClick={handleToLower}>tolowercase</button>
<button type="button" className="btn btn-primary my-3 mx-3" onClick={handleToClear}>toClear</button>

<h3>Summary of the input is :</h3>
<p> {Text}</p>

<p> {Text.length} characters and {Text.split(" ").filter((element)=>{return element.length!==0}).length} words </p>
          </div>

          </div>
  )
}