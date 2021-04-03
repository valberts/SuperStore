import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav>
      <NavLink className="logo" to="/">
        <h3>Logo</h3>
      </NavLink>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#fff', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={"nav-links"}>
        <NavLink
          activeClassName="selected"
          className="link"
          exact
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="link"
          to="/deals"
        >
          <li>Deals</li>
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="link"
          to="/cart"
        >
          <li>Cart</li>
        </NavLink>
      </ul>

      <ul className={`burger-links ${navbarOpen ? ' showMenu' : ''}`}>
        <NavLink
          activeClassName="selected"
          className="link"
          exact
          to="/"
          onClick={() => closeMenu()}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="link"
          to="/deals"
          onClick={() => closeMenu()}
        >
          <li>Deals</li>
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="link"
          to="/cart"
          onClick={() => closeMenu()}
        >
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
