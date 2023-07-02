const express = require('express')
const router = express.Router()

const { getAllOrders, getSingleOrder, placeOrder, updateOrderStatus } = require('../controllers/orders')

router.get('/', getAllOrders)
router.get('/:id', getSingleOrder)
router.post('/', placeOrder)
router.patch('/:id', updateOrderStatus)

module.exports = router