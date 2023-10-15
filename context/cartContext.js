import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/cartReducer'

const CartContext = createContext();



const intialState = {
    cart2: [],
    sub_total: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    // For aading New Item 
    const addToCart2 = (itemCode, qty, price, name, size, variant) => {
        // console.log(itemCode);
        dispatch({ type: "ADD_TO_CART", payload: [itemCode, qty, price, name, size, variant] })
    }

    // For Clear Cart Item 
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // for remove item in cart 
    const removeFromCart = (itemCode1, qty1, price, name, size, variant) => {
        dispatch({ type: "REMOVE_ITEM", payload: { itemCode1, qty1, price, name, size, variant } })
    }

    // buy now button
    const buyNow = (itemCode2, qty2, price1, name1, size1, variant1) => {
        dispatch({ type: "BUY_ITEM", payload: { itemCode2, qty2, price1, name1, size1, variant1 } })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart2, clearCart, removeFromCart, buyNow }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };