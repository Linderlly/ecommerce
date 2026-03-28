import { ref } from 'vue'
import { getProductFinalPrice } from '../utils/pricing'

export const cart = ref<any[]>([])
export const favorites = ref<number[]>([])
export const darkMode = ref(false)

export function addToCart(product: any) {
  const normalizedProduct = {
    ...product,
    price: getProductFinalPrice(product)
  }

  const item = cart.value.find(p => p.id === product.id)

  if (item) {
    item.price = normalizedProduct.price
    item.quantity++
  } else {
    cart.value.push({ ...normalizedProduct, quantity: 1 })
  }
}

export function increaseQuantity(id: number) {
  const item = cart.value.find(p => p.id === id)
  if (item) item.quantity++
}

export function decreaseQuantity(id: number) {
  const item = cart.value.find(p => p.id === id)

  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(id)
    }
  }
}

export function removeFromCart(id: number) {
  cart.value = cart.value.filter(p => p.id !== id)
}

export function toggleFavorite(id: number) {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter(f => f !== id)
  } else {
    favorites.value.push(id)
  }
}