import { reactive } from "vue";

const scrollRevealObject = reactive({
  delay: 200,
  distance: "0px",
  duration: 800,
  easing: "ease-in-out",
  interval: 100,
  origin: "bottom",
  reset: false,
});

export default scrollRevealObject;
