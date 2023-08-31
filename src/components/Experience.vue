<template>
  <div class="resume">
    <div class="timeline">
      <div class="timeline-line"></div>
      <div
        v-for="(event, index) in timelineEvents"
        :key="index"
        :class="['container', index % 2 === 0 ? 'left' : 'right']"
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
import { ref, onMounted } from "vue";
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
]);

onMounted(() => {
  sr.reveal(".timeline .container", { interval: 200 });

  const timelineLine = document.querySelector(".timeline-line");

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
  justify-content: center;
  background-color: #f2f2f2;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }

  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .left::after,
  .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }
}
</style>
