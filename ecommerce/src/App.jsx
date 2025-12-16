import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/authHelpers'

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='checkout' element={<Checkout />} />
        </Route>
        
        {/* Public Routes */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
