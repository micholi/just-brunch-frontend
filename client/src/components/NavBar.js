import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={link}
        >
        Home
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
        Restaurants
      </NavLink>
    </div>
  )
}

export default NavBar;
