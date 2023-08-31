const Razorpay = require('razorpay');
import Order from "../../model/Order"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(JSON.parse(req.body).email);
        var rajorPay = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SCERET });
        var options = {
            amount: 1000 * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: (Math.random() * 29).toString()
        };
        try {
            const response = await rajorPay.orders.create(options);
            // console.log(response);
            res.json({
                id: response?.id,
                amount: response?.amount,
                currency: response?.currency
            })
            // console.log(JSON.parse(req.body).product, response?.id);
            let order = new Order({
                email: JSON.parse(req.body).email,
                address: JSON.parse(req.body).address,
                amount: JSON.parse(req.body).subTotal,
                products: JSON.parse(req.body).product,
                O_id: response?.id
            })
            await order.save();

            
        } catch (error) {
            console.log(error);
        }
    }

}

export default connectDb(handler);