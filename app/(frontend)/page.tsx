import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'

export default function Home() {
  return (
    <>
      <div className="">
        <h2 className="py-2 text-2xl capitalize">latest products</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>

        {/* TODO: other products will go here */}
        <div className="">
          <h2 className="py-2 text-2xl capitalize">featured products</h2>
        </div>
      </div>
    </>
  )
}
