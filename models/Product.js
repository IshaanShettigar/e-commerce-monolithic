const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    image: {
        data: Buffer,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    avgRating: {
        type: Number,
        min: 1,
        max: 5
    },
    price: {
        type: Number,
        min: 1,
        required: [true, "please enter price for product"]
    }
})

module.exports = mongoose.model("Product", productSchema)