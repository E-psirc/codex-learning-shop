<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cart.js'
import { useCartUI } from '../composables/useCartUI.js'

const cartStore = useCartStore()
const { openDrawer } = useCartUI()
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="header-inner">
      <a href="/" class="logo">
        <span class="logo-dot"></span>
        飨<span>食堂</span>
      </a>
      <button class="cart-toggle" @click="openDrawer" aria-label="打开购物车">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        购物车
        <span class="cart-badge" :class="{ show: cartStore.totalItems > 0 }">{{ cartStore.totalItems }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header{
  position:fixed;top:0;left:0;right:0;z-index:100;
  height:var(--header-h);
  background:rgba(245,242,236,0.88);
  backdrop-filter:blur(16px) saturate(1.2);
  -webkit-backdrop-filter:blur(16px) saturate(1.2);
  border-bottom:1px solid var(--color-border-light);
  display:flex;align-items:center;justify-content:center;
  transition:box-shadow 0.3s ease;
}
.header.scrolled{box-shadow:var(--shadow-sm)}
.header-inner{
  width:100%;max-width:var(--max-width);
  padding:0 24px;
  display:flex;align-items:center;justify-content:space-between;
}
.logo{
  font-family:'Noto Serif SC',serif;
  font-size:1.45rem;font-weight:700;
  color:var(--color-accent);
  letter-spacing:0.06em;
  display:flex;align-items:center;gap:2px;
}
.logo-dot{
  display:inline-block;
  width:20px;height:20px;margin-right:6px;
  background:var(--color-accent);
  border-radius:50% 50% 50% 2px;
  opacity:0.85;
  box-shadow:0 0 14px rgba(199,62,58,0.2);
}
.logo span{color:var(--color-text);font-weight:400}
.cart-toggle{
  position:relative;
  display:flex;align-items:center;gap:8px;
  padding:8px 18px;
  background:var(--color-surface);
  border:1px solid var(--color-border);
  border-radius:100px;
  font-size:0.85rem;font-weight:500;
  color:var(--color-text-muted);
  transition:all 0.25s ease;
}
.cart-toggle:hover{
  border-color:var(--color-accent);
  color:var(--color-accent);
  box-shadow:var(--shadow-glow);
  transform:translateY(-1px);
}
.cart-toggle svg{transition:transform 0.25s ease}
.cart-toggle:hover svg{transform:scale(1.1)}
.cart-badge{
  position:absolute;top:-4px;right:-4px;
  background:var(--color-accent);color:#fff;
  font-size:0.65rem;font-weight:600;
  min-width:18px;height:18px;border-radius:9px;
  display:flex;align-items:center;justify-content:center;
  padding:0 4px;
  opacity:0;transform:scale(0.5);
  transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow:0 2px 8px rgba(199,62,58,0.3);
}
.cart-badge.show{opacity:1;transform:scale(1)}
</style>
