import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import Tracking from './pages/Tracking/Tracking'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { useEffect, useState } from 'react'
import api from './api'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const response = await api.get('/carts');
      setCartItems(response.data);
    }

    getCartItems();
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='orders' element={<Orders />} />
        <Route path='tracking' element={<Tracking />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
