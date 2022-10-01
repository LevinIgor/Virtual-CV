<template>
  <aside class="right">
    <a
      class="email"
      href="mailto:lytghzys@gmail.com"
      :style="isLoaded ? style : null"
      >lytghzys@gmail.com</a
    >
    <div class="line" :style="isLoaded ? style : null" />
  </aside>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const isLoaded = ref(false);
const style = computed(() => ({
  opacity: 1,
  transform: "translateX(0)",
}));

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 2500);
});
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
  opacity: 0;
  transform: translateX(200px);
  transition: all 0.5s ease-in-out;
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
  opacity: 0;
  transform: translateX(200px);
  transition: all 0.5s ease-in-out;
}


</style>
