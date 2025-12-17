import { Link } from 'react-router-dom'
import '../Checkout/CheckoutHeader.css'
import { useCart } from '../../context/cartHelpers'

const CheckoutHeader = () => {
    const {cartItems} = useCart();

    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                    <Link to="/">
                        <span className="logo">E-COMMERCE</span>
                    </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">{cartItems.length} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                    <img src="/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutHeader
