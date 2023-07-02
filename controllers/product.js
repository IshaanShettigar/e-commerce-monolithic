const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({ msg: products, nbHits: products.length })
}

const getSingleProduct = async (req, res) => {
    const name = req.params.name
    const product = await Product.find({ name: name })
    res.status(StatusCodes.OK).json({ msg: product })
}
const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: product })
}

module.exports = { getAllProducts, createProduct, getSingleProduct }