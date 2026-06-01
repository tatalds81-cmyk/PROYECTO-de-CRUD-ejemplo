//conectarnos con mongo
import mongoose from 'mongoose'
import 'dotenv/config'

const conectarDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        connectTimeoutMS: 10000,
        socketTimeoutMS: 10000,
        serverSelectionTimeoutMS: 10000,
    })
    console.log('MongoDB conectado')
} 


export default conectarDB
