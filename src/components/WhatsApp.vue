<template>
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/ScrollRevealObject";

const phoneNumber = ref("972527899937");
const text = ref(
  "Hi%20Yarden%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20hire%20you!"
);

onMounted(() => {
  ScrollReveal().reveal(".fixed-whatsapp-button", ScrollRevealObject);
});
</script>

<style scoped lang="scss">
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

@media (max-width: $mobile-width) {
  .fixed-whatsapp-button {
    .whatsapp-button {
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }
  }
}
</style>
