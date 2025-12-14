import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { LoaderProvider } from './context/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <LoaderProvider>
          <Router>
            <App />
          </Router>
        </LoaderProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
