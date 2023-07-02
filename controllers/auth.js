const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const User = require('../models/User')

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        // throw error
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email: email })
    if (!user) {
        // throw error
        throw new UnauthenticatedError('Invalid Credentials')
    }

    // match password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ msg: user, token: token })
}

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).json({ msg: "Register Succesful, go to login page", USER_PROFILE: user })
}

module.exports = { login, register }