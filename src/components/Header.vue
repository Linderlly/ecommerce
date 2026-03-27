<template>
  <header class="header">
    <h1 class="logo" @click="goHome">Loja Tech</h1>

    <nav>
      <button @click="goProducts">Produtos</button>
      <button @click="goCart">Carrinho 🛒</button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

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
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 15px;
}

.logo {
  cursor: pointer;
}

button {
  margin-left: 10px;
  padding: 8px;
  cursor: pointer;
}
</style>