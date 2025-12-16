import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useCart } from '../../context/cartHelpers';
import { useAuth } from '../../context/authHelpers';
import { useProduct } from '../../context/productHelpers';

const Header = () => {
    const { isAuthenticated } = useAuth(); // Accessing authentication status from AuthContext
    const { cartItems } = useCart(); // Accessing cart items from CartContext
    const { debouncedSearch } = useProduct(); // Accessing the search handler from ProductContext
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
                    <input className="search-bar" type="text" placeholder="Search" onKeyUp={ debouncedSearch } />
                </div>

                <div className="right-section">
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
