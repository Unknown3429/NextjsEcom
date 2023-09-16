const Razorpay = require('razorpay');
import Order from "../../model/Order"
import Product from "../../model/Product"
import connectDb from "../../midleware/connectDb";



const handler = async (req, res) => {
    if (req.method === 'POST') {


        var rajorPay = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SCERET });

        var options = {
            amount: 1000 * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: (Math.random() * 29).toString()
        };
        try {

            // checking cart is tempered or not
            let product, sumTotal = 0
            let cart = req.body.cart
            for (let item in cart) {
                product = await Product.findOne({ slug: item })
                sumTotal += cart[item]?.price * cart[item]?.qty;
                // console.log(cart[item]?.price, product.price);

                if (product.price != cart[item].price) {
                    res.status(200).json({ error: true })
                    return
                }
            }
            if (sumTotal != req.body.subTotal) {
                res.status(200).json({ error: true })
                return
            }

            const response = await rajorPay.orders.create(options);

            res.status(200).json({
                id: response?.id,
                amount: response?.amount,
                currency: response?.currency,
                O_Id: response?.id
            })
            let order = new Order({
                email: JSON.parse(req.body).email,
                address: JSON.parse(req.body).address,
                amount: JSON.parse(req.body).subTotal,
                products: JSON.parse(req.body).cart,
                O_id: response?.id
            })


            await order.save();


        } catch (error) {
            console.log(error);
        }
    }

}

export default connectDb(handler);