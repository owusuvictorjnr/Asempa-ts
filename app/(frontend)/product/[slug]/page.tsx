import data from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = data.products.find((x) => x.slug === params.slug)

  if (!product) {
    return <div className="capitalize">product not found</div>
  }
  return (
    <>
      <div className="my-2 capitalize">
        <Link href="/">back to products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            className="rounded"
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>

        {/* Product Information */}
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>

            <li>
              {product.rating} of {product.numReviews} reviews
            </li>

            <li>{product.brand}</li>

            <li>
              <div className="divider"></div>
            </li>

            <li>{product.description}</li>
          </ul>
        </div>

        {/* Product Action */}
        <div className="">
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div className="capiptalize">price</div>
                <div className="">&#x20B5; {product.price}</div>
              </div>

              <div className="mb-2 flex justify-between">
                <div className="">status</div>
                <div className="">
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                </div>
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full" type="button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
