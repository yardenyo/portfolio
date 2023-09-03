<template>
  <div class="project-card">
    <div class="project-image-container">
      <img
        :src="`/assets/img/${project.imageURL}`"
        :alt="project.title"
        class="project-image"
      />
    </div>
    <div class="project-details">
      <div class="project-title">{{ project.title }}</div>
      <div class="project-description">{{ project.description }}</div>
      <div class="project-button">
        <a :href="project.projectUrl" target="_blank" class="view-button"
          >View Project</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/ScrollRevealObject";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const project = ref(props.project);

onMounted(() => {
  ScrollReveal().reveal(".project-card", ScrollRevealObject);
});
</script>

<style scoped lang="scss">
.project-card {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 400px;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.05);
  }

  .project-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    height: 400px;
    width: 100%;

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
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

    .project-button {
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
  }

  &:hover .project-details {
    display: block;
    opacity: 1;
    transform: translateY(-100%);
  }
}
</style>
