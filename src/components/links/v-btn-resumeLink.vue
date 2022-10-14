<script setup>
import VBtn from "@/components/UI/v-btn.vue";
import { ref } from "vue";

const props = defineProps(["animation", "fontSize", "text"]);
const text = ref(props.text || "Resume");
</script>
<template>
  <VBtn :animation="props.animation" :fontSize="props.fontSize">
    <a
      href="https://drive.google.com/file/d/1tXaUzx0NZ1roew3hPHaYk0JcOU48VWtG/view?usp=sharing"
      class="btn__resume-link"
      target="_blank"
      >{{ text }}</a
    >
  </VBtn>
</template>
<style scoped></style>
