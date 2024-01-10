import { create } from 'zustand'
import { OrderItem } from '../models/OrderModel'
import { round2 } from '../utils'

type Cart = {
  items: OrderItem[]
  itemsPrice: number
  // taxPrice: number
  shippingPrice: number
  totalPrice: number
}

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  // taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
}

export const cartStore = create<Cart>(() => initialState)

export default function useCartService() {
  const { items, itemsPrice, totalPrice, shippingPrice } = cartStore()

  return {
    items,
    itemsPrice,
    shippingPrice,
    totalPrice,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug)
      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }]

      const { itemsPrice, shippingPrice, totalPrice } =
        calcuPrice(updatedCartItems)
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        // taxPrice,
        totalPrice,
      })
    }, //this line add or increase items in the cart

    // this line remove or decrease items in the cart
    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug)
      if (!exist) return

      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) => (item.slug ? { ...exist, qty: exist.qty - 1 } : x))

      const { itemsPrice, shippingPrice, totalPrice } =
        calcuPrice(updatedCartItems)

      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        totalPrice,
      })
    },
  }
}

const calcuPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    totalPrice = round2(itemsPrice + shippingPrice)

  return { itemsPrice, totalPrice, shippingPrice }
}
