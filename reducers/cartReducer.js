
const cartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            const { cart } = state;
            let { itemCode, qty, name, size, variant } = action.payload;
            let updatedCart = cart
            if (itemCode in cart) {
                updatedCart[itemCode].qty = cart[itemCode].qty + qty
            }
            else {
                updatedCart[itemCode] = { qty: 1, name, size, variant }
            }
            return {
                ...state,
                cart: updatedCart,
            };
        default:

    }
}

export default cartReducer