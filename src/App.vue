<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MenuSection from './components/MenuSection.vue'
import CartSidebar from './components/CartSidebar.vue'
import CartFab from './components/CartFab.vue'
import CartDrawer from './components/CartDrawer.vue'
import ToastContainer from './components/ToastContainer.vue'
</script>

<template>
  <AppHeader />
  <HeroSection />

  <div class="page">
    <div class="page-ambient"></div>
    <MenuSection />
    <CartSidebar />
  </div>

  <CartFab />
  <CartDrawer />
  <ToastContainer />
</template>

<style>
/* Page layout (unscoped, shared) */
.page{display:flex;justify-content:center;padding:36px 24px 80px;gap:36px;max-width:var(--max-width);margin:0 auto;position:relative}
.page-ambient{position:fixed;top:50%;left:50%;width:800px;height:600px;transform:translate(-50%,-50%);background:radial-gradient(ellipse, rgba(212,161,75,0.04) 0%, transparent 70%);pointer-events:none;z-index:-1}
@media(max-width:768px){
  .page{flex-direction:column;padding:20px 16px 100px}
}
</style>
