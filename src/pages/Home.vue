<template>
  <div>
    <h1>Loja Tech</h1>

    <div class="banner">🔥 Promoções!</div>

    <h2>Produtos em destaque</h2>

    <div class="grid">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
        @view="goToProduct"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProduct(id: number) {
  router.push(`/product/${id}`)
}
</script>