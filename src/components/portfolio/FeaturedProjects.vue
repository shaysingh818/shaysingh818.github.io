<template>

  <div class="featured-projects-container">

    <div class="featured-projects">
      <h1> Latest Projects </h1>
      <div class="featured-projects-grid">
        <FeaturedProject /> 
        <FeaturedProject /> 
        <FeaturedProject /> 
      </div>
    </div> 

  </div>
    
</template>


<script setup>
import FeaturedProject from "./FeaturedProject.vue"
</script>

<style scoped>

.featured-projects-container {
  width: 100%;
  max-width: 1120px;
  padding: 0 4.5rem; 
}

.featured-projects {
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
}

.featured-projects-grid {
  display: grid; 
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem; 
}

/* tablet: two cards per row */
@media (max-width: 1024px) {
  .featured-projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* mobile: one card per row */
@media (max-width: 480px) {
  .featured-projects-container {
    padding: 0 16px;
  }

  .featured-projects-grid {
    grid-template-columns: 1fr;
  }
}

</style>
