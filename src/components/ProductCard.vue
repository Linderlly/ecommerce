<template>
  <div class="card">
    <img :src="product.image" />
    <h3>{{ product.name }}</h3>
    <p>R$ {{ product.price }}</p>
    <button @click="$emit('view', product.id)">Ver</button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../data/products'

defineProps<{ product: Product }>()
</script>