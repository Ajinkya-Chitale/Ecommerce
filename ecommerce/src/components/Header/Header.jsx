import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <span className="logo">E-COMMERCE</span>
                {/* <img className="logo"
                    src="images/logo-white.png" />
                <img className="mobile-logo"
                    src="images/mobile-logo-white.png" /> */}
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                <img className="search-icon" src="/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="/cart-icon.png" />
                    <div className="cart-quantity">3</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Header
