import CheckoutHeader from "./CheckoutHeader";
import "../Checkout/Checkout.css";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../context/cartHelpers";
import PaymentSummary from "./PaymentSummary";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cartItems } = useCart();
    
    return (
        <>
            <title>Checkout</title>
            <CheckoutHeader />
            <div className="checkout-page">
                {
                    cartItems.length === 0 ?
                    <div className="empty-cart-message">
                        Your cart is empty. Please add items to your cart before proceeding to checkout.
                        <Link to="/" className="view-products-link">View Products</Link>
                    </div>
                    :
                    <>
                        <div className="page-title">Review your order</div>
                        <div className="checkout-grid">
                            <OrderSummary cartItems = {cartItems} />
                            <PaymentSummary cartItems = {cartItems} />
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default Checkout;
