<template>
  <article
    class="contact"
    id="Contact"
    ref="contactRef"
    v-intersection="intersectionObserver"
  >
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
import { ref } from "vue";
import contact from "@/JSON/contact.json";
import VBtn from "@/components/UI/v-btn.vue";

const contactRef = ref(null);
function intersectionObserver() {
  contactRef.value.style.opacity = 1;
}
</script>

<style scoped>
.contact {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
