import User from "../../model/User"
import connectDb from "../../midleware/connectDb"
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {

    if (req.method == 'POST') {
        // console.log("request",req.body);
        const token = await req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        let dbuser = await User.findOneAndUpdate({ email: user.email }, { address: req.body.address, pincode: req.body.pincode, phone: req.body.phone, name: req.body.name });
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ success: false })
    }

}

export default connectDb(handler);