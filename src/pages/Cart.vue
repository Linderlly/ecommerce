<template>
  <div>
    <h1>Carrinho</h1>

    <CartItem
      v-for="item in cart"
      :key="item.id"
      :item="item"
      @increase="increase"
      @decrease="decrease"
      @remove="remove"
    />

    <h2>Total: R$ {{ total }}</h2>

    <button @click="goCheckout">Finalizar compra</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CartItem from '../components/CartItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cart = ref([
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://via.placeholder.com/100",
    quantity: 1
  }
])

function increase(id: number) {
  const item = cart.value.find(i => i.id === id)
  if (item) item.quantity++
}

function decrease(id: number) {
  const item = cart.value.find(i => i.id === id)
  if (item && item.quantity > 1) item.quantity--
}

function remove(id: number) {
  cart.value = cart.value.filter(i => i.id !== id)
}

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function goCheckout() {
  router.push('/checkout')
}
</script>