import { ref } from 'vue'

const drawerOpen = ref(false)
const drawerContent = ref([]) // track which drawer is open

export function useCartUI() {
  function openDrawer() {
    drawerOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  function closeDrawer() {
    drawerOpen.value = false
    document.body.style.overflow = ''
  }

  function toggleDrawer() {
    if (drawerOpen.value) closeDrawer()
    else openDrawer()
  }

  return { drawerOpen, openDrawer, closeDrawer, toggleDrawer }
}
