import { useState } from "react";
import { useCart } from "../../context/cartHelpers";

const ProductContainer = ({product}) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Function to round the decimal number to nearest - for star rating 
    const roundToNearestHalf = (num) => {
        return Math.round(num * 2) / 2;
    }

    return (
        <div className="product-container">
            <div className="product-image-container">
            <img className="product-image"
                src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
            {product.title}
            </div>

            <div className="product-rating-container">
            <img className="product-rating-stars"
                src={`../src/assets/ratings/rating-${roundToNearestHalf(product.rating.rate)*10}.png`} />
            <div className="product-rating-count link-primary">
                {product.rating.count}
            </div>
            </div>

            <div className="product-price">
            ${product.price}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
            <img src="/checkmark.png" />
            Added
            </div>

            <button className="add-to-cart-button button-primary" onClick={ () => addToCart(product, quantity) }>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductContainer
