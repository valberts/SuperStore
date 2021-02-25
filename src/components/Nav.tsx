import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink className="logo" to="/">
        <h3>Logo</h3>
      </NavLink>
      <ul className="nav-links">
        <NavLink activeClassName="selected" className="link" exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="selected" className="link" to="/deals">
          <li>Deals</li>
        </NavLink>
        <NavLink activeClassName="selected" className="link" to="/cart">
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav