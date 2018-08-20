import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div style={{ background: '#B03B3F', paddingTop: '12px', paddingBottom: '12px', color: 'black', textDecoration: 'none' }}>

    <NavLink
      to="/"
      style={{padding: '12px', margin: '0 6px 6px', textDecoration: 'none', color: 'black'}}
      >
      <span className="navbar-logo">justBrunch</span>
    </NavLink>

      <NavLink
        to="/"
        style={link}
        >
        <span className="navbar-link">Home</span>
      </NavLink>
      <NavLink
        to="/"
        style={link}
        className="navbar-link"
        >
        About
      </NavLink>
      <NavLink
        to="/new"
        style={link}
        className="navbar-link"
        >
        Add Brunch Spot
      </NavLink>
      <NavLink
        to="/restaurants"
        style={link}
        className="navbar-link"
        >
        Brunch Recommendations
      </NavLink>
      <NavLink
        to="/recipes"
        style={link}
        className="navbar-link"
        >
        Recipes
      </NavLink>
    </div>
  )
}

export default NavBar;
