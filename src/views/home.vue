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

<style scoped></style>
