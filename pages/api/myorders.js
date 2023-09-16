const Razorpay = require('razorpay');
import Order from "../../model/Order"
import connectDb from "../../midleware/connectDb"
import Jwt from "jsonwebtoken";


const handler = async (req, res) => {
    const token = req.body.token
    let data = Jwt.verify(token, process.env.JWT_SECRET)
    // console.log(data);
    let orders = await Order.find({ email: data?.email })
    res.status(200).json({ orders })
}

export default connectDb(handler);