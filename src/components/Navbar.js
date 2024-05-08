import React from 'react';
import { Link } from 'react-router-dom';
//  import { useState } from 'react';

export default function Navbar(props) {


 


  return (
    // props are  properties, we can use it as variables.you can pass Link varibles,link,what ever you want.
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.titles}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.About}</Link>
        </li>
        
      
       
      </ul>
      <div className="dropdown mx-3">
  <button className={`btn  dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="dropdown" aria-expanded="true">
    Modes
  </button>
  <ul className="dropdown-menu">
  <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
        <button type="button" onClick={props.red} className="btn btn-danger">Red</button>
        <button type="button" className="btn btn-warning">Yellow</button>
        <button type="button" className="btn btn-success">Green</button>
        <button type="button" className="btn btn-dark">Black</button>
        
        
</div>
  </ul>
</div>
       
      <form className="d-flex" role="search">
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input my-2 " onClick={props.modechange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label  mx-2 my-1"    htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
    </div>
        <button className="btn btn-outline-success"  type="submit">Search</button>
       
      </form>
    </div>
    
  </div>
</nav>
    
  )
}
