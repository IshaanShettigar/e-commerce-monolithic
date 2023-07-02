require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/Product')
const data = require('./mock-data/product_data.json')

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany({})
        await Product.create(data)
        console.log("Worked")
        process.exit(0)

    }
    catch (error) {
        console.log("Did not work", error)
        process.exit(1)
    }
}

populate()