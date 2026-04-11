<template>
  <div class="page-container">

      <Hero
        title="Skills & Technology"
        imageHeroItem="/images/skills_tech.jpg"
      />

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
import Hero from "../components/career/Hero.vue";
import CareerPosition from "../components/career/CareerPosition.vue";
import jobs from '@/data/career-positions.json'
</script>


<style>


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
