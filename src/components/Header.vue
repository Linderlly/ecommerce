<template>
  <header class="header">
    <button class="brand-btn" @click="goHome" aria-label="Ir para pagina inicial">
      <span class="brand-crop" aria-hidden="true">
        <img src="../assets/newlogo.png" alt="" class="brand-logo" />
      </span>
      <span class="brand-title">Loja Tech</span>
    </button>

    <nav class="menu" aria-label="Navegacao principal">
      <button
        class="menu-btn theme-btn"
        @click="toggleTheme"
        :aria-label="darkMode ? 'Ativar modo claro' : 'Ativar modo noturno'"
      >
        <span class="icon" aria-hidden="true">{{ darkMode ? '☀️' : '🌙' }}</span>
        <span class="label">Tema</span>
      </button>

      <button class="menu-btn link-btn" @click="goProducts">
        <span class="label">Produtos</span>
      </button>

      <button class="menu-btn cart-btn" @click="goCart" aria-label="Ver carrinho">
        <span class="icon" aria-hidden="true">🛒</span>
        <span class="label">Carrinho</span>
        <span class="count">{{ cart.length }}</span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { darkMode, cart } from '../store/store'

const router = useRouter()

function goHome() {
  router.push('/')
}

function goProducts() {
  router.push('/products')
}

function goCart() {
  router.push('/cart')
}

function toggleTheme() {
  darkMode.value = !darkMode.value
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #2156c8 0%, #2b63db 42%, #3a75ee 100%);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 24px rgba(20, 34, 73, 0.26);
}

.brand-btn {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.brand-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.62);
  outline-offset: 4px;
  border-radius: 8px;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(2.2);
  transform-origin: center;
}

.brand-crop {
  width: 220px;
  height: 58px;
  overflow: hidden;
  display: block;
}

.brand-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 1px;
  white-space: nowrap;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

.menu {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-btn {
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  padding: 0 14px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(5px);
}

.menu-btn:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.45);
}

.menu-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.36);
}

.theme-btn {
  min-width: 108px;
}

.link-btn {
  min-width: 116px;
}

.cart-btn {
  min-width: 138px;
}

.icon {
  line-height: 1;
}

.label {
  font-size: 0.95rem;
}

.count {
  min-width: 24px;
  height: 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  background: #facc15;
  color: #111827;
  box-shadow: 0 4px 10px rgba(250, 204, 21, 0.32);
}

@media (max-width: 760px) {
  .header {
    gap: 12px;
    flex-wrap: wrap;
  }

  .brand-logo {
    transform: scale(2.9) translateY(-4%);
  }

  .brand-crop {
    width: 184px;
    height: 52px;
  }

  .menu {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .cart-btn {
    grid-column: 1 / -1;
  }

  .theme-btn,
  .link-btn,
  .cart-btn {
    width: 100%;
    min-width: 0;
  }
}

.menu-btn:active {
  transform: scale(0.9);
}

/* Transição mais suave */
.menu-btn {
  transition: all 0.25s ease;
}

@media (max-width: 500px) {
  .menu {
    grid-template-columns: 1fr;
  }

  .menu-btn {
    height: 38px;
    font-size: 13px;
  }
}
</style>