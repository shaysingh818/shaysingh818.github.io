<template>

  <div class="featured-projects-container">

    <div class="featured-projects">
      <div class="flex">
        <div class="flex-1">
          <h1> Latest Projects </h1>
        </div>
        <div class="flex shrink-0 sm:w-64">
           <GnButton :disabled="false" variant="ghost" color="var(--app-color-accent)" @gn-click="router.push('/projects')">
            <span class="view-projects-label">
              View Projects
              <FontAwesomeIcon :icon="faArrowRight" />
            </span>
          </GnButton>
        </div>
      </div>
      <div class="featured-projects-grid">
        <FeaturedProject v-for="(project, index) in projects" :key="index" :obj="project" />
      </div>
    </div> 

  </div>
    
</template>


<script setup>
import FeaturedProject from "./FeaturedProject.vue"
import projects from "@/data/featured-projects.json"
import { GnButton } from "@graphyne/web-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>

.view-projects-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

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

/* tablet */
@media (max-width: 768px) {
  .featured-projects-container {
    padding: 0 24px;
  }
}

/* mobile: one card per row */
@media (max-width: 600px) {
  .featured-projects-container {
    padding: 0 16px;
  }

  .featured-projects-grid {
    grid-template-columns: 1fr;
  }
}

</style>
