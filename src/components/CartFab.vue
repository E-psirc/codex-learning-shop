<script setup>
import { useCartStore } from '../stores/cart.js'
import { useCartUI } from '../composables/useCartUI.js'

const cartStore = useCartStore()
const { openDrawer } = useCartUI()
</script>

<template>
  <button class="mobile-cart-fab" @click="openDrawer" aria-label="打开购物车">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    <span class="cart-badge" :class="{ show: cartStore.totalItems > 0 }">{{ cartStore.totalItems }}</span>
  </button>
</template>

<style scoped>
.mobile-cart-fab{
  position:fixed;bottom:22px;right:22px;z-index:110;
  width:56px;height:56px;border-radius:50%;
  background:var(--color-accent);color:#fff;
  box-shadow:0 4px 24px rgba(199,62,58,0.35);
  display:none;align-items:center;justify-content:center;
  font-size:1.4rem;
  transition:transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease;
}
.mobile-cart-fab:hover{transform:scale(1.06);box-shadow:0 6px 32px rgba(199,62,58,0.45)}
.mobile-cart-fab:active{transform:scale(0.94)}
.cart-badge{
  position:absolute;top:2px;right:2px;
  background:var(--color-text);color:#fff;
  font-size:0.65rem;font-weight:600;
  min-width:18px;height:18px;border-radius:9px;
  display:flex;align-items:center;justify-content:center;
  padding:0 4px;
  opacity:0;transform:scale(0.5);
  transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow:0 2px 8px rgba(44,36,24,0.25);
}
.cart-badge.show{opacity:1;transform:scale(1)}
@media(max-width:768px){.mobile-cart-fab{display:flex}}
@media(min-width:769px){.mobile-cart-fab{display:none!important}}
</style>
