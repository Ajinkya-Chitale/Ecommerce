import { useState } from "react";
import { CartContext } from "./cartHelpers";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item while maintaining immutability
    const addToCart = (newItem, quantity) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.id === newItem.id);

            if (isItemInCart) {
                // Return a new array with the updated quantity for the matching item
                return prevItems.map((item) => {
                    item.id === newItem.id ? { ...item, quantity: item.quantity + quantity } : item;
                });
            }

            // If item is not in cart, add it to the array
            return [...prevItems, { ...newItem, quantity: quantity }];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export { CartContextProvider }