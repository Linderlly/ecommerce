interface ProductWithDiscount {
  price: number
  discountPercent?: number
}

export function getDiscountedPrice(price: number, discountPercent?: number) {
  if (!discountPercent || discountPercent <= 0) return price

  const discounted = price * (1 - discountPercent / 100)
  return Number(discounted.toFixed(2))
}

export function getProductFinalPrice(product: ProductWithDiscount) {
  return getDiscountedPrice(product.price, product.discountPercent)
}

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
