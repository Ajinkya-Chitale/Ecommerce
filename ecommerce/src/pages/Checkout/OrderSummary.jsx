const OrderSummary = ({cartItems}) => {
  return (
    <>
      <div className="order-summary">
        {
          cartItems.map((item, index) => {
            const { title, price, image } = item;
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
                        Quantity: <span className="quantity-label">1</span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
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
