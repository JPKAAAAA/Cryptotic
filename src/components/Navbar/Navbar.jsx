import React, { useContext } from 'react'
import navstyle from './navbar.module.css';
import logo from '../../assets/logo-cryptotic.png';
import aicon from '../../assets/aicon.png';
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const setCurrency=useContext(coinContext)

  const currencyHandler=(e)=> {
    switch(e.target.value)
    {
      case "usd": {
        setCurrency({name:"usd",symbol:"d"});
        break;
      }
      case "euro": {
        setCurrency({name:"euro",symbol:"€"});
        break;
      }
      case "inr": {
        setCurrency({name:"usd",symbol:"₹"});
        break;
      }
      default : {
        setCurrency({name:"inr",symbol:"₹"});
        break;
      }
    }
  }

  return (
    <div className={navstyle.navbar}>
      <div className={navstyle.logodiv}>
        <Link to="/Cryptotic/">
          <img src={logo} alt="logo" className={navstyle.logo}/>
        </Link>
        <Link to="/Cryptotic/">
          <h3 className={navstyle.brandName}>CryptoTic</h3>
        </Link>
      </div>
        <ul>
            <Link to="/Cryptotic/">
              <li>Home</li>
            </Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className={navstyle.navRight}>
            <select onChange={currencyHandler}>
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