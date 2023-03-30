import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  const setThemeBlue =()=>{
  props.setcolor('blue')
  }
  const setThemeGrey =()=>{
  props.setcolor('grey')
  }
  const setThemeGreen =()=>{
  props.setcolor('green')
  }
  const setThemeRed =()=>{
  props.setcolor('red')
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">About</Link> */}
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
          <div>
          <button type="button" className="btn btn-primary mx-1" style={{borderRadius:"20px"}} onClick={setThemeBlue}>Blue</button>
          <button type="button" className="btn btn-secondary mx-1" style={{borderRadius:"20px"}} onClick={setThemeGrey}>Grey</button>
          <button type="button" className="btn btn-success mx-1" style={{borderRadius:"20px"}} onClick={setThemeGreen}>Green</button>
          <button type="button" className="btn btn-danger mx-1" style={{borderRadius:"20px"}} onClick={setThemeRed}>Red</button>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input mx-1" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set title"
}