<script setup>
import { getItemColor, getUnit } from '../data/menu.js'
import { useCartStore } from '../stores/cart.js'
import { useToast } from '../composables/useToast.js'

const props = defineProps({
  item: { type: Object, required: true }
})

const cartStore = useCartStore()
const { show } = useToast()

function handleAdd() {
  cartStore.addToCart(props.item.id)
  show(`+1 ${props.item.name}`)
}
</script>

<template>
  <div class="menu-item">
    <div class="menu-item-img" :style="{ background: getItemColor(item.id) }">
      <span class="emoji-bg">{{ item.emoji }}</span>
    </div>
    <div class="menu-item-body">
      <div class="menu-item-name">{{ item.name }}</div>
      <div class="menu-item-desc">{{ item.desc }}</div>
      <div class="menu-item-footer">
        <span class="menu-item-price">
          ¥{{ item.price }}
          <small>/{{ getUnit(item.cat) }}</small>
        </span>
        <button class="add-btn" @click="handleAdd" :aria-label="`添加 ${item.name}`">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-item{
  background:var(--color-surface);
  border-radius:var(--radius-lg);
  overflow:hidden;
  box-shadow:var(--shadow-xs), 0 1px 2px rgba(120,80,40,0.03);
  transition:all 0.35s cubic-bezier(0.16,1,0.3,1);
  display:flex;flex-direction:column;
  border:1px solid var(--color-border-light);
}
.menu-item:hover{
  box-shadow:var(--shadow-md);
  transform:translateY(-5px) scale(1.005);
  border-color:rgba(212,161,75,0.3);
}
.menu-item-img{
  height:160px;
  background:var(--color-warm);
  display:flex;align-items:center;justify-content:center;
  font-size:2.8rem;
  position:relative;
  overflow:hidden;
  transition:height 0.35s ease;
}
.menu-item:hover .menu-item-img{height:170px}
.emoji-bg{
  filter:drop-shadow(0 2px 8px rgba(0,0,0,0.1));
  transition:transform 0.35s cubic-bezier(0.16,1,0.3,1);
}
.menu-item:hover .emoji-bg{transform:scale(1.15) rotate(-5deg)}
.menu-item-img::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom, transparent 60%, rgba(44,36,24,0.06));
  opacity:0;transition:opacity 0.35s ease;
}
.menu-item:hover .menu-item-img::after{opacity:1}
.menu-item-body{
  padding:16px 18px 18px;
  flex:1;display:flex;flex-direction:column;
}
.menu-item-name{
  font-family:'Noto Serif SC',serif;
  font-size:1.05rem;font-weight:600;
  margin-bottom:5px;letter-spacing:0.02em;
}
.menu-item-desc{
  font-size:0.8rem;color:var(--color-text-muted);
  line-height:1.55;flex:1;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
.menu-item-footer{
  display:flex;align-items:center;justify-content:space-between;
  margin-top:14px;padding-top:14px;
  border-top:1px solid var(--color-border-light);
}
.menu-item-price{
  font-family:'Noto Serif SC',serif;
  font-size:1.1rem;font-weight:700;
  color:var(--color-accent);
  letter-spacing:0.01em;
}
.menu-item-price small{font-size:0.68rem;font-weight:400;color:var(--color-text-dim)}
.add-btn{
  width:36px;height:36px;border-radius:50%;
  background:var(--color-accent);color:#fff;
  display:flex;align-items:center;justify-content:center;
  font-size:1.2rem;font-weight:500;
  transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
  box-shadow:0 2px 8px rgba(199,62,58,0.15);
}
.add-btn:hover{background:var(--color-accent-dark);transform:scale(1.12);box-shadow:0 4px 16px rgba(199,62,58,0.25)}
.add-btn:active{transform:scale(0.92)}
</style>
