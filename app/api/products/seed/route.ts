import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data

  try {
    await dbConnect()

    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    return NextResponse.json({
      message: 'seeded successfully',
      users,
      products,
    })
  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json({ error: 'Failed to seed data' }) // Return appropriate error response
  }
}
