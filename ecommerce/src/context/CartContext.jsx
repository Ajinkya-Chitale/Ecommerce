import { useState } from "react";
import { CartContext } from "./cartHelpers";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item while maintaining immutability
    const addToCart = (newItem, quantity, setAddedToCart) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.id === newItem.id);

            if (isItemInCart) {
                // Return a new array with the updated quantity for the matching item
                return prevItems.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }

            // If item is not in cart, add it to the array
            return [...prevItems, { ...newItem, quantity: quantity }];
        });

        setAddedToCart(true);

        // Reset addedToCart to false after 3 seconds
        setTimeout(() => {
            setAddedToCart(false);
        }, 1000);
    };

    // Function to increment quantity of an item
    const incrementQuantity = (itemToIncrementId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemToIncrementId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to decrement quantity of an item
    const decrementQuantity = (itemToDecrementId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === itemToDecrementId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        })
    }

    // Function to delete an item from the cart
    const deleteItem = (itemToDeleteId) => {
        setCartItems((prevItems) => {
            return prevItems.filter(item => item.id !== itemToDeleteId);
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, deleteItem }}>
            { children }
        </CartContext.Provider>
    )
}

export { CartContextProvider }