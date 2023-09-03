<template>
  <div v-if="showScrollToTopButton" class="scroll-to-top-button">
    <i class="fas fa-arrow-up" @click="scrollToTop"></i>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/ScrollRevealObject";

const scrollY = ref(window.scrollY);

const showScrollToTopButton = computed(() => {
  return scrollY.value > 100;
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  ScrollReveal().reveal(".scroll-to-top-button", ScrollRevealObject);

  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>
<style scoped lang="scss">
.scroll-to-top-button {
  position: fixed;
  bottom: 5.5rem;
  right: 1rem;
  z-index: 1000;

  i {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text-color-accent;
    font-size: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
}

@media (max-width: $mobile-width) {
  .scroll-to-top-button {
    bottom: 4.5rem;
    i {
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }
  }
}
</style>
