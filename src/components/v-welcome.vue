<template>
  <div class="welcome">
    <span
      class="hi fade"
      v-intersection="test"
      :style="isIntersection ? fade : null"
      >Hi, my name is
    </span>
    <span class="my__name fade" :style="isIntersection ? fade : null"
      >Levin Ihor.</span
    >
    <span class="build__think fade" :style="isIntersection ? fade : null"
      >I build things for the web.</span
    >
    <p class="fade" :style="isIntersection ? fade : null">
      I’m a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products.
    </p>
    <a href="" class="resume__btn fade" :style="isIntersection ? fade : null"
      >Check out my Resume!</a
    >
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const isIntersection = ref(false);
const fade = computed(() => ({
  opacity: 1,
  transform: "translateY(0px)",
}));

function test() {
  console.log("Intersection Welcome");
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
  transition: background-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.resume__btn:hover {
  background-color: var(--green-tint);
  outline: none;
}
</style>
