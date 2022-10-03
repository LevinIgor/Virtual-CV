<template>
  <aside class="left">
    <VGitLink :style="isLoaded ? style : null" />

    <VLinkedinLink :style="isLoaded ? style : null" />

    <VCodewarsLink :style="isLoaded ? style : null" />

    <VTelegramLink :style="isLoaded ? style : null" />

    <VInstagramLink :style="isLoaded ? style : null" />

    <div class="line" :style="isLoaded ? style : null" />
  </aside>
</template>
<script setup>
import VGitLink from "@/components/iconsLink/v-gitLink.vue";
import VLinkedinLink from "@/components/iconsLink/v-linkedinLink.vue";
import VTelegramLink from "@/components/iconsLink/v-telegramLink.vue";
import VInstagramLink from "@/components/iconsLink/v-instagramLink.vue";
import VCodewarsLink from "@/components/iconsLink/v-codewarsLink.vue";

import { ref, onMounted, computed } from "vue";

const isLoaded = ref(false);
const style = computed(() => ({
  opacity: 1,
  transform: "translateY(0)",
}));

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 2500);
});
</script>

<style scoped>
aside {
  color: var(--light-slate);
  position: fixed;
  bottom: 0;
  left: 20px;
  right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  box-sizing: content-box;
  padding: 10px;
}
a:hover {
  color: var(--green);
  transform: translateY(-5px);
}
.icon {
  width: 20px;
  height: 20px;
  opacity: 0;
  transform: translateY(100px);
}

.icon:nth-child(1) {
  transition: all 0.3s ease-in-out 0.5s;
}
.icon:nth-child(2) {
  transition: all 0.3s ease-in-out 0.6s;
}
.icon:nth-child(3) {
  transition: all 0.3s ease-in-out 0.7s;
}
.icon:nth-child(4) {
  transition: all 0.3s ease-in-out 0.8s;
}
.icon:nth-child(5) {
  transition: all 0.3s ease-in-out 0.9s;
}

.line {
  margin-top: 30px;
  width: 1px;
  height: 100px;
  background-color: var(--light-slate);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
