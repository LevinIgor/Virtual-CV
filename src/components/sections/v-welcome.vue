<template>
  <article class="welcome" id="Welcome">
    <span class="hi fade" :style="getAnimation('title')"
      >{{ welcome.upTitle }}
    </span>
    <span class="my__name fade" :style="getAnimation('name')">{{
      welcome.name
    }}</span>
    <span class="build__think fade" :style="getAnimation('build')">{{
      welcome.downTitle
    }}</span>
    <p class="fade" :style="getAnimation('paragraph')">
      {{ welcome.paragraph }}
    </p>
    <VBtnResumeLink
      class="resume__btn fade"
      :text="welcome.button"
      :fontSize="14"
      :style="getAnimation('button')"
    />
  </article>
</template>
<script setup>
import welcome from "@/JSON/welcome.json";
import VBtnResumeLink from "@/components/links/v-btn-resumeLink.vue";
import { welcome as animationOptions } from "@/animations.js";

function getAnimation(key) {
  return { animation: animationOptions[key] };
}
</script>

<style scoped>
.welcome {
  margin-top: 100px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
}
span {
  font-family: "Roboto", sans-serif;
}
.hi {
  color: var(--green);
  font-size: clamp(14px, 5vw, 16px);
  line-height: 1.1;
  letter-spacing: 2px;
}
.my__name {
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
  color: var(--lightest-slate);
  font-weight: 600;
}
.build__think {
  margin-top: 10px;
  color: var(--slate);
  font-size: clamp(40px, 8vw, 80px);
  line-height: 0.9;
  font-weight: 600;
}
p {
  color: var(--slate);
  font-family: "Inter", sans-serif;
  max-width: 540px;
  margin-top: 40px;
}
.resume__btn {
  margin-top: 40px;
  padding: 15px 30px;
}
.fade {
  opacity: 0;
}
</style>
