<template>
  <div class="cart-item">
    <img :src="item.image" />

    <div>
      <h3>{{ item.name }}</h3>
      <p>R$ {{ item.price }}</p>

      <div class="controls">
        <button @click="$emit('decrease', item.id)">-</button>
        <span>{{ item.quantity }}</span>
        <button @click="$emit('increase', item.id)">+</button>
      </div>

      <button class="remove" @click="$emit('remove', item.id)">
        Remover
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    id: number
    name: string
    price: number
    image: string
    quantity: number
  }
}>()
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 15px;
  background: white;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

img {
  width: 80px;
  border-radius: 8px;
}

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.remove {
  background: #ef4444;
  color: white;
}
</style>