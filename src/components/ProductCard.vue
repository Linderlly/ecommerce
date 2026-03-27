<template>
  <div class="card">
    <img :src="product.image" />

    <h3>{{ product.name }}</h3>
    <p class="price">
      R$ {{ product.price.toLocaleString('pt-BR') }}
    </p>

    <div class="actions">
      <button class="view" @click="$emit('view', product.id)">
        👁 Ver
      </button>

      <button class="cart" @click="add">
        🛒
      </button>

      <button class="fav" @click="fav">
        {{ isFav ? '❤️' : '🤍' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../data/products'
import { addToCart, toggleFavorite, favorites } from '../store/store'
import { computed } from 'vue'

const props = defineProps<{ product: Product }>()

function add() {
  addToCart(props.product)
}

function fav() {
  toggleFavorite(props.product.id)
}

const isFav = computed(() =>
  favorites.value.includes(props.product.id)
)
</script>

<style scoped>
.card {
  background: white;
  padding: 15px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 12px;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

/* BOTÃO VER */
.view {
  flex: 1;
  background: #2563eb;
  font-size: 14px;
}

.view:hover {
  background: #1d4ed8;
}

/* BOTÃO CARRINHO */
.cart {
  background: #22c55e;
  width: 45px;
}

.cart:hover {
  background: #16a34a;
}

/* BOTÃO FAVORITO */
.fav {
  background: #f1f5f9;
  color: red;
  width: 45px;
}

.fav:hover {
  background: #ffe4e6;
}

/* RESPONSIVO */
@media (max-width: 500px) {
  .actions {
    flex-direction: column;
  }

  .cart, .fav {
    width: 100%;
  }
}
</style>