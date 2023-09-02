<template>
  <div class="social-media-links">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.link"
      class="social-link"
      target="_blank"
    >
      <i :class="link.iconClass"></i>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import socialLinksData from "@/shared/socialLinks";

const socialLinks = ref(socialLinksData);
</script>

<style scoped lang="scss">
.social-media-links {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 2rem;

  &:hover {
    color: $white;
  }
}
</style>
