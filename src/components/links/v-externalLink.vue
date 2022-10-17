<script setup>
import External from "../icons/external.vue";
const props = defineProps(["href"]);
</script>
<template>
  <a :href="props.href" target="_blank"><External /></a>
</template>
<style scoped></style>
