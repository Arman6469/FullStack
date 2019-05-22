import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      
        <NavLink exact activeClassName = 'is-active' to= '/'>
                Home
        </NavLink>
        <NavLink activeClassName = 'is-active' to= '/about'>
                About
        </NavLink>
        <NavLink activeClassName = 'is-active' to= '/shop'>
                Shop
        </NavLink>

    </nav>
  )
}
