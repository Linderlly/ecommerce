<template>
  <Header />
  <router-view />
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<style>
body {
  font-family: Arial;
  margin: 0;
}

.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
}

.banner {
  background: orange;
  padding: 20px;
  margin-bottom: 20px;
}
</style>