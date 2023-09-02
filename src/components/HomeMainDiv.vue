<template>
  <div id="large-header" class="large-header">
    <MouseTracker />
    <img
      src="/assets/img/portrait.webp"
      alt="Portrait Image"
      class="portrait-image"
    />
    <div class="title-wrapper">
      <div class="main-title">
        <h1 class="title">Yarden <span class="thin">Yosef.</span></h1>
      </div>
      <div class="description-container">
        <div class="description-content">
          <div class="static-text">I Am</div>
          <div class="description-title">
            <span class="typed-text"></span>
          </div>
        </div>

        <socialLinks />

        <button class="contact-button">Hire Me</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import socialLinks from "@/components/SocialLinks.vue";
import MouseTracker from "@/components/MouseTracker.vue";
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

onMounted(() => {
  const descriptions = [
    "Full Stack Developer.",
    "Passionate about coding.",
    "Creating amazing web experiences.",
  ];

  const typedText = document.querySelector(".typed-text");

  let currentIndex = 0;

  function animateDescription() {
    const currentDescription = descriptions[currentIndex];
    typedText.textContent = "";

    typeText(currentDescription, () => {
      setTimeout(() => {
        eraseText(() => {
          currentIndex = (currentIndex + 1) % descriptions.length;
          animateDescription();
        });
      }, 1000);
    });
  }

  function typeText(text, callback) {
    let index = 0;
    const typingSpeed = 50;

    function type() {
      if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        callback();
      }
    }

    type();
  }

  function eraseText(callback) {
    let text = typedText.textContent;
    let index = text.length;
    const erasingSpeed = 30;

    function erase() {
      if (index > 0) {
        typedText.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(erase, erasingSpeed);
      } else {
        callback();
      }
    }

    erase();
  }

  animateDescription();
});
</script>
<style scoped lang="scss">
.large-header {
  position: relative;
  width: 100%;
  background: $main-background;
  overflow: hidden;
  z-index: 1;
}

.portrait-image {
  position: absolute;
  bottom: 0;
  left: 10%;
  height: 100%;
  opacity: 0.4;
  filter: brightness(0.5);
}

.title-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .main-title {
    position: relative;
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: $white;
    text-align: center;
    z-index: 100;
    .thin {
      font-weight: 200;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: $white;

    .description-content {
      display: flex;
      align-items: center;
    }

    .static-text {
      margin-right: 0.5rem;
    }

    .description-title {
      display: inline-block;
      position: relative;

      .typed-text {
        color: $primary;
        font-weight: 500;
      }

      .typed-text::after {
        content: "|";
        display: inline-block;
        animation: blinkCursor 0.7s infinite alternate;
        color: $white;
        margin-left: 5px;
      }
    }

    .contact-button {
      margin: 2rem 1rem;
      padding: 12px 32px;
      border: 3px solid $primary;
      border-radius: 30px;
      color: $black;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      background-color: $white;

      &:hover {
        background-color: $white;
        color: $primary;
      }
    }
  }

  @keyframes blinkCursor {
    to {
      opacity: 0;
    }
  }
}

@media screen and (max-width: $desktop-width) {
  .portrait-image {
    margin: 0 auto;
    left: 0;
    width: 100%;
    height: auto;
    max-width: 400px;
  }

  .title-wrapper {
    width: 100%;
    padding: 0 1rem;

    .main-title {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: $tablet-width) {
  .title-wrapper {
    .main-title {
      font-size: 1.2rem;
    }

    .description-container {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .social-link {
    font-size: 1rem !important;
    width: 2rem !important;
    height: 2rem !important;
    line-height: 2rem !important;
  }

  .contact-button {
    font-size: 1rem !important;
    padding: 0.5rem 0.5rem !important;
  }

  .description-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .static-text {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
