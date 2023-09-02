<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">Yarden <span class="thin">Yosef.</span></div>
      <div class="sections">
        <div
          v-for="section in footerSections"
          :key="section.title"
          class="footer-section"
        >
          <h3 class="section-title">{{ section.title }}</h3>
          <ul class="link-list">
            <li
              v-for="link in section.links"
              :key="link.text"
              class="link"
              @click="scrollTo(link.id)"
            >
              {{ link.text }}
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
            © 2021 Yarden Yosef. All rights reserved.
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
import { onMounted } from "vue";
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

const footerSections = [
  {
    title: "Links",
    links: [
      { id: "home", text: "Home", is: "link" },
      { id: "skills", text: "Skills", is: "link" },
      { id: "about", text: "About", is: "link" },
      { id: "resume", text: "Resume", is: "link" },
      { id: "projects", text: "Projects", is: "link" },
      { id: "contact", text: "Contact", is: "link" },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "(+972) 52-789-9937", is: "phone", link: "tel:+972527899937" },
      {
        text: "Yardenjobs@gmail.com",
        is: "email",
        link: "mailto: Yardenjobs@gmail.com",
      },
    ],
  },
  {
    title: "Services",
    links: [
      { text: "Web Development", is: "text" },
      { text: "Mobile Development", is: "text" },
      { text: "UI/UX Design", is: "text" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy policy", is: "link" },
      { text: "Terms of use", is: "link" },
      { text: "Cookies", is: "link" },
    ],
  },
];

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

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
