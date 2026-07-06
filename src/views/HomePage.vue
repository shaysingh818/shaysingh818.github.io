<template>
    <div class="page-container">
    
      <Hero
        title="Shay Singh"
        description="Software developer with 4+ years of experience. Currently working in financial services. Interested in applications of technology to healthcare, graph theory, and desktop application development."
        imageHeroItem1="/images/muay-thai.webp"
        imageHeroItem2="/images/SWE.jpg"
        imageHeroItem3="/images/anatomy.jpg"
        /> 
      <div class="interests-section">
        <h1> Featured Projects </h1>
        <div class="interests-grid">
          <ProjectCardV2
              title="DTunes"
              description="Pomodoro focus timer with background audio player, Personal tool developed to aid with focus. Developed using the Tauri desktop framework, cross platform and open source."
              imageUrl="/images/dtunes.png"
              projectLink="https://shaysingh818.github.io/DTunes/"
              :badges="['rust', 'tauri', 'typescript', 'audio']"
          />
          <ProjectCardV2
              title="Dendritic"
              description="Lightweight and extensible optimization library. Includes first order optimization with multi variate/vector valued functions."
              imageUrl="/images/dendritic.png"
              projectLink="https://crates.io/crates/dendritic"
              :badges="['rust', 'optimization', 'ndarray', 'autodiff']"
          />
          <ProjectCardV2
              title="Neurograph"
              description="A graph theory data suite for creating extensible interfaces for graph conversion and network analysis"
              imageUrl="/images/neurograph.png"
              projectLink="https://shaysingh818.github.io/neurograph/"
              :badges="['rust', 'graph theory', 'algorithms']"
          />
        </div>
        
      </div>
    </div>
   
</template>
<script setup>
import Hero from "../components/landing/Hero.vue";
import ProjectCardV2 from "../components/portfolio/ProjectCardV2.vue";
import InterestCard from "../components/landing/InterestCard.vue";
import HealthcareIcon from "@/assets/icons/healthcare2.svg"
import CodeIcon from "@/assets/icons/code.svg"
import BoxingGloveIcon from "@/assets/icons/boxing.svg"; 
</script>
<style scoped>
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
  flex-wrap: wrap;
  justify-content: center; 
  align-items: stretch;
  gap: 1.5rem;
}
h1 {
  color: white;
  font-size: 30px; 
}
@media (max-width: 480px) {
  .interests-grid {
    flex-direction: column;
    gap: 1.0rem;
  }

  .interests-section {
    padding: 30px; 
  }
}
</style>
