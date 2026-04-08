<template>
  <div class="page-container"> 
      <Hero
        title="Skills & Technology"
        imageHeroItem="/images/skills_tech.jpg"
      />

  </div>


</template>


<script setup>
import Hero from "../components/career/Hero.vue";
</script>


<style>


.projects-section {
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
  font-size: 20px; 
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
