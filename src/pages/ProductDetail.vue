<template>
  <div v-if="product" class="detail">
    <img :src="product.image" />

    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <h2>R$ {{ product.price.toLocaleString('pt-BR') }}</h2>

      <button @click="addToCart(product)">Adicionar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { addToCart } from '../store/store'

const route = useRoute()
const product = products.find(p => p.id === Number(route.params.id))
</script>

<style scoped>
.detail {
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>