<script setup>
import { useCartStore } from '../stores/cart.js'
import { useCartUI } from '../composables/useCartUI.js'

const cartStore = useCartStore()
const { drawerOpen, closeDrawer } = useCartUI()

function checkout() {
  if (cartStore.totalItems === 0) return
  const summary = cartStore.cartItems.map(i => `${i.name} x${i.qty}`).join('、')
  alert(`🎉 订单已提交！\n\n${summary}\n\n总计：¥${cartStore.totalPrice}\n\n感谢您的下单，我们将尽快为您准备！`)
  cartStore.clearCart()
  closeDrawer()
}
</script>

<template>
  <Teleport to="body">
    <div class="cart-overlay" :class="{ open: drawerOpen }" @click="closeDrawer"></div>
    <div class="cart-drawer" :class="{ open: drawerOpen }">
      <div class="drawer-handle"></div>
      <div class="cart-header">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          购物车
          <span class="cart-count">{{ cartStore.totalItems }} 件</span>
        </h3>
        <button class="drawer-close" @click="closeDrawer">&times;</button>
      </div>

      <div class="cart-items">
        <div v-if="cartStore.cartItems.length === 0" class="cart-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <p>购物车还是空的</p>
          <p style="font-size:0.82rem;margin-top:4px;">快去选几道喜欢的菜吧</p>
        </div>
        <div
          v-for="item in cartStore.cartItems"
          :key="item.id"
          class="cart-item"
        >
          <span class="cart-item-emoji">{{ item.emoji }}</span>
          <div class="cart-item-info">
            <div class="cart-item-name">{{ item.name }}</div>
            <div class="cart-item-price">¥{{ item.price }}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" @click="cartStore.removeFromCart(item.id)">&minus;</button>
            <span class="qty-num">{{ item.qty }}</span>
            <button class="qty-btn" @click="cartStore.addToCart(item.id)">+</button>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="cart-total-row">
          <span class="cart-total-label">合计</span>
          <span class="cart-total-value">¥{{ cartStore.totalPrice }}</span>
        </div>
        <button class="checkout-btn" :disabled="cartStore.totalItems === 0" @click="checkout">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          去结算
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.cart-overlay{
  display:none;
  position:fixed;inset:0;z-index:150;
  background:rgba(44,36,24,0.45);
  backdrop-filter:blur(4px);
}
.cart-overlay.open{display:block;animation:fadeIn 0.25s ease}
.cart-drawer{
  display:none;
  position:fixed;bottom:0;left:0;right:0;z-index:160;
  background:rgba(255,251,246,0.96);
  backdrop-filter:blur(20px) saturate(1.4);
  -webkit-backdrop-filter:blur(20px) saturate(1.4);
  border-radius:20px 20px 0 0;
  max-height:75vh;
  box-shadow:0 -8px 40px rgba(44,36,24,0.15);
  overflow-y:auto;
  animation:drawerUp 0.35s cubic-bezier(0.16,1,0.3,1);
}
.cart-drawer.open{display:block}
.drawer-handle{width:36px;height:4px;border-radius:2px;background:var(--color-border);margin:10px auto 4px}
.cart-header{
  padding:6px 22px 14px;
  border-bottom:1px solid var(--color-border-light);
  display:flex;align-items:center;justify-content:space-between;
}
.cart-header h3{font-size:1rem;display:flex;align-items:center;gap:8px;color:var(--color-text)}
.cart-count{font-size:0.8rem;color:var(--color-text-dim);font-weight:500;margin-left:4px}
.drawer-close{font-size:1.4rem;color:var(--color-text-dim);padding:4px;line-height:1;transition:color 0.2s ease;cursor:pointer}
.drawer-close:hover{color:var(--color-text)}
.cart-items{max-height:50vh;overflow-y:auto;padding:8px 0}
.cart-items::-webkit-scrollbar{width:4px}
.cart-empty{
  padding:44px 24px;text-align:center;
  color:var(--color-text-dim);font-size:0.9rem;
}
.cart-empty svg{margin-bottom:10px;opacity:0.3}
.cart-empty p{line-height:1.6}
.cart-item{
  display:flex;align-items:center;gap:12px;
  padding:10px 22px;
  animation:cartItemIn 0.3s cubic-bezier(0.16,1,0.3,1);
}
.cart-item-emoji{font-size:1.3rem;width:30px;text-align:center;flex-shrink:0}
.cart-item-info{flex:1;min-width:0}
.cart-item-name{font-size:0.86rem;font-weight:500;color:var(--color-text)}
.cart-item-price{font-size:0.78rem;color:var(--color-accent);font-weight:500}
.cart-item-qty{display:flex;align-items:center;gap:6px;flex-shrink:0}
.qty-btn{
  width:26px;height:26px;border-radius:50%;
  background:var(--color-bg);
  border:1px solid var(--color-border);
  display:flex;align-items:center;justify-content:center;
  font-size:0.85rem;font-weight:500;
  color:var(--color-text-muted);
  transition:all 0.2s ease;
}
.qty-btn:hover{border-color:var(--color-accent);color:var(--color-accent);background:rgba(199,62,58,0.05)}
.qty-btn:active{transform:scale(0.9)}
.qty-num{font-size:0.88rem;font-weight:600;min-width:22px;text-align:center}
.cart-footer{
  padding:16px 22px 20px;
  border-top:1px solid var(--color-border-light);
}
.cart-total-row{
  display:flex;justify-content:space-between;align-items:baseline;
  margin-bottom:14px;
}
.cart-total-label{font-size:0.85rem;font-weight:500;color:var(--color-text-muted)}
.cart-total-value{
  font-family:'Noto Serif SC',serif;
  font-size:1.35rem;font-weight:700;
  color:var(--color-accent);
}
.checkout-btn{
  width:100%;padding:13px;
  background:var(--color-accent);color:#fff;
  border-radius:var(--radius);
  font-size:0.95rem;font-weight:600;
  transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
  display:flex;align-items:center;justify-content:center;gap:8px;
  box-shadow:0 2px 12px rgba(199,62,58,0.2);
}
.checkout-btn:hover:not(:disabled){
  background:var(--color-accent-dark);
  transform:translateY(-1px);
  box-shadow:0 4px 20px rgba(199,62,58,0.3);
}
.checkout-btn:active:not(:disabled){transform:translateY(0)}
.checkout-btn:disabled{opacity:0.35;cursor:not-allowed;box-shadow:none}
</style>
