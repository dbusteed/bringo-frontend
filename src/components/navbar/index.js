import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ul>
          <li><Link to="/">View all boards</Link></li>
        </ul>
      </div>
    )
  } 
}
  
export default NavBar