<template>
  <div class="page-container">

      <Hero
        title="Skills & Technology"
        imageHeroItem1="/images/career_banner/IOWAMETHODIST.jpg"
        imageHeroItem2="/images/career_banner/PRINCIPAL.avif"
        imageHeroItem3="/images/career_banner/PC.jpeg"
      >
        <div class="hero-skills">

          <Skills
              title="Programming Languages"
              :badges="['Rust', 'Python', 'Typescript', 'C', 'SQL']"
           />

          <Skills
              title="Frameworks"
              :badges="['Tauri', 'VueJS', 'Django', 'Flask', 'Streamlit', 'CUDA', 'Numpy', 'Pandas', 'Polars', 'Snowpark', 'Schemachange', 'DBT', 'Flyway']"
           />

          <Skills
              title="Technologies"
              :badges="['AWS', 'Snowflake', 'Clickhouse', 'GitHub', 'Backstage', 'Figma', 'Draw.IO']"
           />

        </div>
      </Hero>

      <div class="career-section">

        <h1> Career Positions </h1>

        <CareerPosition
          v-for="job in jobs"
          :key="job.company"
          :position="job"
        />

        

      </div>

  </div>


</template>


<script setup>
import Hero from "../components/shared/Hero.vue";
import Skills from "../components/career/Skills.vue";
import CareerPosition from "../components/career/CareerPosition.vue";
import jobs from '@/data/career-positions.json'
</script>


<style>


.hero-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 75%;
  width: 100%;
  gap: 0.5rem;
}

.career-section {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 10px;
  gap: 1.0rem;
  width: 100%;
}

.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 10px;
  gap: 1.0rem;
  width: 50%; 
}


h1 {
  color: white;
  font-size: 25px; 
}


@media (max-width: 992px) {

  .projects-list {
    width: 75%; 
  }

}


/* tablet */ 
@media (max-width: 768px) {

  .projects-list {
    width: 75%; 
  }

}


@media (max-width: 660px) {

  .projects-list {
    width: 100%;
  }

}



</style>
