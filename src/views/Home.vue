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
    <ScrollToTop />
    <WhatsApp />
  </div>
</template>

<script setup>
import HomeMainDiv from "@/components/HomeMainDiv.vue";
import Navbar from "@/components/Navbar.vue";
import Skills from "@/components/Skills.vue";
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import WhatsApp from "@/components/WhatsApp.vue";
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
}
</style>
