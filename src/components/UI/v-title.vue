<script setup>
const props = defineProps(["title", "number"]);
const number = JSON.stringify("0" + props.number + ".");
</script>
<template>
  <h2 class="title">{{ title }}</h2>
</template>
<style scoped>
.title {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: "Inter", sans-serif;
}
.title::before {
  content: v-bind(number);
  position: relative;
  bottom: -4px;
  margin-right: 10px;
  color: var(--green);
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
}

.title::after {
  content: "";
  width: 200px;
  height: 1px;
  bottom: -4px;
  background-color: var(--lightest-navy);
  margin-left: 20px;
}
</style>
