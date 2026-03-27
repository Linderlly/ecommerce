<template>
  <div v-if="product" class="detail-page">
    <article class="detail-layout">
      <div class="media-panel">
        <img :src="product.image" :alt="product.name" class="product-image" />
      </div>

      <div class="info-panel">
        <span class="category-chip">{{ product.category }}</span>
        <h1>{{ product.name }}</h1>
        <p class="description">{{ specs.summary }}</p>

        <p class="headline">{{ specs.headline }}</p>

        <div class="price-row">
          <span class="price-label">Preco</span>
          <strong class="price-value">R$ {{ product.price.toLocaleString('pt-BR') }}</strong>
        </div>

        <button class="buy-btn" @click="addToCart(product)">Adicionar ao carrinho</button>
      </div>
    </article>

    <section class="details-block">
      <div class="detail-card">
        <h2>Resumo do produto</h2>
        <p>{{ product.description }}</p>
      </div>

      <div class="detail-card">
        <h2>Detalhes técnicos</h2>
        <ul>
          <li v-for="item in specs.technicalDetails" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="detail-card">
        <h2>Destaques</h2>
        <ul>
          <li v-for="item in specs.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="detail-card">
        <h2>Conteúdo da caixa</h2>
        <ul>
          <li v-for="item in specs.inTheBox" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <h2>Produto nao encontrado</h2>
    <p>Esse item pode ter sido removido ou nao existe mais.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { addToCart } from '../store/store'
import { productSpecsById } from '../data/productSpecs'

const route = useRoute()
const product = products.find(p => p.id === Number(route.params.id))

const specs = computed(() => {
  if (product && productSpecsById[product.id]) {
    return productSpecsById[product.id]
  }

  return {
    headline: 'Informacoes essenciais do produto',
    summary: product?.description ?? '',
    technicalDetails: ['Detalhes tecnicos nao informados.'],
    highlights: ['Sem destaques cadastrados no momento.'],
    inTheBox: ['Conteudo da caixa nao informado.']
  }
})
</script>

<style scoped>
.detail-page {
  padding: 20px;
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(280px, 540px) 1fr;
  gap: 24px;
  align-items: start;
}

.media-panel {
  background: #ffffff;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
}

.product-image {
  width: 100%;
  height: 420px;
  object-fit: contain;
  display: block;
}

.info-panel {
  background: #ffffff;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
}

.category-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1d4ed8;
  background: #dbeafe;
  border: 1px solid #bfdbfe;
  margin-bottom: 12px;
}

h1 {
  margin: 0 0 14px;
  font-size: clamp(1.5rem, 2.2vw, 2.1rem);
  line-height: 1.2;
  color: #0f172a;
}

.description {
  margin: 0;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

.headline {
  margin: 14px 0 0;
  color: #0f172a;
  font-weight: 600;
}

.price-row {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.price-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
}

.price-value {
  font-size: clamp(1.8rem, 2.1vw, 2.3rem);
  color: #1d4ed8;
}

.buy-btn {
  margin-top: 16px;
  width: fit-content;
  min-width: 220px;
  height: 44px;
  border-radius: 12px;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
}

.buy-btn:hover {
  background: linear-gradient(135deg, #1e4fbe, #2f70ea);
}

.details-block {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 16px;
}

.detail-card {
  background: #ffffff;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  padding: 18px;
}

.detail-card h2 {
  margin: 0 0 10px;
  font-size: 1.05rem;
  color: #0f172a;
}

.detail-card p {
  margin: 0;
  color: #334155;
  line-height: 1.55;
}

.detail-card ul {
  margin: 0;
  padding-left: 18px;
  color: #334155;
  line-height: 1.55;
}

.not-found {
  padding: 28px 20px;
  color: #334155;
}

.not-found h2 {
  margin: 0 0 8px;
}

.not-found p {
  margin: 0;
}

@media (max-width: 980px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 340px;
  }

  .details-block {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .detail-page {
    padding: 14px;
  }

  .product-image {
    height: 290px;
  }

  .buy-btn {
    width: 100%;
    min-width: 0;
  }
}
</style>
