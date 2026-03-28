<template>
  <div>
    <div class="banner">🔥 Mega Promoções da Loja Tech!</div>

    <div class="filters">
      <div class="search-wrap">
        <span class="control-icon" aria-hidden="true">⌕</span>
        <input
          v-model="search"
          class="filter-control"
          placeholder="Buscar produtos..."
          type="search"
        />
      </div>

      <div class="select-wrap">
        <span class="control-icon" aria-hidden="true">☰</span>
        <select v-model="category" class="filter-control filter-select">
          <option value="">Todas categorias</option>
          <option
            v-for="cat in categories"
            :key="cat"
            :value="cat"
          >
            {{ cat }}
          </option>
        </select>
      </div>
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

const categories = computed(() =>
  [...new Set(products.map(p => p.category))].sort((a, b) => a.localeCompare(b))
)

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
.filters {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 10px 20px 16px;
}

.search-wrap,
.select-wrap {
  position: relative;
  min-width: 230px;
  flex: 1;
}

.control-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #64748b;
  pointer-events: none;
}

.filter-control {
  width: 100%;
  height: 46px;
  appearance: none;
  -webkit-appearance: none;
  color-scheme: light;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 0 14px 0 34px;
  margin: 0;
  font-size: 0.95rem;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.05);
  transition: border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.25s ease;
  outline: none;
}

.filter-control::placeholder {
  color: #94a3b8;
}

.filter-control:hover {
  border-color: #93c5fd;
}

.filter-control:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.16);
  transform: translateY(-1px);
}

.filter-select {
  padding-right: 36px;
  cursor: pointer;
}

.select-wrap::after {
  content: '▾';
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-52%);
  font-size: 12px;
  color: #475569;
  pointer-events: none;
}

@media (max-width: 640px) {
  .search-wrap,
  .select-wrap {
    min-width: 100%;
  }
}

.banner {
  animation: fadeBanner 0.8s ease;
}

@keyframes fadeBanner {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filters {
  animation: fadeFilters 0.6s ease;
}

@keyframes fadeFilters {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

input, select {
  transition: transform 0.2s ease;
}

input:active,
select:active {
  transform: scale(0.98);
}

.dark .banner {
  background: linear-gradient(90deg, #1e3a8a, #1d4ed8);
}

.dark .filter-control {
  background: #1e293b;
  color: #e2e8f0;
  border-color: #334155;
}

.dark .filter-control::placeholder {
  color: #94a3b8;
}

.dark .control-icon {
  color: #94a3b8;
}

.dark .select-wrap::after {
  color: #94a3b8;
}

.dark .filter-control:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

@media (max-width: 400px) {
  .filter-control {
    font-size: 13px;
    height: 42px;
  }
}
</style>