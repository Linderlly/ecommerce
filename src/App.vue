<template>
  <div :class="{ dark: darkMode }">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import { darkMode } from './store/store'
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f1f5f9;
}

.dark {
  background-color: #0f172a;
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #1d4ed8;
}

.banner {
  margin: 20px;
  padding: 50px;
  text-align: center;
  font-size: 24px;
  border-radius: 12px;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  color: white;
}

input, select {
  margin: 10px 20px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

@media (max-width: 600px) {
  .banner {
    font-size: 18px;
    padding: 30px;
  }
}
</style>