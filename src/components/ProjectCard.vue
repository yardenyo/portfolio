<template>
  <div class="project-card">
    <div class="project-image-container">
      <img :src="getURL" :alt="project.title" class="project-image" />
    </div>
    <div class="project-details">
      <div class="project-title">{{ project.title }}</div>
      <div class="project-description">{{ project.description }}</div>
      <a :href="project.projectUrl" target="_blank" class="view-button"
        >View Project</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const project = ref(props.project);

const getURL = computed(() => {
  if (import.meta.env.PROD) {
    return `dist/assets/img/${project.value.imageURL}`;
  } else {
    return `src/assets/img/${project.value.imageURL}`;
  }
});
</script>

<style scoped lang="scss">
.project-card {
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 400px;

  &:hover {
    transform: scale(1.05);
  }

  .project-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    .project-image {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .project-details {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1.5rem;
    text-align: left;

    .project-title {
      color: $accent;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .project-description {
      color: $accent;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    .view-button {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: $primary;
      color: $black;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: $accent;
        color: $white;
      }
    }
  }

  &:hover .project-details {
    display: block;
    opacity: 1;
    transform: translateY(-100%);
  }
}
</style>
