import mongoose from 'mongoose'

// Backend Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    banner: String,
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel

// Frontend Scehema
export type Product = {
  _id?: string
  name: string
  slug: string
  image: string
  banner?: string
  brand: string
  description: string
  category: string
  price: number
  rating: number
  numReviews: number
  countInStock: number
  color?: []
  sizes?: []
}
