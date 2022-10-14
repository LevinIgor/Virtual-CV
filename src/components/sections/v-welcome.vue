<template>
  <section class="welcome" id="Welcome">
    <span class="hi fade">{{ welcome.upTitle }} </span>
    <span class="my__name fade">{{ welcome.name }}</span>
    <span class="build__think fade">{{ welcome.downTitle }}</span>
    <p class="fade">
      {{ welcome.paragraph }}
    </p>
    <VBtnResumeLink class="resume__btn fade" :text="welcome.button" :fontSize="14" />
  </section>
</template>
<script setup>
import welcome from "@/JSON/welcome.json";
import VBtnResumeLink from "@/components/links/v-btn-resumeLink.vue";
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(30px);
  animation-name: fade;
  animation-fill-mode: forwards;
}
.fade:nth-child(1) {
  animation-delay: 0.5s;
  animation-duration: 0.5s;
}
.fade:nth-child(2) {
  animation-delay: 0.6s;
  animation-duration: 0.5s;
}
.fade:nth-child(3) {
  animation-delay: 0.7s;
  animation-duration: 0.5s;
}
.fade:nth-child(4) {
  animation-delay: 0.8s;
  animation-duration: 0.5s;
}
.fade:nth-child(5) {
  animation-delay: 0.9s;
  animation-duration: 1.3s;
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
  margin-top: 40px;
  padding: 15px 30px;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
