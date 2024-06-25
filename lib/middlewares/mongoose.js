import mongoose from "mongoose"

const MongooseConnect = async (req, res, next) => {
    try {
        if(!global.mongoose) {
            global.mongoose = await mongoose.connect(process.env.DATABASE_URI)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Database error')
    }
    next()
}

export default MongooseConnect