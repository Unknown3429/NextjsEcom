import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/cartReducer'

const CartContext = createContext();

const intialState = {
    // cart: [],
    cart2: [],
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    // For aading New Item 
    const addToCart2 = (itemCode, qty, name, size, variant) => {
        dispatch({ type: "ADD_TO_CART", payload: itemCode, qty, name, size, variant })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart2 }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };