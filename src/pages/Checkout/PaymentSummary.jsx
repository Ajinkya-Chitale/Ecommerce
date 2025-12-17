const PaymentSummary = ({ cartItems }) => {
  // Constants for pricing
  const DEFAULT_AMOUNT = 0.00;
  const SHIPPING_COST = cartItems.length > 0 ? 4.99 : DEFAULT_AMOUNT;
  const TAX_RATE = cartItems.length > 0 ? 0.05 : DEFAULT_AMOUNT;

  // Calculate totals
  const itemsTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const subtotal = itemsTotal + SHIPPING_COST;
  const taxAmount = subtotal * TAX_RATE;
  const orderTotal = subtotal + taxAmount;
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">Payment Summary</div>

        <div className="payment-summary-row">
          <div>Items ({totalItems}):</div>
          <div className="payment-summary-money">${itemsTotal.toFixed(2)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div className="payment-summary-money">${SHIPPING_COST.toFixed(2)}</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money">${subtotal.toFixed(2)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax ({(TAX_RATE * 100).toFixed(0)}%):</div>
          <div className="payment-summary-money">${taxAmount.toFixed(2)}</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total:</div>
          <div className="payment-summary-money">${orderTotal.toFixed(2)}</div>
        </div>

        <button className="place-order-button button-primary">
          Place your order
        </button>
      </div>
    </>
  );
};

export default PaymentSummary;
