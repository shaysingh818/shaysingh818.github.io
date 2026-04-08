<template>
  <div class="page-container"> 
      <Hero
        title="Software Portfolio"
        description="We are our projects - Sarte"
        imageHeroItem="/images/projects.jpg"
      />

      <div class="projects-section">

        <h1> Projects </h1> 

        <div class="projects-list">

          <ProjectCard
              title="DTunes"
              description="Pomodoro focus timer with background audio player, Personal tool developed to aid with focus. Developed using the Tauri desktop framework, cross platform and open source."
              imageUrl="/images/dtunes.png"
              projectLink="https://shaysingh818.github.io/DTunes/"
              :badges="['rust', 'tauri', 'typescript', 'audio']"
          />

          <ProjectCard
              title="Dendritic"
              description="Lightweight and extensible optimization library. Includes first order optimization with multi variate/vector valued functions."
              imageUrl="/images/dendritic.png"
              projectLink="https://crates.io/crates/dendritic"
              :badges="['rust', 'optimization', 'ndarray', 'autodiff']"
          />

          <ProjectCard
              title="Neurograph"
              description="A graph theory data suite for creating extensible interfaces for graph conversion and network analysis"
              imageUrl="/images/neurograph.png"
              projectLink="https://shaysingh818.github.io/neurograph/"
              :badges="['rust', 'graph theory', 'algorithms']"
          />

          <ProjectCard
              title="Data Research Labratory"
              description="Research labratory for building data warehouses and running large scale data & analytics projects. Domains focused mainly on healthcare, public government data & crime."
              imageUrl="/images/data-infra.png"
              projectLink="https://propulsion-consulting.github.io/terraform-modules/"
              :badges="['clickhouse', 'analytics', 'infrastructure']"
          />

        </div>



      </div>

  </div>


</template>


<script setup>
import Hero from "../components/portfolio/Hero.vue";
import ProjectCard from "../components/portfolio/ProjectCard.vue"; 
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
