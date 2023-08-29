<template>
  <div class="skills-carousel">
    <div class="title">Technology Stack</div>
    <div
      class="carousel-container"
      ref="carouselContainer"
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="endDrag"
    >
      <div class="carousel" ref="carousel">
        <div class="skills" ref="skillsContainer">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            <i :class="skill.iconClass" :style="{ color: skill.color }"></i>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";

const skills = ref([
  { name: "HTML", iconClass: "fa-brands fa-html5", color: "#f06c00" },
  { name: "CSS", iconClass: "fa-brands fa-css3-alt", color: "#4d8eff" },
  { name: "JavaScript", iconClass: "fa-brands fa-js-square", color: "#f0db4f" },
  { name: "Java", iconClass: "fa-brands fa-java", color: "#ff0000" },
  { name: "Python", iconClass: "fa-brands fa-python", color: "#002970" },
  { name: "C#", iconClass: "fa-brands fa-microsoft", color: "#68217a" },
  { name: "Bootstrap", iconClass: "fa-brands fa-bootstrap", color: "#9500a8" },
  { name: "React.js", iconClass: "fa-brands fa-react", color: "#61dafb" },
  { name: "Vue.js", iconClass: "fa-brands fa-vuejs", color: "#03c200" },
  { name: "Node.js", iconClass: "fa-brands fa-node-js", color: "#3c873a" },
  { name: "Express.js", iconClass: "fa-brands fa-node-js", color: "#3c873a" },
  { name: "MongoDB", iconClass: "fa-solid fa-database", color: "#4db33d" },
  { name: "Git", iconClass: "fa-brands fa-git", color: "#000" },
  { name: "GitHub", iconClass: "fa-brands fa-github", color: "#000" },
  { name: "GitLab", iconClass: "fa-brands fa-gitlab", color: "#ffa200" },
  { name: "AWS", iconClass: "fa-brands fa-aws", color: "#ffa200" },
]);

const carouselContainer = ref(null);
const carousel = ref(null);

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

onMounted(() => {
  const container = carouselContainer.value;
  if (container) {
    container.style.cursor = "grab";
  }
});

function startDrag(e) {
  isDragging = true;
  startX = e.clientX - carouselContainer.value.offsetLeft;
  scrollLeft = carousel.value.scrollLeft;
  carouselContainer.value.style.cursor = "grabbing";
}

function drag(e) {
  if (!isDragging) return;
  const x = e.clientX - carouselContainer.value.offsetLeft;
  const walk = x - startX;
  carousel.value.scrollLeft = scrollLeft - walk;
}

function endDrag() {
  isDragging = false;
  carouselContainer.value.style.cursor = "grab";
}
</script>

<style scoped lang="scss">
.skills-carousel {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  height: 300px;
  overflow: hidden;

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: $text-color-accent;
  }

  .carousel-container {
    width: 75%;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    .carousel {
      width: 100%;
      overflow: auto;
      position: relative;
      cursor: grab;
      user-select: none;

      .skills {
        display: flex;
        scroll-behavior: smooth;
        transition: transform 0.3s ease;

        .skill {
          margin: 0 3rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 500;
          color: $text-color-accent;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &:hover {
            color: $accent;
          }

          i {
            display: block;
            margin-bottom: 5px;
            font-size: 48px;
          }
        }
      }
    }

    .carousel::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
