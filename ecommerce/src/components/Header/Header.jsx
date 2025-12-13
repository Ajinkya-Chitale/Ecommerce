import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import { AuthenticatedContext } from '../../context/AuthContext';
import { useCart } from '../../context/cartHelpers';

const Header = () => {
    const { isAuthenticated } = useContext(AuthenticatedContext);
    const {cartItems} = useCart();
    const navigate = useNavigate();

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <span className="logo">E-COMMERCE</span>
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
                        <div className="cart-quantity">{cartItems.length}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>

                {
                    !isAuthenticated && 
                    <div className='login-section'>
                        <button className='loginBtn' onClick={() => navigate('/login')}>Login</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Header
