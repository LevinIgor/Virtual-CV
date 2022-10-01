<template>
  <aside class="left">
    <a
      href="https://github.com/LevinIgor"
      class="icon"
      target="_blank"
      :style="isLoaded ? style : null"
    >
      <githubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/levin-igor/"
      class="icon"
      target="_blank"
      :style="isLoaded ? style : null"
    >
      <linkedinIcon />
    </a>
    <a
      href="https://t.me/Levin_Ihor"
      class="icon"
      target="_blank"
      :style="isLoaded ? style : null"
    >
      <telegramIcon />
    </a>
    <a
      href="https://www.instagram.com/levin_ihor/"
      class="icon"
      target="_blank"
      :style="isLoaded ? style : null"
    >
      <instagramIcon />
    </a>
    <div class="line" :style="isLoaded ? style : null" />
  </aside>
</template>
<script setup>
import githubIcon from "@/components/icons/github.vue";
import linkedinIcon from "@/components/icons/linkedin.vue";
import telegramIcon from "@/components/icons/telegram.vue";
import instagramIcon from "@/components/icons/instagram.vue";

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

svg {
  width: 100%;
  height: 100%;
}
.line {
  margin-top: 30px;
  width: 1px;
  height: 100px;
  background-color: var(--light-slate);
  opacity: 0;
  transition: all 0.5s ease-in-out 0.9s;
}

</style>
