require('dotenv').config()

const connectDB = require('./db/connect')
const Order = require('./models/Orders')
const data = require('./mock-data/orders.json')

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Order.deleteMany({})
        await Order.create(data)
        console.log("Worked")
        process.exit(0)

    }
    catch (error) {
        console.log("Did not work", error)
        process.exit(1)
    }
}

populate()