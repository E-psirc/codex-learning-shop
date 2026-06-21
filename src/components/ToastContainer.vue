<script setup>
import { useToast } from '../composables/useToast.js'

const { toasts } = useToast()
</script>

<template>
  <div class="toast-container">
    <div
      v-for="t in toasts"
      :key="t.id"
      class="toast"
    >{{ t.msg }}</div>
  </div>
</template>

<style scoped>
.toast-container{
  position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
  z-index:200;
  display:flex;flex-direction:column-reverse;align-items:center;gap:8px;
  pointer-events:none;
}
.toast{
  padding:12px 28px;
  background:rgba(44,36,18,0.92);
  backdrop-filter:blur(8px);
  color:#fff;
  border-radius:100px;
  font-size:0.85rem;font-weight:500;
  box-shadow:var(--shadow-xl);
  pointer-events:auto;
  animation:toastIn 0.35s cubic-bezier(0.16,1,0.3,1), toastOut 0.35s ease 1.8s forwards;
  border:1px solid rgba(255,255,255,0.08);
}
</style>
