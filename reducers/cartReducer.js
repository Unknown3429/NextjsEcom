import { useRouter } from "next/router"

const cartReducer = (state, action) => {
    const router = useRouter()
    switch (action.type) {
        case "ADD_TO_CART":
            let localcart = JSON.parse(localStorage.getItem("cart"))
            let cart = {}
            const itemCode = action.payload[0];
            let qty = action.payload[1];
            let price = action.payload[2];
            const name = action.payload[3];
            const size = action.payload[4];
            const variant = action.payload[5];
            let updatedCart;


            // checking cart is empty or not
            if (localcart) {
                updatedCart = localcart;
            } else {
                updatedCart = cart
                localcart = {}
            }


            // checking item is availble in cart or not
            if (itemCode in localcart || itemCode in updatedCart) {
                updatedCart[itemCode].qty = localcart[itemCode].qty + qty
                updatedCart[itemCode].subt = updatedCart[itemCode]?.price * (updatedCart[itemCode]?.qty)
                localStorage.setItem("cart", JSON.stringify(updatedCart))
            }
            else {
                updatedCart[itemCode] = { qty: 1, price, name, size, variant, subt: price }
                console.log(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart))
            }
            return {
                ...state,
                cart2: updatedCart,
            };

        case "CLEAR_CART":
            localStorage.setItem("cart", JSON.stringify({}))
            return {
                ...state,
                cart2: {},
            };


        case "REMOVE_ITEM":
            const { itemCode1, qty1 } = action.payload
            let localcart1 = JSON.parse(localStorage.getItem("cart"))
            let removeItem = localcart1

            // checking item is availble in cart or not
            if (itemCode1 in localcart1) {
                removeItem[itemCode1].qty = localcart1[itemCode1].qty - qty1
                removeItem[itemCode1].subt = localcart1[itemCode1]?.price * (localcart1[itemCode1]?.qty)
                localStorage.setItem("cart", JSON.stringify(removeItem))

                if (removeItem[itemCode1].qty <= 0) {
                    delete removeItem[itemCode1];
                }
            }

            return {
                ...state,
                cart2: removeItem,
            };

        case "BUY_ITEM":
            const { itemCode2, qty2, price1, name1, size1, variant1 } = action.payload
            // let localcart2 = JSON.parse(localStorage.getItem("cart"))
            let buyItem = {}
            console.log(itemCode2);
            buyItem[itemCode2] = { qty: qty2, price: price1, name: name1, size: size1, variant: variant1, subt: price1 };
            localStorage.setItem("cart", JSON.stringify({}))
            localStorage.setItem("cart", JSON.stringify(buyItem))
            router.push("/checkout")
            return {
                ...state,
                cart2: buyItem,
            };



        default:
            return {
                ...state,
            };

    }
}

export default cartReducer