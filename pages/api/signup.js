import User from "../../model/User"
import connectDb from "../../midleware/connectDb"
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
    if (req.method == 'POST') {
        // console.log(req.body);
        const { name, email } = req?.body;
        var password = CryptoJS.AES.encrypt(JSON.stringify(req.body?.password), 'secret123').toString();
        const u = new User({name, email, password})
        await u.save();

        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ success: false })
    }
}

export default connectDb(handler);