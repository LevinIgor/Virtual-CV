<script setup>
import { computed } from "vue";
const props = defineProps(["number", "text", "animation"]);

const animationStyle = computed(() => ({
  "animation-delay": `${props.animation?.delay}s`,
  "animation-duration": `${props.animation?.duration}s`,
}));
</script>
<template>
  <div class="nav__link" :style="[animationStyle]">
    <span class="link__count">0{{ props.number + 1 }}.</span
    ><span class="link__text">{{ text }}</span>
  </div>
</template>
<style scoped>
.nav__link {
  cursor: pointer;
  padding: 10px;
  margin: 0 5px;
  color: var(--lightest-slate);
  opacity: 0;
  transition: color 0.3s ease;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}
.nav__link:hover {
  color: var(--green);
}
.link__count {
  color: var(--green);
  margin-right: 5px;
}

.nav__link::after {
  content: "";
  display: block;
  width: 0;
  height: 1px;
  background-color: var(--green);
  transition: all 0.1s ease-in-out;
}
.nav__link:hover::after {
  width: 100%;
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
