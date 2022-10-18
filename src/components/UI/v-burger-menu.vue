<template>
  <div class="burger__menu" @click="emits('onClick')">
    <div class="burger" :class="{ rotate: props.isHide }">
      <div class="burger__line" :class="{ first__line: props.isHide }"></div>
      <div class="burger__line" :class="{ second__line: props.isHide }"></div>
      <div class="burger__line" :class="{ third__line: props.isHide }"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["isHide"]);
const emits = defineEmits(["onClick"]);
</script>
<style scoped>
.burger__menu {
  cursor: pointer;
  z-index: 400;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.burger {
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.burger__line {
  border-radius: 10px;
  height: 3px;
  background-color: var(--green);
  margin: 3px;
  transition: all 0.1s ease-in-out;
}
.burger__line:first-child {
  width: 30px;
}
.burger__line:nth-child(2) {
  width: 25px;
}
.burger__line:nth-child(3) {
  width: 20px;
}
.first__line {
  transform: rotate(45deg);
  width: 30px !important;
}
.second__line {
  display: none;
}
.third__line {
  width: 30px !important;
  transform: translateY(-9px) rotate(-45deg);
}
.rotate {
  transform: rotate(180deg);
}
</style>
