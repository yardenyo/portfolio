import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "FlexFlix - Netflix Clone",
    category: "development",
    description:
      "A Netflix clone built with Vue.js, Pinia, Node.js, Express, MongoDB, and PrimeVue.",
    projectUrl: "https://github.com/yardenyo/FlexFlix",
    imageURL: "netflix.webp",
  },
  {
    id: 2,
    title: "LinkedIn Emails Extractor",
    category: "development",
    description:
      "LinkedIn script for extracting emails from posts and comments, filtered by specific vocabulary.",
    projectUrl: "https://github.com/yardenyo/emailsExtractor",
    imageURL: "linkedin.webp",
  },
  {
    id: 3,
    title: "ASAP - Academic Staff Appointment Process",
    category: "development",
    description:
      "A web application for managing the academic staff appointment process in Sapir College.",
    projectUrl: "https://github.com/yardenyo/Asap",
    imageURL: "asap.webp",
  },
]);

export default projects;
