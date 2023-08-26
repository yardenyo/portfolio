<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <div class="logo">Yarden Yosef.</div>
      </div>
      <div v-if="windowWidth > 768" class="navbar-links">
        <div class="navbar-link">Home</div>
        <div class="navbar-link">About</div>
        <button class="navbar-link">Contact</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const windowWidth = ref(window.innerWidth);
const scrollY = ref(window.scrollY);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });

  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 100%;

  .navbar-container {
    width: 100%;
    height: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .navbar-logo {
      width: fit-content;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
      }
    }

    .navbar-links {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar-link {
        margin: 0 1rem;
        color: white;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
}
</style>
