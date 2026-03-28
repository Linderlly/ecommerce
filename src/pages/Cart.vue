<template>
  <div class="cart">
    <h1>Carrinho</h1>

    <div v-if="cart.length === 0" class="empty">
      <p>Seu carrinho está vazio 😢</p>
    </div>

    <div v-else>
      <div class="item" v-for="item in cart" :key="item.id">
        <img :src="item.image" />

        <div class="info">
          <h3>{{ item.name }}</h3>
          <p>{{ formatPrice(item.price) }}</p>

          <div class="controls">
            <button @click="decrease(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase(item.id)">+</button>
          </div>

          <button class="remove" @click="remove(item.id)">
            Remover
          </button>
        </div>
      </div>

      <div class="total">
        <h2>Total: {{ formatPrice(total) }}</h2>
        <button class="checkout">Finalizar compra</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cart, increaseQuantity, decreaseQuantity, removeFromCart } from '../store/store'
import { computed } from 'vue'

function increase(id: number) {
  increaseQuantity(id)
}

function decrease(id: number) {
  decreaseQuantity(id)
}

function remove(id: number) {
  removeFromCart(id)
}

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
</script>

<style scoped>
.cart {
  padding: 20px;
}

.empty {
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
}

.item {
  display: flex;
  gap: 15px;
  background: white;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
}

img {
  width: 90px;
  border-radius: 8px;
}

.info {
  flex: 1;
}

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
}

.controls button {
  padding: 5px 10px;
  font-size: 16px;
}

.remove {
  background: #ef4444;
  margin-top: 5px;
}

.checkout {
  margin-top: 10px;
  background: #22c55e;
}

.total {
  text-align: right;
  margin-top: 20px;
}

.total h2 {
  font-family: 'Exo 2', 'Segoe UI', sans-serif;
}

.item {
  transition: all 0.3s ease;
}

.item:hover {
  transform: scale(1.02);
}

button {
  transition: transform 0.2s ease;
}

button:active {
  transform: scale(0.9);
}
.dark .cart {
  color: white;
}

.dark .item {
  background: #1e293b;
}

.dark .info h3,
.dark .info p {
  color: #e2e8f0;
}

.dark .total h2 {
  color: #f1f5f9;
}

.dark .controls button {
  background: #334155;
  color: white;
}

.dark .remove {
  background: #dc2626;
}

.dark .checkout {   
  background: #16a34a;
}

@media (max-width: 600px) {
  .item {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 100%;
  }

  .total {
    text-align: center;
  }

  .checkout {
    width: 100%;
  }
}
</style>