import React from 'react'
import hsytle from './home.module.css';

const Home = () => {
  return (
    <div className={hsytle.home}>
        <div className={hsytle.hero}>
            <h1>Largest<br/>CryptoCurrency Marketplace</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum et modi optio ducimus ut? Cum alias sit maiores eaque, repellat qui ad, voluptatem aspernatur numquam nisi tempore dolor minima?</p>
            <form>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className={hsytle.cryptoTable}>
            <div className={hsytle.tableLayout}>
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24Hr Change</p>
                <p className={hsytle.marketCap}>Market Cap</p>
            </div>
        </div>
    </div>
  )
}

export default Home