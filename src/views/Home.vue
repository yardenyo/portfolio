<template>
  <div class="home">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main-div">
      <HomeMainDiv />
    </div>
    <div class="skills">
      <Skills />
    </div>
    <div class="fixed-whatsapp-button">
      <a
        :href="`https://wa.me/${phoneNumber}?text=${text}`"
        class="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import HomeMainDiv from "@/components/HomeMainDiv.vue";
import Navbar from "@/components/Navbar.vue";
import Skills from "@/components/Skills.vue";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

const phoneNumber = ref("972527899937");
const text = ref(
  "Hi%20Yarden%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20hire%20you!"
);

onMounted(() => {
  sr.reveal(".skills", { interval: 200 });
  sr.reveal(".fixed-whatsapp-button", { interval: 200 });
});
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  .navbar {
    width: 100%;
    position: absolute;
    z-index: 100;
  }

  .main-div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills {
    width: 100%;
    height: 100%;
  }

  .fixed-whatsapp-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 1000;

    .whatsapp-button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: $whatsapp;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $text-color-accent;
      font-size: 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
      text-decoration: none;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: $mobile-width) {
  .home {
    .fixed-whatsapp-button {
      .whatsapp-button {
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
