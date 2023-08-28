import Product from "../../model/Product"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            const p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
          
        }
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ success: false })
    }
}

export default connectDb(handler);