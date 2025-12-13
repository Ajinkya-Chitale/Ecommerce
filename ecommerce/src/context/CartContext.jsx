import { useState } from "react";
import { CartContext } from "./cartHelpers";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item while maintaining immutability
    const addToCart = (newItem) => {
        setCartItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export { CartContextProvider }