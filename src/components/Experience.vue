<template>
  <div class="resume">
    <div class="column education">
      <h2><i class="fas fa-graduation-cap"></i> Education</h2>
      <div class="section" v-for="(edu, index) in education" :key="index">
        <div class="item">
          <h3>{{ edu.name }}</h3>
          <p>Degree: {{ edu.degree }}</p>
          <p>School: {{ edu.school }}</p>
          <p>Year: {{ edu.year }}</p>
        </div>
      </div>
    </div>

    <div class="column experience">
      <h2><i class="fas fa-briefcase"></i> Experience</h2>
      <div class="section" v-for="(exp, index) in experience" :key="index">
        <div class="item">
          <h3>{{ exp.name }}</h3>
          <p>Position: {{ exp.position }}</p>
          <p>Company: {{ exp.company }}</p>
          <p>Year: {{ exp.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

const education = ref([
  {
    name: "Education 1",
    degree: "Bachelor of Science",
    school: "University XYZ",
    year: "2010 - 2014",
  },
  {
    name: "Education 2",
    degree: "Master of Science",
    school: "University ABC",
    year: "2015 - 2017",
  },
  {
    name: "Education 3",
    degree: "PhD in Computer Science",
    school: "University DEF",
    year: "2018 - 2022",
  },
]);

const experience = ref([
  {
    name: "Experience 1",
    position: "Software Developer",
    company: "Tech Corp",
    year: "2014 - 2017",
  },
  {
    name: "Experience 2",
    position: "Senior Developer",
    company: "Mega Software",
    year: "2017 - 2020",
  },
  {
    name: "Experience 3",
    position: "Team Lead",
    company: "Innovate Inc.",
    year: "2020 - Present",
  },
]);

onMounted(() => {
  sr.reveal(".education .section", { interval: 200 });
  sr.reveal(".experience .section", { interval: 200 });
});
</script>

<style scoped lang="scss">
.resume {
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.column {
  flex: 1;
  padding: 2rem;
  background-color: #fff;
}

.section {
  margin-bottom: 2rem;
}

.item {
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #555;
}

p {
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: #777;
}

@media (max-width: $tablet-width) {
  .resume {
    flex-direction: column;
  }
}
</style>
