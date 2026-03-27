<template>
  <div>
    <div class="banner">🔥 Mega Promoções da Loja Tech!</div>

    <div class="search">
      <input v-model="search" placeholder="Buscar produtos..." />
    </div>

    <div class="grid">
      <ProductCard
        v-for="p in filtered"
        :key="p.id"
        :product="p"
        @view="goToProduct"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const filtered = computed(() =>
  products.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

function goToProduct(id: number) {
  router.push(`/product/${id}`)
}
</script>

<style scoped>
.search {
  padding: 10px 20px;
}
</style>