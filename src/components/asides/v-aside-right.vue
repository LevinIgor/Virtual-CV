<template>
  <aside class="right">
    <a
      class="email"
      href="mailto:lytghzys@gmail.com"
      :style="getAnimationStyle(0)"
      >lytghzys@gmail.com</a
    >
    <div class="line" :style="getAnimationStyle(1)" />
  </aside>
</template>
<script setup>
import { rightAsideAnimation } from "@/animations.js";
function getAnimationStyle(index) {
  return {
    animationDuration: `${rightAsideAnimation[index].duration}s`,
    animationDelay: `${rightAsideAnimation[index].delay}s`,
  };
}
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
  animation-name: fadeIn;
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
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
