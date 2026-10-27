<template>

    <div class="page-container">

      <Hero
        title="Shay Singh"
        description="Building, Breaking & Learning"
        imageHeroItem1="/images/landing_banner/muay-thai.webp"
        imageHeroItem2="/images/landing_banner/SWE.jpg"
        imageHeroItem3="/images/landing_banner/anatomy.jpg"
      />
      <About /> 
      <FeaturedProjects /> 
      <FeaturedBooks />

    </div>
  
</template>

<script setup>
import Hero from "../components/landing/Hero.vue";
import FeaturedProjects from "../components/portfolio/FeaturedProjects.vue";
import About from "../components/landing/About.vue"; 
import FeaturedBooks from "../components/reading-list/FeaturedBooks.vue";
</script>

<style scoped>

.body {
  bottom: 20px; 
}


</style>

