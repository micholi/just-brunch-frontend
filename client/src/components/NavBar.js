import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#B03B3F',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div style={{ background: '#B03B3F', paddingTop: '12px', paddingBottom: '12px' }}>

    <NavLink
      to="/"
      style={{width: '100px', padding: '12px', margin: '0 6px 6px', background: '#B03B3F', textDecoration: 'none', color: 'black'}}
      >
      justBrunch
    </NavLink>

      <NavLink
        to="/"
        style={link}
        >
        Home
      </NavLink>
      <NavLink
        to="/"
        style={link}
        >
        About
      </NavLink>
      <NavLink
        to="/new"
        style={link}
        >
        Add Brunch Spot
      </NavLink>
      <NavLink
        to="/restaurants"
        style={link}
        >
        Brunch Recommendations
      </NavLink>
    </div>
  )
}

export default NavBar;
