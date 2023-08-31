const mongoose = require('mongoose');

const OredrSchema = new mongoose.Schema({
    email: { type: String, required: true },
    O_id: { type: String, required: true },
    products: { type: Object, required: true },
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Pending" },
}, { timestamps: true });

// mongoose.models = {};

export default mongoose.models.Order || mongoose.model("Order", OredrSchema);