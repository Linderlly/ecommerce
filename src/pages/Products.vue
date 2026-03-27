<template>
  <div class="container">
    <h1>Produtos</h1>

    <div class="filters">
      <input v-model="search" placeholder="Buscar produto..." />

      <select v-model="category">
        <option value="">Todas categorias</option>
        <option value="Tecnologia">Tecnologia</option>
      </select>
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
const category = ref('')

const filtered = computed(() =>
  products.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) &&
    (category.value === '' || p.category === category.value)
  )
)

function goToProduct(id: number) {
  router.push(`/product/${id}`)
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>