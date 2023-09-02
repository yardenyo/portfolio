<template>
  <div class="projects">
    <div class="title-container">
      <div class="projects-title">
        <h1>My <span class="primary-text">Portfolio</span></h1>
      </div>
      <div class="title-underline"></div>
    </div>

    <div class="wrapper">
      <div class="filter-options">
        <button
          @click="filterProjects('all')"
          :class="{ active: selectedFilter === 'all' }"
        >
          All
        </button>
        <button
          @click="filterProjects('development')"
          :class="{ active: selectedFilter === 'development' }"
        >
          Development
        </button>
        <button
          @click="filterProjects('wordpress')"
          :class="{ active: selectedFilter === 'wordpress' }"
        >
          WordPress
        </button>
      </div>

      <div class="project-list">
        <transition-group name="project-fade">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/shared/Projects";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

const selectedFilter = ref("all");

const filteredProjects = computed(() => {
  if (selectedFilter.value === "all") {
    return projects.value;
  } else {
    return projects.value.filter(
      (project) => project.category === selectedFilter.value
    );
  }
});

function filterProjects(filter) {
  selectedFilter.value = filter;
}

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
  padding: 2rem 2rem 5rem 2rem;

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

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .filter-options {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      button {
        background-color: transparent;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        padding: 1rem 1.5rem;
        font-size: 1rem;
        margin: 0 0.5rem;
        color: $text-color-primary;
        transition: background-color 0.3s ease, color 0.3s ease;
        outline: none;

        &.active {
          background-color: $primary;
          color: $white;
        }
      }
    }

    .project-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      justify-items: center;
    }
  }
}

.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.3s ease;
}
.project-fade-enter-from,
.project-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

@media screen and (max-width: $desktop-width) {
  .wrapper {
    .project-list {
      grid-template-columns: repeat(1, 1fr) !important;
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

  .wrapper {
    .filter-options {
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      button {
        width: 100%;
      }
    }
    .project-list {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
}
</style>
