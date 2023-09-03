<template>
  <div class="home">
    <div class="navbar">
      <Navbar />
    </div>
    <div id="home" class="main-div">
      <HomeMainDiv />
    </div>
    <div id="skills" class="skills">
      <Skills />
    </div>
    <div id="about" class="about-me">
      <AboutMe />
    </div>
    <div id="resume" class="experience">
      <Experience />
    </div>
    <div id="projects" class="projects">
      <Projects />
    </div>
    <div id="contact" class="contact">
      <Contact />
    </div>
    <div class="footer">
      <Footer />
    </div>
    <div v-if="showScrollToTopButton" class="scroll-to-top-button">
      <i class="fas fa-arrow-up" @click="scrollToTop"></i>
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
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import HomeMainDiv from "@/components/HomeMainDiv.vue";
import Navbar from "@/components/Navbar.vue";
import Skills from "@/components/Skills.vue";
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/ScrollRevealObject";
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "Yarden's Portfolio - A portfolio website built with Vue 3",
    },

    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

const phoneNumber = ref("972527899937");
const text = ref(
  "Hi%20Yarden%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20hire%20you!"
);

const scrollY = ref(window.scrollY);

const showScrollToTopButton = computed(() => {
  return scrollY.value > 100;
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  ScrollReveal().reveal(".scroll-to-top-button", ScrollRevealObject);
  ScrollReveal().reveal(".fixed-whatsapp-button", ScrollRevealObject);

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

    .scroll-to-top-button {
      bottom: 4.5rem;
      i {
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
