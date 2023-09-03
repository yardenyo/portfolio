div
<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <div class="logo">
          <router-link :to="{ name: 'home' }"
            >Yarden <span class="thin">Yosef.</span></router-link
          >
        </div>
      </div>
      <div v-if="windowWidth > 768" class="navbar-links">
        <template :key="link.key" v-for="(link, index) in navbarLinks">
          <div
            v-if="link.key !== 'contact'"
            class="navbar-link"
            @click="scrollTo(link.id)"
          >
            {{ link.name }}
          </div>
          <button v-else class="navbar-link" @click="scrollTo(link.id)">
            {{ link.name }}
          </button>
        </template>
      </div>
      <div v-else class="hamburger-menu" @click="toggleMenu">
        <div class="hamburger-menu-container">
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="showMenu" class="mobile-menu">
          <div class="close-button" @click="toggleMenu">×</div>
          <div class="mobile-menu-links">
            <template :key="link.key" v-for="(link, index) in navbarLinks">
              <div
                v-if="link.key !== 'contact'"
                class="navbar-link"
                @click="scrollTo(link.id, true)"
              >
                {{ link.name }}
              </div>
              <button
                v-else
                class="navbar-link"
                @click="scrollTo(link.id, true)"
              >
                {{ link.name }}
              </button>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import navbarLinks from "@/shared/navbarLinks";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/ScrollRevealObject";

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

const windowWidth = ref(window.innerWidth);
const scrollY = ref(window.scrollY);
const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function scrollTo(id, closeMenu = false) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
  if (closeMenu) {
    showMenu.value = false;
  }
}

onMounted(() => {
  ScrollReveal().reveal(".navbar-logo", ScrollRevealObject);
  ScrollReveal().reveal(".navbar-links", ScrollRevealObject);
  ScrollReveal().reveal(".hamburger-menu", ScrollRevealObject);
  ScrollReveal().reveal(".mobile-menu", ScrollRevealObject);

  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });

  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 100%;

  .navbar-container {
    width: 100%;
    height: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .navbar-logo {
      width: fit-content;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        a {
          font-size: 1.5rem;
          font-weight: 500;
          color: white;
          text-decoration: none;

          .thin {
            font-weight: 200;
          }
        }
      }
    }

    .navbar-links {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar-link {
        margin: 0 1rem;
        color: $white;
        opacity: 0.7;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          color: $primary;
        }
      }
    }

    .hamburger-menu {
      width: fit-content;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .hamburger-menu-container {
        width: 2rem;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .hamburger-menu-line {
          width: 100%;
          height: 1px;
          background-color: $white;
        }
      }
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: all 0.3s;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(-100%);
      opacity: 0;
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $main-background;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      transform-origin: top;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      font-size: 2rem;
      color: $white;
    }

    .mobile-menu-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .navbar-link {
        color: $white;
        opacity: 0.7;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          color: $primary;
        }
      }
    }

    .show-mobile-menu {
      transform: translateY(0);
      opacity: 1;
    }
  }

  button {
    margin: 2rem 1rem;
    padding: 12px 32px;
    border: 1px solid $primary;
    border-radius: 10px;
    color: $white !important;
    font-size: 1.2rem;
    cursor: pointer;
    background: transparent;
    opacity: 1 !important;

    &:hover {
      background-color: $primary;
      color: $accent !important;
    }
  }
}
</style>
