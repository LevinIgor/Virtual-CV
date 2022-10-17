<template>
  <article class="about" v-intersection id="About">
    <div class="about__title">
      {{ about.title }}
    </div>

    <section class="text">
      <p class="fade" v-for="paragraph in about.paragraphs">
        {{ paragraph }}
      </p>

      <div class="technologies">
        <ul class="tech__list">
          <li v-for="tech in about.technologies">
            {{ tech }}
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>
<script setup>
import about from "@/JSON/about.json";
</script>

<style scoped>
.about {
  max-width: 900px;
  opacity: 0;
  margin-bottom: 150px;
  transition: all 2s ease-in-out;
}
.active {
  opacity: 1;
}
p {
  color: var(--slate);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
}
.about__title {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: "Inter", sans-serif;
}
.about__title::before {
  content: "01.";
  position: relative;
  bottom: -4px;
  margin-right: 10px;
  color: var(--green);
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
}
.about__title::after {
  content: "";
  width: 200px;
  height: 1px;
  bottom: -4px;
  background-color: var(--lightest-navy);
  margin-left: 20px;
}

.tech__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}
.tech__list li {
  position: relative;
  color: var(--slate);
  font-family: "Roboto", monospace;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
}
.tech__list li::before {
  content: "▹";
  color: var(--green);
  font-size: 12px;
  line-height: 12px;
  margin-right: 5px;
}
@media (max-width: 800px) {
  .text {
    display: block;
  }
  .section__img {
    margin: 0 auto;
    margin-top: 40px;
    display: none;
  }
}
</style>
