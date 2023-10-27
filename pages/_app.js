import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { CartProvider } from "../context/cartContext"

import LoadingBar from 'react-top-loading-bar'
// import { useCartContext } from '../../context/cartContext';

import "../styles/globals.css"
import { useRouter } from "next/router"
import { SkeletonTheme } from "react-loading-skeleton"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    const [progress, setProgress] = useState(0)
    const [cart, setCart] = useState({});
    const [key, setKey] = useState(0)
    const [user, setUser] = useState({ value: null });
    const [mode, setMode] = useState(false)

    // for add item in cart 
    // const addToCart = (itemCode, qty, price, name, size, variant) => {
    //     let newCart = cart;
    //     if (itemCode in cart) {
    //         newCart[itemCode].qty = cart[itemCode].qty + qty
    //     }
    //     else {
    //         newCart[itemCode] = { qty: 1, name, price, size, variant }
    //     }
    //     setCart(newCart);
    //     saveCart(newCart);
    //     setChange(Math.random())
    // }

    // buy now button
    // const buyNow = (itemCode, qty, price, name, size, variant) => {
    //     let newCart = {};
    //     newCart[itemCode] = { qty, price, name, size, variant };
    //     // newCart[itemCode] = { qty: 1, name, price, size, variant }
    //     clearCart()
    //     setCart(newCart)
    //     saveCart(newCart);
    //     router.push("/checkout")
    // }

    // for remove item in cart 
    // const removeFromCart = (itemCode, qty) => {
    //     let newCart = cart;
    //     if (itemCode in cart) {
    //         newCart[itemCode].qty = cart[itemCode].qty - qty
    //     }
    //     if (newCart[itemCode].qty <= 0) {
    //         delete newCart[itemCode];
    //     }
    //     setCart(newCart);
    //     saveCart(newCart);
    //     setChange(Math.random())
    // }

    // const saveCart = (newCart) => {
    //     localStorage.setItem("cart", JSON.stringify(newCart));
    //     let subt = 0;
    //     let keys = Object.keys(newCart);
    //     if (keys.length > 0) {
    //         for (let index = 0; index <= keys.length; index++) {
    //             subt = + cart[keys]?.price * cart[keys]?.qty
    //         }
    //     }
    //     setSubTotal(subt)
    // }


    // for clear cart 
    // const clearCart = () => {
    //     setCart({});
    //     saveCart({});
    // }

    // for logout 
    const logout = () => {
        localStorage.removeItem("myuser")
        setKey(Math.random())
        router.push('/login')

    }


    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setProgress(40)
        })
        router.events.on('routeChangeComplete', () => {
            setProgress(100)
        })
        try {
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
        } catch (error) {
            console.log(error);
            localStorage.clear();
        }
        const myuser = JSON.parse(localStorage.getItem("myuser"))
        if (myuser) {
            setUser({ value: myuser.token, email: myuser?.email })
        }
        setKey(Math.random())
        if (!myuser) {
            setUser({ value: null })
            setKey(Math.random())
        }
    }, [router?.query,])


    return (
        <>
            <CartProvider>
                <SkeletonTheme baseColor="#999DA0" highlightColor="#BEBDB8">
                    <LoadingBar
                        color='#6366f1'
                        waitingTime={500}
                        progress={progress}
                    />
                    <Navbar mode={mode} setMode={setMode} logout={logout} key1={key} user={user} />
                    <Component mode={mode} user={user} {...pageProps} />
                    <Footer />
                </SkeletonTheme>
            </CartProvider>
        </>
    )
}



export default MyApp

