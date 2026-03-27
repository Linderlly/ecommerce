<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" />
    <p>{{ product.description }}</p>
    <p>R$ {{ product.price }}</p>

    <button @click="addToCart">Adicionar ao carrinho</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()
const product = products.find(p => p.id === Number(route.params.id))

function addToCart() {
  alert("Produto adicionado!")
}
</script>