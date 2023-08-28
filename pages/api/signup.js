import User from "../../model/User"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        const u = new User(req?.body)
        await u.save();

        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ success: false })
    }
}

export default connectDb(handler);