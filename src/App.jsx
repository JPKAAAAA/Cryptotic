import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Coin from './pages/Coin/Coin.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/Cryptotic/' element={<Home />} />
        <Route path='Cryptotic/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App