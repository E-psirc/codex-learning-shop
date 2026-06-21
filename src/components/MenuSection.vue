<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useCartStore } from '../stores/cart.js'
import { categories } from '../data/menu.js'
import MenuItemCard from './MenuItemCard.vue'

const cartStore = useCartStore()
const menuGridRef = ref(null)

const filteredItems = computed(() => {
  if (cartStore.activeCategory === '全部') return cartStore.filteredItems
  return cartStore.filteredItems
})

function setCategory(cat) {
  cartStore.setCategory(cat)
}

let observer = null

function observeItems() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), parseInt(entry.target.dataset.delay) || 0)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' })

  nextTick(() => {
    document.querySelectorAll('.menu-item-stagger').forEach((el, i) => {
      el.dataset.delay = i * 40
      observer.observe(el)
    })
  })
}

watch(() => cartStore.activeCategory, () => {
  nextTick(() => observeItems())
})

onMounted(() => observeItems())
</script>

<template>
  <section class="menu-section">
    <div class="categories">
      <button
        v-for="cat in categories"
        :key="cat"
        class="cat-btn"
        :class="{ active: cartStore.activeCategory === cat }"
        @click="setCategory(cat)"
      >{{ cat }}</button>
    </div>

    <div class="menu-grid" ref="menuGridRef">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="menu-item-stagger"
      >
        <MenuItemCard :item="item" />
      </div>
      <div v-if="filteredItems.length === 0" class="empty-category">暂无菜品</div>
    </div>
  </section>
</template>

<style scoped>
.menu-section{flex:1;min-width:0}
.categories{
  display:flex;gap:8px;margin-bottom:28px;
  overflow-x:auto;padding-bottom:4px;
  -webkit-overflow-scrolling:touch;
}
.categories::-webkit-scrollbar{height:3px}
.cat-btn{
  flex-shrink:0;
  padding:8px 22px;
  border:1px solid var(--color-border);
  border-radius:100px;
  font-size:0.85rem;font-weight:500;
  color:var(--color-text-muted);
  background:var(--color-surface);
  transition:all 0.25s ease;
  white-space:nowrap;
  cursor:pointer;
}
.cat-btn:hover{border-color:var(--color-amber);color:var(--color-text);transform:translateY(-1px);box-shadow:0 0 0 1px rgba(212,161,75,0.08)}
.cat-btn.active{
  background:var(--color-text);color:#fff;border-color:var(--color-text);
  box-shadow:0 2px 12px rgba(44,36,24,0.12);
}
.menu-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));
  gap:20px;
}
.menu-item-stagger{
  opacity:0;transform:translateY(20px);
  transition:opacity 0.5s ease, transform 0.5s ease;
}
.menu-item-stagger.visible{opacity:1;transform:translateY(0)}
.empty-category{grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--color-text-muted)}
@media(max-width:768px){
  .menu-grid{grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:14px}
}
</style>
