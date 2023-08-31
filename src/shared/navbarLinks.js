import { ref } from "vue";

const navbarLinks = ref([
  { name: "Home", id: "home", key: "home" },
  { name: "Skills", id: "skills", key: "skills" },
  { name: "About", id: "about", key: "about" },
  { name: "Resume", id: "resume", key: "resume" },
  { name: "Projects", id: "projects", key: "projects" },
  { name: "Hire Me", id: "contact", key: "contact" },
]);

export default navbarLinks;
