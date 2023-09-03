<template>
  <div class="globalView">
    <div class="navbar">
      <Navbar />
    </div>
    <div id="home" class="main-div">
      <HomeMainDiv />
    </div>
    <div id="content" class="content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <div class="content">{{ content }}</div>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <ScrollToTop />
    <WhatsApp />
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import HomeMainDiv from "@/components/HomeMainDiv.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import WhatsApp from "@/components/WhatsApp.vue";
import legals from "@/shared/legals.js";

const title = ref("");
const subtitle = ref("");
const content = ref("");

import { useRoute } from "vue-router";

const route = useRoute();

watchEffect(() => {
  if (route.params.slug) {
    const slug = route.params.slug;
    if (legals.value[slug]) {
      title.value = legals.value[slug].title;
      subtitle.value = legals.value[slug].subtitle;
      content.value = legals.value[slug].content;
    } else {
      title.value = "404";
      subtitle.value = "Page not found";
      content.value = "The page you are looking for does not exist.";
    }
  }
});

onMounted(() => {
  const element = document.getElementById("content");
  element.scrollIntoView({ behavior: "smooth" });
});
</script>

<style lang="scss" scoped>
.globalView {
  width: 100%;
  height: 100%;
  background: $container-background;

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

  .content {
    padding: 20px;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .content {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 1rem;
      background-color: $white;
      padding: 30px;
      border-radius: 10px;
      line-height: 1.5;
      white-space: pre-line;
    }
  }
}
</style>
