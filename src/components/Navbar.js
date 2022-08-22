import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
     <div className="container-fluid">
       <a classNameName="navbar-brand" href="/">{props.title} </a>
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/home">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.about}</Link>
        </li> */}
     </ul>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>

    </div>
  </div>
  </nav>
   
  )
}
Navbar.prototype={title:PropTypes.string.isRequired,
                about: PropTypes.string}
 Navbar.defaultProps = {
    title: 'set title here',
    about: 'About text here'
 }               