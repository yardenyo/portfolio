<template>
  <div class="resume">
    <div class="title-container">
      <div class="resume-title"><h1>Resume</h1></div>
      <div class="title-underline"></div>
    </div>
    <div class="timeline">
      <div class="timeline-line" v-if="!isMobile"></div>
      <div
        v-for="(event, index) in timelineEvents"
        :key="index"
        :class="[
          isMobile ? 'container-mobile' : 'container',
          index % 2 === 0 && !isMobile ? 'left' : 'right',
        ]"
      >
        <div class="content">
          <h2>{{ event.year }}</h2>
          <h3>{{ event.name }}</h3>
          <p>{{ event.company }}</p>
          <div v-html="event.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
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

const timelineEvents = ref([
  {
    name: "Front End Developer",
    company: "TrackBox",
    description: `
      <ul>
        <li>Implemented TrackBox Gaming's centralized platform using Vue.js, Pinia, and TypeScript, enabling seamless collaboration between iGaming operators and affiliates.</li>
        <li>Developed intuitive user interfaces and integrated affiliate management tools for enhanced communication and streamlined sharing of campaign insights and data.</li>
        <li>Created features that facilitate collaboration and ensure effective communication, fostering trust and seamless information sharing.</li>
        <li>Played a crucial role in the development of a centralized platform, establishing mutually beneficial relationships between iGaming operators and affiliates while enhancing their overall operations.</li>
      </ul>`,
    year: "2022 - Present",
  },
  {
    name: "Full Stack Developer - Internship Position",
    company: "SwagIT",
    description: `
      <ul>
        <li>Actively contributed to the development of a scalable e-commerce system from the ground up, utilizing React.js, Express, MongoDB, and Node.js to deliver a robust and efficient solution.</li>
        <li>Assisted in implementing critical features such as secure payment processing, user authentication, and order management, ensuring a reliable and secure e-commerce experience.</li>
      </ul>`,
    year: "2022",
  },
  {
    name: "B.Sc. Computer Science",
    company: "Sapir Academic College",
    description: `
      <ul>
        <li>Developed strong programming skills and gained expertise in algorithms, data structures, software development, and database management.</li>
        <li>Proficient in multiple languages (JAVA, C++, Python, JavaScript).</li>
        <li>Solid understanding of computer architecture, operating systems, networking, and cybersecurity.</li>
      </ul>`,
    year: "2019 - 2022",
  },
  {
    name: "Combat Warrior",
    company: "Israeli air force Iron Dome weapon system",
    description: `
      <ul>
        <li>Actively participated in a multitude of experiments and diverse operations, working closely alongside
government organizations.
</li>
        <li>The role demanded exceptional resilience while navigating through high‑pressure scenarios, ensuring
the smooth operation and maintenance of critical strategic systems. This experience reinforced my
ability to perform under pressure.
</li>
      </ul>`,
    year: "2011 - 2014",
  },
]);

let windowWidth = ref(window.innerWidth);

const isMobile = computed(() => windowWidth.value < 600);

function onWidthChange() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  sr.reveal(".resume-title", { interval: 200 });
  sr.reveal(".timeline .container-mobile", { interval: 200 });
  sr.reveal(".timeline .container", { interval: 200 });

  const timelineLine = document.querySelector(".timeline-line");

  window.addEventListener("resize", onWidthChange);

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;
    timelineLine.style.transform = `scaleY(${scrollPercentage / 100})`;
  });
});
</script>

<style scoped lang="scss">
.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $container-background;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.title-container {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  .resume-title {
    font-size: 1rem;
    font-weight: 500;
    color: $accent;
  }

  .title-underline {
    content: "";
    display: block;
    width: 25%;
    height: 2px;
    background-color: $primary;
    margin: 0.5rem auto;
  }
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  width: 6px;
  background-color: $accent;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform 1s ease;
}
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid $primary;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.right::after {
  left: -16px;
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;

  h2 {
    color: $accent;
    font-size: 20px;
    margin-bottom: 5px;
  }

  h3 {
    color: $primary;
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    color: $accent-dark;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  div {
    color: $accent-dark;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
  }
}

@media screen and (max-width: $tablet-width) {
  .title-container {
    width: 100% !important;
  }
}

@media screen and (max-width: $mobile-width) {
  .container-mobile {
    padding: 10px 0;
    width: 100%;
    font-size: 1rem;
    text-align: center;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 1rem;
      }

      div {
        text-align: left;
      }
    }
  }
  .container {
    padding: 10px 0;
  }

  .title-container {
    width: 100%;
  }
}
</style>
