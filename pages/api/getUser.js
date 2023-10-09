import User from "../../model/User"
import connectDb from "../../midleware/connectDb"
import jsonwebtoken from "jsonwebtoken"



const handler = async (req, res) => {

    if (req.method == 'POST') {
        // console.log("request",req.body);
        const token = await req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        let dbuser = await User.findOne({email:user.email});
        // console.log(dbuser);
        const {name, email, address, pincode, phone} = dbuser
        res.status(200).json({ name, email, address, pincode, phone })
    }
    else {
        res.status(400).json({ error: "error" })
    }

}

export default connectDb(handler);