<template>
  <aside class="left">
    <VGitLink class="link" :style="getAnimationOptions(0)" />

    <VLinkedinLink class="link" :style="getAnimationOptions(1)" />

    <VCodewarsLink class="link" :style="getAnimationOptions(2)" />

    <VTelegramLink class="link" :style="getAnimationOptions(3)" />

    <VInstagramLink class="link" :style="getAnimationOptions(4)" />

    <div class="line" :style="getAnimationOptions(5)" />
  </aside>
</template>
<script setup>
import VGitLink from "@/components/links/v-gitLink.vue";
import VLinkedinLink from "@/components/links/v-linkedinLink.vue";
import VTelegramLink from "@/components/links/v-telegramLink.vue";
import VInstagramLink from "@/components/links/v-instagramLink.vue";
import VCodewarsLink from "@/components/links/v-codewarsLink.vue";
import { leftAsideAnimation } from "@/animations.js";

function getAnimationOptions(index) {
  return {
    animationDuration: `${leftAsideAnimation[index].duration}s`,
    animationDelay: `${leftAsideAnimation[index].delay}s`,
  };
}
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
.link {
  margin-bottom: 1rem;
  transition: color 0.3s;
}
.link:hover {
  color: var(--green);
  filter: drop-shadow(0 0 0.75rem var(--green));
}
.line {
  margin-top: 30px;
  width: 1px;
  height: 100px;
  background-color: var(--light-slate);
}

.line,
.link {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100px) scale(4);
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>
