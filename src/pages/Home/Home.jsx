import React, {useContext, useEffect, useState} from 'react'
import hsytle from './home.module.css';
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const {allCoin, currency}=useContext(coinContext)
    const [displayCoin, setDisplayCoin]=useState([])
    const [input, setInput]=useState('')

    const inputHandler=(e)=> {
        setInput(e.target.value)
        if(e.target.value === '') {
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler= async (e)=> {
        e.preventDefault()
        const coins=await allCoin.filter((item)=> {
            return item.name.toLowerCase().includes(input.toLowerCase()) 
        })
        setDisplayCoin(coins);
    }

    useEffect(()=> {
        setDisplayCoin(allCoin);
    },[allCoin])

  return (
    <div className={hsytle.home}>
        <div className={hsytle.hero}>
            <h1>Largest<br/>CryptoCurrency Marketplace</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum et modi optio ducimus ut? Cum alias sit maiores eaque, repellat qui ad, voluptatem aspernatur numquam nisi tempore dolor minima?</p>
            <form onSubmit={searchHandler}>
                <input type="text" placeholder="Search..." onChange={inputHandler} value={input} list='coinlist' required/>
                <datalist id="coinlist">{allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}</datalist>
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
                    <Link to={`/Cryptotic/coin/${coin.id}`} className={hsytle.tableLayout} key={idx}>
                        <p>{coin.market_cap_rank}</p>
                        <div>
                            <img src={coin.image} alt="" />
                            <p>{coin.name + " - "+coin.symbol}</p>
                        </div>
                        <p>{currency.symbol}{coin.current_price.toLocaleString()}</p>
                        <p className={(coin.price_change_percentage_24h>0)?hsytle.green:hsytle.red}>{Math.floor(coin.price_change_percentage_24h*100)/100}</p>
                        <p className={hsytle.marketCap}>{currency.symbol}{coin.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home