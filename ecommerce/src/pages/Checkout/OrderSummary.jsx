const OrderSummary = ({cartItems}) => {
  return (
    <>
      <div className="order-summary">
        {
          cartItems.map((item, index) => {
            const { title, price, image, quantity } = item;
            return (
              <div className="cart-item-container" key={index}>
                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src={image}
                  />

                  <div className="cart-item-details">
                    <div className="product-name">
                      {title}
                    </div>
                    <div className="product-price">{price}</div>
                    <div className="product-quantity">
                      <span>
                        Quantity: <span className="quantity-label">{quantity}</span>
                      </span>
                      <div className="quantity-action-links">
                        <button
                          className="quantity-btn decrement-btn"
                          disabled={quantity <= 1}
                        >-</button>
                        <span className="quantity-value">{quantity}</span>
                        <button
                          className="quantity-btn increment-btn"
                        >+</button>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default OrderSummary
