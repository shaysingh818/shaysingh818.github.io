<template>

    <div class="page-container">

      <Hero
        title="Shay Singh"
        description="Building, Breaking & Learning"
        imageHeroItem1="/images/muay-thai.webp"
        imageHeroItem2="/images/SWE.jpg"
        imageHeroItem3="/images/anatomy.jpg"
      />

      <FeaturedProjects /> 

    </div>
   

    
</template>

<script setup>
import Hero from "../components/landing/Hero.vue";
import FeaturedProjects from "../components/portfolio/FeaturedProjects.vue";
</script>

<style scoped>

.body {
  bottom: 20px; 
}

.interests-section {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 10px;
  gap: 1.0rem; 
}





</style>

