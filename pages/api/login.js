import User from "../../model/User"
import connectDb from "../../midleware/connectDb"
var CryptoJS = require("crypto-js");



const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email });
        // Decrypt

        // console.log(userPassword);
        // console.log(req.body.password.toString());
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user?.password, process.env.AES_SECRET);
            var userPassword = bytes.toString(CryptoJS.enc.Utf8);
            var password = req.body.password;

            if (req.body.email == user.email && password == JSON.parse(userPassword)) {
                var jwt = require('jsonwebtoken');
                var token = jwt.sign({ name: user?.name, email: user?.email }, process.env.JWT_SECRET);
                res.status(200).json({ success: true, name: user?.name, token })
            }
            else {
                res.status(400).json({ success: false, error: "Invalid Credentials" })
            }
        } else {
            res.status(400).json({ success: false, error: "User Not Found" })
        }
    }
    else {
        res.status(200).json({ success: false, error: "method is not found" })
    }
}

export default connectDb(handler);