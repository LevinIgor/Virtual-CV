<template>
  <div class="contact">
    <div class="title">What’s Next?</div>
    <div class="heading">Get In Touch</div>
    <p class="text">
      Although I’m not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I’ll try
      my best to get back to you!
    </p>
    <a class="btn" href="mailto:lytghzys@gmail.com">Say Hello</a>
  </div>
</template>
<script setup></script>

<style scoped>
.contact {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: var(--green);
  font-family: "Roboto", monospace;
  font-size: 14px;
  font-weight: 600;
}
.title::before {
  content: "04. ";
}
.heading {
  margin-top: 20px;
  font-size: clamp(40px, 5vw, 60px);
  color: var(--lightest-slate);
  line-height: 1.1;
  font-weight: 600;
}
.text {
  margin-top: 30px;
  max-width: 600px;
  text-align: center;
}
.btn {
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  font-family: "Roboto", monospace;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
  max-width: max-content;
}
.btn:hover {
  background-color: var(--green-tint);
}
</style>
