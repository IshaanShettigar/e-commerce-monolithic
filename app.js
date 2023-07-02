require('dotenv').config()
require('express-async-errors')
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const app = express()

// database connection
const connectDB = require('./db/connect')

// auth and error middleware
const authenticationMiddleware = require('./middleware/authentication')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// routers
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const orderRouter = require('./routes//orders')

app.use(helmet());
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({ msg: "deafult route" })
})

// error handler middlewares

app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/orders', authenticationMiddleware, orderRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log("Server listening at port ", port)
        })
    }
    catch (error) {
        console.log(error);
    }
}

start()
