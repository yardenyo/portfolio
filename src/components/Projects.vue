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
        <div
          class="project-card"
          v-for="project in filteredProjects"
          :key="project.id"
        >
          <div class="project-header">
            <h2>{{ project.title }}</h2>
          </div>
          <img
            :src="`src/assets/img/${project.imageURL}`"
            :alt="project.title"
            class="project-image"
          />
          <div class="project-details">
            <p>{{ project.description }}</p>
            <a :href="project.projectUrl" target="_blank" class="view-button"
              >View Project</a
            >
          </div>
        </div>
      </div>
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

const selectedFilter = ref("all");

const projects = ref([
  {
    id: 1,
    title: "Development Project 1",
    category: "development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectUrl: "https://www.google.com",
    imageURL: "about-me-portrait.webp",
  },
  {
    id: 2,
    title: "WordPress Project 1",
    category: "wordpress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectUrl: "https://www.google.com",
    imageURL: "about-me-portrait.webp",
  },
  {
    id: 3,
    title: "Development Project 2",
    category: "development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectUrl: "https://www.google.com",
    imageURL: "about-me-portrait.webp",
  },
  {
    id: 4,
    title: "WordPress Project 2",
    category: "wordpress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectUrl: "https://www.google.com",
    imageURL: "about-me-portrait.webp",
  },
]);

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
      margin-top: 2rem;

      .project-card {
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        &:hover {
          transform: scale(1.05);
        }

        .project-header {
          padding: 1rem;
          color: $white;
          font-size: 1rem;
          font-weight: 500;
        }

        .project-image {
          width: 100%;
          height: 30rem;
          object-fit: cover;
        }

        .project-details {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          p {
            color: $text-color-primary;
          }

          .view-button {
            background-color: $primary;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            padding: 1rem 1.5rem;
            font-size: 1rem;
            margin: 0 0.5rem;
            color: $white;
            transition: background-color 0.3s ease, color 0.3s ease;
            outline: none;
            align-self: flex-end;
            text-decoration: none;

            &:hover {
              background-color: $accent;
              border: 1px solid $white;
            }
          }
        }
      }
    }
  }
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
    }
    .project-list {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
}
</style>
