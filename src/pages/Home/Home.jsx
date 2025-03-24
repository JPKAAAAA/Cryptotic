import React, {useContext, useEffect, useState} from 'react'
import hsytle from './home.module.css';
import { coinContext } from '../../context/CoinContext';

const Home = () => {
    const {allCoin, currency}=useContext(coinContext)
    const [displayCoin, setDisplayCoin]=useState([])

    useEffect(()=> {
        setDisplayCoin(allCoin);
    },[allCoin])

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
            {
                displayCoin.slice(0,10).map((coin,idx)=> (
                    <div className={hsytle.tableLayout} key={idx}>
                        <p>{coin.market_cap_rank}</p>
                        <div>
                            <img src={coin.image} alt="" />
                            <p>{coin.name + " - "+coin.symbol}</p>
                        </div>
                        <p>{currency.symbol}{coin.current_price.toLocaleString()}</p>
                        <p>{Math.floor(coin.price_change_percentage_24h*100)/100}</p>
                        <p className={hsytle.marketCap}>{currency.symbol}{coin.market_cap.toLocaleString()}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home