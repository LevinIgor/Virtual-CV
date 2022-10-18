<template>
  <aside class="left">
    <Github class="link" :style="{ animation: leftAside.git }" />
    <Linkedin class="link" :style="{ animation: leftAside.linkedin }" />
    <Codewars class="link" :style="{ animation: leftAside.codewars }" />
    <Telegram class="link" :style="{ animation: leftAside.telegram }" />
    <Instagram class="link" :style="{ animation: leftAside.instagram }" />
    <div class="line" :style="{ animation: leftAside.line }" />
  </aside>
</template>
<script setup>
import { leftAside } from "@/animations.js";
import {
  Github,
  Telegram,
  Instagram,
  Codewars,
  Linkedin,
} from "@/components/links/v-links.js";
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
