const Razorpay = require('razorpay');
import Order from "../../model/Order"
import connectDb from "../../midleware/connectDb"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const SECRET = "881205"
        const order = await Order.find().sort({ _id: -1 }).limit(1);
        const orderId = order[0]?.O_id
        const Id = order[0]?._id
        const response = JSON.parse(JSON.stringify(req.body)).razorpay_payment_id;

        const payment_Dumb = fetch(`https://api.razorpay.com/v1/payments/${response}/capture`, {
            method: 'POST'
        })
        const payment = await fetch(`https://checkout.razorpay.com/v1/payments/:${response}`);

        const orderUpdate = await Order.findOneAndUpdate({ O_id: orderId }, { status: "Authorized", payment_id: response })
        console.log(payment_Dumb);
        console.log(payment);
        res.redirect('/order?id=' + Id +"&clearcart=1", 200)
    }
}

export default connectDb(handler);