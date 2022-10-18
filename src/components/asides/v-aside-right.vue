<template>
  <aside class="right">
    <a
      class="email"
      href="mailto:lytghzys@gmail.com"
      :style="{ animation: rightAside.email }"
      >lytghzys@gmail.com</a
    >
    <div class="line" :style="{ animation: rightAside.line }" />
  </aside>
</template>
<script setup>
import { rightAside } from "@/animations.js";
</script>

<style scoped>
.right {
  position: fixed;
  right: 20px;
  bottom: 0;
  z-index: 10;
  color: var(--light-slate);
  display: flex;
  flex-direction: column;
  letter-spacing: 3px;
}
.email {
  font-size: 12px;
  writing-mode: vertical-rl;
}
.email:hover {
  color: var(--green);
  transform: translateY(-5px);
}
.line {
  width: 1px;
  height: 100px;
  background-color: var(--light-slate);
  margin: 0 auto;
  margin-top: 30px;
  animation-name: fadeDown;
}
.line,
.email {
  opacity: 0;
}
</style>
