<template>
  <section class="welcome" id="Welcome">
    <span
      class="hi fade"
      v-intersection="onIntersection"
      :style="isIntersection ? fade : null"
      >{{ welcome.upTitle }}
    </span>
    <span class="my__name fade" :style="isIntersection ? fade : null">{{
      welcome.name
    }}</span>
    <span class="build__think fade" :style="isIntersection ? fade : null">{{
      welcome.downTitle
    }}</span>
    <p class="fade" :style="isIntersection ? fade : null">
      {{ welcome.paragraph }}
    </p>
    <a
      href="https://drive.google.com/file/d/1tXaUzx0NZ1roew3hPHaYk0JcOU48VWtG/view?usp=sharing"
      class="resume__btn fade"
      target="_blank"
      :style="isIntersection ? fade : null"
      >{{ welcome.button }}</a
    >
  </section>
</template>
<script setup>
import { computed, ref } from "vue";
import welcome from "@/JSON/welcome.json";
const isIntersection = ref(false);
const fade = computed(() => ({
  opacity: 1,
  transform: "translateY(0px)",
}));

function onIntersection() {
  isIntersection.value = true;
}
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(30px);
}
.fade:nth-child(1) {
  transition: all 0.4s ease-in-out;
}
.fade:nth-child(2) {
  transition: all 0.6s ease-in-out;
}
.fade:nth-child(3) {
  transition: all 0.8s ease-in-out;
}
.fade:nth-child(4) {
  transition: all 1s ease-in-out;
}
.fade:nth-child(5) {
  transition: all 1.1s ease-in-out;
}
.welcome {
  margin-top: 100px;
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
  margin-top: 50px;
  box-sizing: content-box;
  border: 1px solid var(--green);
  color: var(--green);
  width: max-content;
  text-align: center;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.25s;
}
.resume__btn:hover {
  background-color: var(--green-tint);
  outline: none;
}
</style>
