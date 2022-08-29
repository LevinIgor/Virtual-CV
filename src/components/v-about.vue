<template>
  <section class="about">
    <div class="about__title">About me</div>
    <article class="inner">
      <div class="text">
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div class="technologies">
          <ul class="skills__list">
            <li>JavaScript (ES6+)</li>
            <li>Typescript</li>
            <li>VueJs 3</li>
            <li>Firebase</li>
            <li>Vercel</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <section class="section__img">
        <img src="../assets/icons/developer.jpg" alt="developer" class="img" />
        <div class="blur" />
      </section>
    </article>
  </section>
</template>
<script setup></script>

<style scoped>
.about {
  margin-top: 100px;
  max-width: 900px;
}
article {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
}
p {
  color: var(--slate);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
}
section {
  height: max-content;
}
.section__img {
  display: block;
  max-width: 300px;
  aspect-ratio: 1;
  transition: all 0.3s ease-in-out;
}
.blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--green);
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
}
.img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 5px;
  overflow: hidden;
  filter: grayscale(1);
}
.section__img::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--green);
  top: 20px;
  left: 20px;
  z-index: -1;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.section__img:hover::after {
  top: 10px;
  left: 10px;
}
.section__img:hover .blur {
  opacity: 0;
}
.section__img:hover .img {
  filter: grayscale(0);
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

.skills__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}
.skills__list li {
  position: relative;
  color: var(--slate);
  font-family: "Roboto", monospace;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
}
.skills__list li::before {
  content: "▹";

  color: var(--green);
  font-size: 12px;
  line-height: 12px;
  margin-right: 5px;
}
@media (max-width: 800px) {
  .inner {
    display: block;
  }
  .section__img {
    margin: 0 auto;
    margin-top: 40px;
  }
}
</style>
