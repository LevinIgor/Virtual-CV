<script setup>
import { computed } from "vue";
const props = defineProps(["animation"]);
const animationStyle = computed(() => {
  return {
    animationDuration: `${props.animation.duration}s`,
    animationDelay: `${props.animation.delay}s`,
  };
});
</script>

<template>
  <svg
    id="etWoU4bjmEr1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    :style="[animationStyle]"
  >
    <polygon
      points="0,-52.538198 45.499414,-26.269099 45.499414,26.269099 0,52.538198 -45.499414,26.269099 -45.499414,-26.269099 0,-52.538198"
      transform="matrix(.986821 0 0 0.928884 50 50)"
      fill="#d2dbed"
      fill-opacity="0"
      stroke="#64ffda"
      stroke-width="7"
    />
    <text
      dx="0"
      dy="0"
      font-size="70"
      font-weight="400"
      transform="translate(31.165978 74.467842)"
      fill="#64ffda"
      stroke-width="0"
    >
      <tspan y="0" font-weight="400" stroke-width="0"><![CDATA[ L ]]></tspan>
    </text>
  </svg>
</template>
<style scoped>
svg {
  opacity: 0;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}
text {
  font-family: "Roboto Mono", monospace;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
