<template>

    <div class="about-section-container">

      <div class="about-section">
        
        <div class="flex">
          <div class="flex-1">
            <h1> About Me </h1>
          </div>
          <div class="flex shrink-0 sm:w-64">
             <GnButton :disabled="false" variant="ghost" color="var(--app-color-accent)" @gn-click="router.push('/career')">
              <span class="view-projects-label">
                View Career
                <FontAwesomeIcon :icon="faArrowRight" />
              </span>
            </GnButton>
          </div>
        </div>

        <p> My name is Shalin Singh but I go by "Shay". I have been working in software development for 5+ years in financial services and utilities. My interests are Martial Arts (Muay Thai), Reading, Cooking, Playing the Piano and Tinkering with software and computers. Passionate about Healthcare and volunteer at Iowa Methodist with the Hospital Elder Life Program. Currently working towards obtaining my CNA (Certified Nursing Assistant) and aspiring to work in memory care for geriatrics. </p> 
      </div>
      <br /> 
    </div>
  
</template>

<script setup>
import { GnButton } from "@graphyne/web-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>

.about-section-container {
  width: 100%;
  max-width: 1120px;
  padding: 0 4.5rem; 
}

.about-section {
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
}

p {
  font-size: 16px;
  font-weight: normal;
  color: var(--app-color-text-muted);
}

/* tablet */
@media (max-width: 768px) {
  .about-section-container {
    padding: 0 24px;
  }
}

/* mobile */
@media (max-width: 480px) {
  .about-section-container {
    padding: 0 16px;
  }

  p {
    font-size: 15px;
  }
}

</style>
