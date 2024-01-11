import mongoose from 'mongoose'

async function dbConnect() {
  try {
    // console.log('Connecting to MongoDB:', process.env.MONGODB_URI) // Log connection string
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Connection error:', error) // Log detailed error message
    throw new Error('Connection failed') // Re-throw for handling elsewhere
  }
}

export default dbConnect
