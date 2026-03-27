<template>
  <header class="header">
    <h1 @click="goHome">Loja Tech</h1>

    <div>
      <button @click="toggleTheme">
        {{ darkMode ? '☀️' : '🌙' }}
      </button>

      <button @click="goProducts">Produtos</button>
      <button @click="goCart">🛒 ({{ cart.length }})</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { darkMode, cart } from '../store/store'

const router = useRouter()

function goHome() {
  router.push('/')
}

function goProducts() {
  router.push('/products')
}

function goCart() {
  router.push('/cart')
}

function toggleTheme() {
  darkMode.value = !darkMode.value
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #2563eb;
  color: white;
  flex-wrap: wrap;
}

button {
  margin: 5px;
}
</style>