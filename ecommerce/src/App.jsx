import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
