<template>
  <div class="app-shell" :class="{ dark: darkMode }">
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
  font-family: 'Exo 2', 'Segoe UI', sans-serif;
  background-color: #f1f5f9;
}

#app {
  min-height: 100vh;
}

.app-shell {
  min-height: 100vh;
  background-color: #f1f5f9;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Orbitron', 'Exo 2', sans-serif;
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

input:not(.filter-control),
select:not(.filter-control) {
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

.app-shell {
  animation: fadeApp 0.5s ease;
}

@keyframes fadeApp {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

button {
  transition: transform 0.2s ease, background 0.2s ease;
}

button:active {
  transform: scale(0.95);
}

@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}

.banner {
  animation: bannerFade 0.8s ease;
}

@keyframes bannerFade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>