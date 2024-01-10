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
