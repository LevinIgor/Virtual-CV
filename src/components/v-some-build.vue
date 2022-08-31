<template>
  <div class="some__build">
    <div class="title">Some Things I’ve Built</div>
    <div class="project">
      <div class="project__img">
        <img
          src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png"
          alt=""
        />
      </div>
      <div class="project__text">
        <div class="project__bg" />
        <div class="featured">Featured Project</div>
        <div class="project__name">Halcyon Theme</div>
        <div class="project__details">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </div>

        <ul class="project__tags">
          <li>VS Code</li>
          <li>Sublime Text</li>
          <li>Atom</li>
          <li>iTerm</li>
          <li>Hyper</li>
        </ul>

        <div class="project__links">
          <a href="" class="project__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <title>External Link</title>

              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <polyline points="15 3 21 3 21 9" />

              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a href="" class="project__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <title>GitHub</title>
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <VOtherProjects />
  </div>
</template>
<script setup>
import VOtherProjects from "./UI/v-other-projects.vue";
</script>

<style scoped>
.some__build {
  margin-top: 200px;
}
.icon {
  width: 24px;
  height: 24px;
}
.title {
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: clamp(26px, 5vw, 32px);
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-family: "Inter", sans-serif;
}
.title::before {
  content: "02.";
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

.project {
  margin-top: 30px;
  display: flex;
  justify-content: right;
  min-width: 100%;
}
.project__text {
  max-width: 70%;
  right: 0;
  text-align: right;
}
.project__img {
  position: absolute;
  max-height: 100%;
  max-width: 70%;
  left: 0;
  height: min-content;
  overflow: hidden;
}
.project__img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.featured {
  margin: 10px 0px;
  color: var(--green);
  font-family: "Roboto", monospace;
  font-size: 13px;
  font-weight: 400;
}
.project__name {
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);
}
.project__details {
  margin-top: 20px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: 16px;
}
.project__tags {
  margin-top: 20px;
  display: flex;
  justify-content: right;
}
.project__tags li {
  margin-right: 10px;
  color: var(--light-slate);
  font-weight: 400;
  font-size: 13px;
  user-select: none;
}
.project__links {
  margin-top: 10px;
  display: flex;
  justify-content: right;
}
.project__links a {
  transition: color 0.25s ease-in-out;
  margin-left: 20px;
}
.project__links a:hover {
  color: var(--green);
}

@media (max-width: 800px) {
  .project__img {
    display: none;
  }
  .project__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .project__text {
    padding: 40px;
    max-width: 100%;
    text-align: left;
    background-color: #112240b7;
  }
  .project__tags {
    justify-content: left;
  }
  ul {
    margin: 0;
    padding: 0;
  }
}
@media (max-width: 500px) {
  .project__text {
    padding: 10px;
  }
  .title {
    font-size: 22px;
  }
  .project__details {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
