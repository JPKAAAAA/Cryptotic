import React from 'react'
import cstyle from './coin.module.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { coinContext } from '../../context/CoinContext';

const Coin = () => {
  const {coinId} = useParams();
  const [coinData, setCoinData]=useState()
  const {currency} = useContext(coinContext);

  const fetchCoinData = async () => {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-gCSv8dtcBadZ6SxKmBScMptv	'
    }
  };

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then(res => res.json())
    .then(res => setCoinData(res))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if(coinData)
  {
    return (
      <div className='coin'>
        <div className='coin-nme'>
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div className={cstyle.spinner}>
        <div className={cstyle.spin}></div>
      </div>
    )
  }
}

export default Coin