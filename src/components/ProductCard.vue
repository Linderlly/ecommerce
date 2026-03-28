<template>
  <div class="card">
    <img :src="product.image" />

    <h3>{{ product.name }}</h3>
    <div class="price-block">
      <p v-if="hasDiscount" class="old-price">
        {{ formatBRL(product.price) }}
      </p>

      <div class="price-line">
        <span v-if="hasDiscount" class="discount-badge">{{ product.discountPercent }}% OFF</span>
        <p class="price">{{ formatBRL(finalPrice) }}</p>
      </div>

      <p v-if="product.freeShipping" class="shipping">Frete grátis</p>
    </div>

    <div class="actions">
      <button class="view" @click="$emit('view', product.id)">
        👁 Ver
      </button>

      <button class="cart" @click="add">
        🛒
      </button>

      <button class="fav" @click="fav">
        {{ isFav ? '❤️' : '🤍' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../data/products'
import { addToCart, toggleFavorite, favorites } from '../store/store'
import { computed } from 'vue'
import { getProductFinalPrice, formatBRL } from '../utils/pricing'

const props = defineProps<{ product: Product }>()

function add() {
  addToCart(props.product)
}

function fav() {
  toggleFavorite(props.product.id)
}

const finalPrice = computed(() => getProductFinalPrice(props.product))

const hasDiscount = computed(() =>
  typeof props.product.discountPercent === 'number' && props.product.discountPercent > 0
)

const isFav = computed(() =>
  favorites.value.includes(props.product.id)
)
</script>

<style scoped>
.card {
  background: white;
  padding: 15px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-6px);
}

img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 10px;
}

h3 {
  margin: 0 0 10px;
  color: #0f172a;
}

.price {
  font-weight: bold;
  color: #2563eb;
  margin: 0;
}

.price-block {
  margin-bottom: 12px;
}

.old-price {
  margin: 0 0 6px;
  color: #64748b;
  text-decoration: line-through;
  font-size: 0.92rem;
}

.price-line {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.discount-badge {
  background: #bbf7d0;
  color: #166534;
  border: 1px solid #86efac;
  font-size: 0.75rem;
  font-weight: 800;
  border-radius: 6px;
  padding: 3px 7px;
}

.shipping {
  margin: 6px 0 0;
  color: #16a34a;
  font-size: 0.9rem;
  font-weight: 700;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
}

/* BOTÃO VER */
.view {
  flex: 1;
  background: #2563eb;
  font-size: 14px;
}

.view:hover {
  background: #1d4ed8;
}

/* BOTÃO CARRINHO */
.cart {
  background: #22c55e;
  width: 45px;
}

.cart:hover {
  background: #16a34a;
}

/* BOTÃO FAVORITO */
.fav {
  background: #f1f5f9;
  color: red;
  width: 45px;
}

.fav:hover {
  background: #ffe4e6;
}

/* RESPONSIVO */
@media (max-width: 500px) {
  img {
    height: 220px;
  }

  .actions {
    flex-direction: column;
  }

  .cart, .fav {
    width: 100%;
  }
}
</style>