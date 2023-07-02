const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
    // check if header exists and starts w/ Bearer
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authentication Invalid')
    }

    // get token
    const token = authHeader.split(' ')[1]

    // check if token valid
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId, name: payload.name }
        console.log("Verified", req.user);
        next()
    }
    catch (err) {
        throw new UnauthenticatedError('Invalid Token during Authentication')
    }
}

module.exports = authenticationMiddleware