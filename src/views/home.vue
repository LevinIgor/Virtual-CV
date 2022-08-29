<template>
  <main>
    <VHeader />
    <VWelcome />
    <VAbout />
    <VExperience />
    <VWork />
    <VContact />
    <VFooter />
    <VAsideLeft />
    <VAsideRight />
  </main>
</template>
<script setup>
import VHeader from "@/components/v-header.vue";
import VWelcome from "@/components/v-welcome.vue";
import VAbout from "@/components/v-about.vue";
import VWork from "@/components/v-work.vue";
import VExperience from "@/components/v-experience.vue";
import VContact from "@/components/v-contact.vue";
import VFooter from "@/components/v-footer.vue";
import VAsideLeft from "@/components/v-aside-left.vue";
import VAsideRight from "@/components/v-aside-right.vue";
</script>

<style scoped>
main {
  box-sizing: border-box;
  width: var(--main-width);

  margin: 0 auto;
  color: aliceblue;
  padding: 0px 100px;
  min-height: 100%;
  overflow: hidden;
}
.scroll {
  overflow: hidden;
}
</style>
