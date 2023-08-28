import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { CartProvider } from "../context/cartContext"
// import { useCartContext } from '../../context/cartContext';

import "../styles/globals.css"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    // const { addToCart } = useCartContext()
    const [cart, setCart] = useState({});
    const [subTotal, setSubTotal] = useState(0);
    const [change, seChange] = useState()

    // for add item in cart 
    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = cart;
        if (itemCode in cart) {
            newCart[itemCode].qty = cart[itemCode].qty + qty
        }
        else {
            newCart[itemCode] = { qty: 1, name, price, size, variant }
        }
        setCart(newCart);
        saveCart(newCart);
        seChange(newCart)
    }

    // buy now button

    const buyNow = (itemCode, qty, price, name, size, variant) => {
        let newCart = { itemCode: { qty, price, name, size, variant } };
        // newCart[itemCode] = { qty: 1, name, price, size, variant }
        clearCart()
        setCart(newCart)
        saveCart(newCart);
        router.push("/checkout")
    }

    // for remove item in cart 
    const removeFromCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = cart;
        if (itemCode in cart) {
            newCart[itemCode].qty = cart[itemCode].qty - qty
        }
        if (newCart[itemCode].qty <= 0) {
            delete newCart[itemCode];
        }
        setCart(newCart);
        saveCart(newCart);
        seChange(newCart)
    }

    const saveCart = (newCart) => {
        localStorage.setItem("cart", JSON.stringify(newCart));
        let subt = 0;
        let keys = Object.keys(newCart);
        if (keys.length > 0) {
            for (let index = 0; index <= keys.length; index++) {
                subt = + cart[keys]?.price * cart[keys]?.qty
            }
        }
        setSubTotal(subt)
    }


    // for clear cart 
    const clearCart = () => {
        setCart({});
        saveCart({});
    }


    useEffect(() => {
        try {
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
        } catch (error) {
            console.log(error);
            localStorage.clear();
        }

    }, [change, subTotal])
    return (
        <>
            <Navbar />
            <Component key={subTotal} buyNow={buyNow} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
            <Footer />

        </>
    )
}



export default MyApp

