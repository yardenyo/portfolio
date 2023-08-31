<template>
  <div class="about-me">
    <div class="about-me-container">
      <div class="title-container">
        <div class="about-me-title">
          <h1>About <span class="primary-text">Me</span></h1>
        </div>
        <div class="title-underline"></div>
      </div>
      <div class="content-wrapper">
        <div class="about-me-image">
          <img
            src="@/assets/img/about-me-portrait.webp"
            alt="Yarden's picture"
          />
        </div>
        <div class="about-me-text">
          <SocialLinks />
          <div class="title">
            <h1>Hello, I Am <span class="primary-text">Yarden Yosef</span></h1>
          </div>
          <div class="about-me-text-container">
            <div class="paragraph">
              I'm a skilled Full Stack Developer with a passion for crafting
              exceptional web experiences. My expertise spans both frontend and
              backend technologies, and I take pride in translating complex
              requirements into practical, innovative solutions. Collaborative
              by nature, I actively engage with team members to achieve project
              goals and drive successful outcomes.
            </div>
            <div class="paragraph">
              My strength lies not only in code but also in communication. I
              bring strong communication skills to the table, fostering seamless
              collaboration with colleagues and stakeholders. I consistently
              deliver high-quality results that not only meet but exceed
              expectations.
            </div>
            <div class="paragraph">
              <button class="button">
                <a
                  href="https://drive.google.com/file/d/1pTMkvkzVwFc6gDuO1-aWAVzcYv1c5-vw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download CV</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import SocialLinks from "@/components/SocialLinks.vue";
import ScrollReveal from "scrollreveal";
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

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

onMounted(() => {
  sr.reveal(".about-me-title", { interval: 200 });
  sr.reveal(".content-wrapper", { interval: 200 });
});
</script>

<style scoped lang="scss">
.primary-text {
  color: $text-color-primary;
}

.about-me {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: $main-background;
  padding: 3rem;

  .about-me-container {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    height: 100%;
    overflow: hidden;

    .title-container {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .about-me-title {
      font-size: 1rem;
      font-weight: 500;
      color: $text-color-light;
    }

    .title-underline {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      background-color: $text-color-light;
      margin: 0.5rem auto;
    }

    .content-wrapper {
      width: 100%;
      display: flex;
      gap: 3rem;
      align-items: center;
      height: 100%;
      overflow: hidden;

      .about-me-image {
        flex: 1;
        max-width: 70%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        img {
          width: 100%;
          max-width: 100%;
        }
      }

      .about-me-text {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: left;

        .title {
          font-size: 1rem;
          color: $text-color-light;
        }

        .about-me-text-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 1.2rem;
          color: $text-color-light;

          .button {
            margin: 0.5rem 0;
            padding: 12px 32px;
            border: 1px solid $white;
            border-radius: 30px;
            color: $white;
            font-size: 1.2rem;
            font-weight: 500;
            cursor: pointer;
            background-color: transparent;

            &:hover {
              color: $primary;
            }

            a {
              color: $white;
              text-decoration: none;

              &:hover {
                color: $primary;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: $desktop-width) {
    .about-me-container {
      width: 90%;
    }
    .title-container {
      width: 100% !important;
    }

    .content-wrapper {
      flex-direction: column;
      gap: 1rem !important;
    }
    .about-me-image {
      width: 100%;
      max-width: none;
      border: none;
      padding: 0;
    }
    .about-me-text {
      flex: 1;
    }
  }

  @media (max-width: $tablet-width) {
    .about-me-text-container {
      gap: 2.5rem !important;
    }
  }

  @media (max-width: $mobile-width) {
    .about-me-text-container {
      font-size: 0.9rem !important;
    }
    .about-me-container {
      width: 100% !important;
    }
    .title-container {
      width: 100% !important;
    }

    .content-wrapper {
      flex-direction: column;
      gap: 1rem;
    }
    .about-me-image {
      width: 100%;
      max-width: none;
      border: none;
      padding: 0;
    }
    .about-me-text {
      flex: 1;
      text-align: center;

      .title {
        font-size: 0.6rem !important;
      }
    }
  }
}
</style>
