import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../App.css"

function NavBar({ cartItemsQty }) {
  const [navbar, setNavbar] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <nav
      className={`${isHome ? "white-text" : "black-text"} ${
        navbar ? "navBar active" : "navBar"
      } ${navbar ? "navBar-text active" : "navBar-text"} `}
    >
      <Link to="/">Welcome</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart" id="fas fa-shopping-cart navbarText">
        <i class="fas fa-shopping-cart"></i>
        {cartItemsQty}
      </Link>
    </nav>
  )
}

export default NavBar
