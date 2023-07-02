const { BadRequestError, NotFoundError } = require('../errors')
const Order = require('../models/Orders')
const { StatusCodes } = require('http-status-codes')

const placeOrder = async (req, res) => {
    res.status(StatusCodes.CREATED).json({ msg: "Placing order route", user: req.user })
}

const getAllOrders = async (req, res) => {
    const orders = await Order.find({ orderedBy: req.user.userId })
    res.status(StatusCodes.OK).json({ msg: orders, nbHits: orders.length })
}

const getSingleOrder = async (req, res) => {
    const orderId = req.params.id;
    if (!orderId) {
        throw new BadRequestError("There is no order id with which to search")
    }
    const order = await Order.find({ orderedBy: req.user.userId, _id: orderId })
    if (!order) {
        throw new NotFoundError("Could not find order with this Id belonging to this user")
    }

    res.status(StatusCodes.OK).json({ msg: order })
}

const updateOrderStatus = async (req, res) => {
    const orderId = req.params.id
    const { newStatus } = req.body
    const order = await Order.findByIdAndUpdate({ _id: orderId, createdBy: req.user.userId }, { status: newStatus }, { new: true, runValidators: true })
    if (!order) {
        throw new NotFoundError("Could not find order with that orderId")
    }
    res.status(StatusCodes.OK).json({ msg: order })
}

module.exports = { getAllOrders, getSingleOrder, placeOrder, updateOrderStatus }