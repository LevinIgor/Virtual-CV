<template>
  <article class="contact" id="Contact" v-intersection>
    <div class="title">{{ contact.title }}</div>
    <div class="heading">{{ contact.subTitle }}</div>
    <p class="text">
      {{ contact.paragraph }}
    </p>

    <VBtn class="btn" :fontSize="14"
      ><a href="mailto:lytghzys@gmail.com">{{ contact.button }}</a></VBtn
    >
  </article>
</template>
<script setup>
import { ref, computed } from "vue";
import contact from "@/JSON/contact.json";
import VBtn from "@/components/UI/v-btn.vue";

const style = computed(() => ({
  opacity: 1,
  transform: "scale(1)",
}));
</script>

<style scoped>
.contact {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  transition: all 1s;
}
.active {
  opacity: 1;
  transform: scale(1);
}
.title {
  color: var(--green);
  font-family: "Roboto", monospace;
  font-size: 14px;
  font-weight: 600;
}
.title::before {
  content: "04. ";
}
.heading {
  margin-top: 20px;
  font-size: clamp(40px, 5vw, 60px);
  color: var(--lightest-slate);
  line-height: 1.1;
  font-weight: 600;
}
.text {
  margin-top: 30px;
  max-width: 600px;
  text-align: center;
}
.btn {
  margin-top: 20px;
  padding: 20px 30px;
}
</style>
