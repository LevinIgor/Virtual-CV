<script setup>
import { computed } from "vue";

const props = defineProps(["animation", "fontSize"]);

const animationStyle = computed(() => ({
  animationDuration: `${props.animation?.duration}s`,
  animationDelay: `${props.animation?.delay}s`,
  fontSize: `${props?.fontSize}px`,
}));
</script>
<template>
  <button :style="[animationStyle]"><slot /></button>
</template>
<style scoped>
button {
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 10px 20px;
  max-width: max-content;
  cursor: pointer;
  opacity: 0;
  animation-name: fadeIn;
  transition: background-color 0.2s ease-in-out;
  animation-fill-mode: forwards;
}
button:hover {
  background-color: var(--green-tint);
  filter: drop-shadow(0 0 0.75rem var(--green));
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
