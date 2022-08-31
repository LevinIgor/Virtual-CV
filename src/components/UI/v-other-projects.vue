<template>
  <div class="other__projects">
    <div class="title">Other Noteworthy Projects</div>
    <div class="projects">
      <div class="project" v-for=" in 10">
        <div class="project__header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="folder"
          >
            <title>Folder</title>
            <path
              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="link"
          >
            <title>External Link</title>
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
        <div class="project__name">
          Integrating Algolia Search with WordPress Multisite
        </div>
        <p class="project__desc">
          Building a custom multisite compatible WordPress plugin to build
          global search with Algolia
        </p>

        <ul class="project__tags">
          <li>Algolia</li>
          <li>WordPress</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.other__projects {
  margin-top: 200px;
}

.folder {
  width: 40px;
  height: 40px;
  transition: color 0.2s ease-in-out;
}
.link {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
.title {
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-size: clamp(24px, 5vw, 32px);
  text-align: center;
}
.projects {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.project {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: var(--light-navy);
  padding: 20px;
  margin: 10px;
}
.project__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project__name {
  margin-top: 20px;
  font-weight: 600;
  color: var(--lightest-slate);
  font-size: 20px;
}
.project__desc {
  color: var(--light-slate);
  font-size: 16px;
}
.project__tags {
  margin-top: 10px;
  display: flex;
}
.project__tags li {
  margin-right: 10px;
  font-size: 13px;
}
.project:hover {
  transform: translateY(-15px);
}
.project:hover .project__name {
  color: var(--green);
}
.project:hover .folder{
  color: var(--green);
}

@media (max-width: 400px) {
.project__name{
  font-size: 16px;
}
.project__desc{
  font-size: 14px;

}
}
</style>
