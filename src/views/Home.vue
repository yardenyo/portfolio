<template>
  <div class="home">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main-div">
      <HomeMainDiv />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import HomeMainDiv from "@/components/HomeMainDiv.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;

  .navbar {
    width: 100%;
    position: absolute;
    z-index: 100;
  }

  .main-div {
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
