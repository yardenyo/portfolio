<template>
  <div class="projects">
    <div class="title-container">
      <div class="projects-title">
        <h1>My <span class="primary-text">Portfolio</span></h1>
      </div>
      <div class="title-underline"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

onMounted(() => {
  sr.reveal(".projects-title", { interval: 200 });
});
</script>
<style scoped lang="scss">
.primary-text {
  color: $text-color-primary;
}
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $main-background;
  padding: 2rem;

  .title-container {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    .projects-title {
      font-size: 1rem;
      font-weight: 500;
      color: $white;
    }

    .title-underline {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      background-color: $white;
      margin: 0.5rem auto;
    }
  }
}

@media screen and (max-width: $tablet-width) {
  .title-container {
    width: 100% !important;
  }
}

@media screen and (max-width: $mobile-width) {
  .title-container {
    width: 100% !important;
  }
}
</style>
