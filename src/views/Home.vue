<template>
  <div class="home">
    <div class="home-main-container">
      <Navbar />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  .home-main-container {
    min-height: 40rem;
    height: 100%;
    background: $primary-background;
  }
}
</style>
