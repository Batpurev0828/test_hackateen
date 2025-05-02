import mongoose, { model } from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {type: Date, default: Date.now},
    linked: [Number]
});

const Items = mongoose.model('Items', itemSchema);

export default Items;