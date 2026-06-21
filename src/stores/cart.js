import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { menuItems } from '../data/menu.js'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({})
  const activeCategory = ref('全部')

  const cartItems = computed(() => {
    return Object.entries(cart.value).map(([id, qty]) => {
      const item = menuItems.find(i => i.id === parseInt(id))
      return { ...item, qty }
    })
  })

  const totalItems = computed(() => {
    return Object.values(cart.value).reduce((sum, qty) => sum + qty, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  })

  const filteredItems = computed(() => {
    if (activeCategory.value === '全部') return menuItems
    return menuItems.filter(i => i.cat === activeCategory.value)
  })

  function addToCart(id) {
    cart.value[id] = (cart.value[id] || 0) + 1
  }

  function removeFromCart(id) {
    if (!cart.value[id]) return
    cart.value[id]--
    if (cart.value[id] <= 0) delete cart.value[id]
  }

  function clearCart() {
    cart.value = {}
  }

  function setCategory(cat) {
    activeCategory.value = cat
  }

  return {
    cart, activeCategory,
    cartItems, totalItems, totalPrice, filteredItems,
    addToCart, removeFromCart, clearCart, setCategory
  }
})
