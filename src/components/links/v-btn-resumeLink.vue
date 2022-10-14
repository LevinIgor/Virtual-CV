<script setup>
import VBtn from "@/components/UI/v-btn.vue";

const props = defineProps(["animation", "fontSize"]);
</script>
<template>
  <VBtn :animation="props.animation" :fontSize="props.fontSize">
    <a
      href="https://drive.google.com/file/d/1tXaUzx0NZ1roew3hPHaYk0JcOU48VWtG/view?usp=sharing"
      class="btn__resume-link"
      target="_blank"
      >Resume</a
    >
  </VBtn>
</template>
<style scoped></style>
