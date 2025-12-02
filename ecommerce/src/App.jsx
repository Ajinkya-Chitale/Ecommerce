import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import Tracking from './pages/Tracking/Tracking'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='orders' element={<Orders />} />
        <Route path='tracking' element={<Tracking />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
