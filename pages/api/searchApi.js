import Product from "../../model/Product"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    if (req.method == 'GET') {
        try {
            const searchProducts = await Product.find({ category: { $in: ["Tshirts", "hoodies", "watches", "caps"] } });

            res.status(200).json({ searchProducts })
        } catch (error) {
            res.status(200).json({ success: false })
        }
    }
    else {
        res.status(400).json({ success: false })
    }
}

export default connectDb(handler);