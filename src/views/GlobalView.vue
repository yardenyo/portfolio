<template>
  <div class="terms">
    <div class="navbar">
      <Navbar />
    </div>
    <div id="home" class="main-div">
      <HomeMainDiv />
    </div>
    <div class="content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>{{ content }}</p>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <ScrollToTop />
    <WhatsApp />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
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
</script>

<style lang="scss" scoped>
.terms {
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

  .content {
    text-align: center;
    padding: 20px;
  }
}
</style>
