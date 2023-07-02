const express = require('express')
const { getAllProducts, createProduct, getSingleProduct } = require('../controllers/product')
const router = express.Router()



router.get('/', getAllProducts)
router.post('/', createProduct)
router.get('/:name', getSingleProduct)
// finish later
// router.post('/img')


module.exports = router