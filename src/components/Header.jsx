import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      <span className="title">Pokemon</span>
      {/* <div className="nav">
        <NavLink to="/" className="nav-link" style={({ isActive }) => { return { color: isActive ? "red" : 'white' } }} >Home</NavLink>
        <NavLink to="/search" className="nav-link" style={({ isActive }) => { return { color: isActive ? "red" : 'white' } }} >Search</NavLink>
      </div> */}
    </div>
  )
}

export default Header