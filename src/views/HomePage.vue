<template>

    <div class="page-container">

      <Hero
        title="Shay Singh"
        description="Building, Breaking & Learning"
        imageHeroItem1="/images/muay-thai.webp"
        imageHeroItem2="/images/SWE.jpg"
        imageHeroItem3="/images/anatomy.jpg"
      />


      <div class="interests-section">
        <h1> Interests </h1>

        <div class="interests-grid">

          <InterestCard
            title="Martial Arts"
            description="Avid combat sports enthusiast & practioner. Currently training Muay Thai"
            :icon="BoxingGloveIcon"
          />
         
          <InterestCard
            title="Software Engineering"
            description="Working in financial services, hobbiest in graph theory, web development and algorithm research related to healthcare"
            :icon="CodeIcon"
          />

          <InterestCard
            title="Healthcare"
            description="Interested in applications of technology to healthcare & geriatric care"
            :icon="HealthcareIcon"
          />

        </div>
        
      </div>

    </div>
   

    
</template>

<script setup>
import Hero from "../components/landing/Hero.vue";
import InterestCard from "../components/landing/InterestCard.vue";
import HealthcareIcon from "@/assets/icons/healthcare2.svg"
import CodeIcon from "@/assets/icons/code.svg"
import BoxingGloveIcon from "@/assets/icons/boxing.svg"; 
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

.interests-grid {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: stretch;
  gap: 1.0rem;
  height: 250px;  
}

h1 {
  color: white;
  font-size: 20px; 
}


/* tablet */ 
@media (max-width: 768px) {

  .interests-grid {
    width: 100%; 
    height: auto; 
    padding: 10px; 
  }

}

@media (max-width: 480px) {


  .interests-section {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 10px;
    gap: 1.0rem;
  }

  .interests-grid {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: stretch;
    gap: 1.0rem;
    width: 250px; 
    height: auto; 
  }

}


</style>

