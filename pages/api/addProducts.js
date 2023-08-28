import Product from "../../model/Product"
import connectDb from "../../midleware/connectDb"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            const p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save();
        }
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ success: false })
    }
}

export default connectDb(handler);