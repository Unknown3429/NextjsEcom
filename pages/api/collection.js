import Product from "../../model/Product"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    let category = await Product.distinct("category");
    let img = []
    for (let i = 0; i < category.length; i++) {
        let product = await Product.findOne({ category: category[i] });
        img.push(product);
    }
    res.status(200).json({ img })
}
export default connectDb(handler);