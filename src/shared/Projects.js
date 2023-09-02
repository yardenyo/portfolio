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
    title: "openFEC",
    category: "development",
    description:
      "An open-source web app powered by the OpenFEC API for easy exploration of campaign finance data.",
    projectUrl: "https://github.com/yardenyo/openFEC",
    imageURL: "fec.webp",
  },
  {
    id: 3,
    title: "LinkedIn Emails Extractor",
    category: "development",
    description:
      "LinkedIn script for extracting emails from posts and comments, filtered by specific vocabulary.",
    projectUrl: "https://github.com/yardenyo/emailsExtractor",
    imageURL: "linkedin.webp",
  },
]);

export default projects;
