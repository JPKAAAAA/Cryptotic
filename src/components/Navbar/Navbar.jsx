import React from 'react'
import navstyle from './navbar.module.css';
import logo from '../../assets/logo-cryptotic.png';
import aicon from '../../assets/aicon.png';
const Navbar = () => {
  return (
    <div className={navstyle.navbar}>
      <div className={navstyle.logodiv}>
        <img src={logo} alt="logo" className={navstyle.logo}/>
        <h3>CryptoTic</h3>
      </div>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className={navstyle.navRight}>
            <select>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
            </select>
            <button>Sign Up<img src={aicon} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Navbar