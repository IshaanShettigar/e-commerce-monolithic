const mongoose = require('mongoose')

const singleOrderItem = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 1
    },
    product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Product'
    }
})

const completeOrder = mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: String,
        required: [true, "Enter an address"]
    },
    total: {
        type: Number,
        required: true
    },
    orderItems: [singleOrderItem],
    status: {
        type: String,
        enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
        default: 'pending',
    },
}, { timestamps: true }
)

module.exports = mongoose.model('Order', completeOrder)