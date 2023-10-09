import User from "../../model/User"
import connectDb from "../../midleware/connectDb"
import jsonwebtoken from "jsonwebtoken"
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {

    if (req.method == 'POST') {
        const token = await req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        // checking pass matching
        let dbuser = await User.findOne({ email: user.email });
        var bytes = CryptoJS.AES.decrypt(dbuser?.password, process.env.AES_SECRET);
        var userPassword = bytes.toString(CryptoJS.enc.Utf8);

        // updating pass
        if (JSON.parse(userPassword) == req.body.password && req.body.npassword == req.body.cpassword) {
            var password = CryptoJS.AES.encrypt(JSON.stringify(req.body?.npassword), process.env.AES_SECRET).toString();
            let dbupdateuser = await User.findOneAndUpdate({ email: user.email }, { password: password });
            res.status(200).json({ success: true })
        }
        else{
            res.status(200).json({ success: false })
        }
    }
    else {
        res.status(400).json({ success: false })
    }

}

export default connectDb(handler);