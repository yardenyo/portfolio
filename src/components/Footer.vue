<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">Yarden <span class="thin">Yosef.</span></div>
      <div class="sections">
        <div
          class="footer-section"
          v-for="(section, index) in sections"
          :key="index"
        >
          <h3 class="section-title">{{ section.title }}</h3>
          <ul class="link-list">
            <li
              :class="item.type"
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
            >
              <template v-if="item.routerLink">
                <router-link :to="item.routerLink">{{ item.text }}</router-link>
              </template>
              <template v-else>
                <span @click="item.action">{{ item.text }}</span>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="footer-bottom">
      <div class="social-links">
        <socialLinks />
      </div>
      <div class="footer-bottom-content">
        <div class="footer-bottom-left">
          <div class="footer-bottom-text">
            © {{ getCurrentYear }} Yarden Yosef. All rights reserved.
          </div>
        </div>
        <div class="footer-bottom-right">
          <div class="footer-bottom-text">
            Designed & Developed by Yarden Yosef
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, computed } from "vue";
import ScrollReveal from "scrollreveal";
import socialLinks from "@/components/SocialLinks.vue";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

const getCurrentYear = computed(() => {
  const currentDate = new Date();
  return currentDate.getFullYear();
});

const sections = [
  {
    title: "Links",
    items: [
      { text: "Home", action: () => scrollTo("home"), type: "link" },
      { text: "Skills", action: () => scrollTo("skills"), type: "link" },
      { text: "About", action: () => scrollTo("about"), type: "link" },
      { text: "Resume", action: () => scrollTo("resume"), type: "link" },
      { text: "Projects", action: () => scrollTo("projects"), type: "link" },
      { text: "Contact", action: () => scrollTo("contact"), type: "link" },
    ],
  },
  {
    title: "Contact",
    items: [
      { text: "(+972) 52-789-9937", action: callMe, type: "link" },
      { text: "Yardenjobs@gmail.com", action: sendEmail, type: "link" },
    ],
  },
  {
    title: "Services",
    items: [
      "Web Development",
      "Web Design",
      "Mobile Development",
      "Mobile Design",
      "WordPress Development",
      "WordPress Design",
      "SEO",
      "UI/UX Design",
    ].map((text) => ({ text, type: "text" })),
  },
  {
    title: "Legal",
    items: [
      { text: "Terms of use", routerLink: { name: "terms" }, type: "link" },
      { text: "Privacy policy", routerLink: { name: "privacy" }, type: "link" },
      {
        text: "Accessibility",
        routerLink: { name: "accessibility" },
        type: "link",
      },
    ],
  },
];

function scrollTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

function callMe() {
  window.open("tel:+972527899937");
}

function sendEmail() {
  window.open("mailto:Yardenjobs@gmail.com");
}

onMounted(() => {
  sr.reveal(".footer-content");
  sr.reveal(".footer-bottom");
});
</script>

<style scoped lang="scss">
.footer {
  background: $main-background;
  color: $white;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.footer-content {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: $white;
  width: 50%;
}

.thin {
  font-weight: 300;
}

.sections {
  display: flex;
  width: 100%;
  align-items: flex-start;
}

.footer-section {
  flex: 1;
  max-width: 15rem;
  margin: 1rem;
  text-align: center;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  &:after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background-color: $primary;
    margin: 0.5rem auto;
  }
}

.link-list {
  list-style: none;
  padding: 0;
}

.link {
  font-size: 1rem;
  margin: 0.2rem 0;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  a {
    text-decoration: none;
    color: $white;

    &:hover {
      color: $primary;
    }
  }
}

.link:hover {
  color: $primary;
}

.divider {
  width: 80%;
  height: 1px;
  background-color: $white;
  margin: 1rem auto;
}

.footer-bottom {
  background-color: $main-background;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

@media (max-width: $desktop-width) {
  .footer-content {
    flex-direction: column;
  }

  .logo {
    width: 100%;
  }

  .sections {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    margin: 0.5rem;
  }
}
</style>
