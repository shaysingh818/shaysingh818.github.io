<template>
  <div class="page-container"> 

      <Hero
        title="Software Portfolio"
        description="We are our projects - Sarte"
        imageHeroItem1="/images/projects_banner/DTUNES.png"
        imageHeroItem2="/images/projects_banner/DENDRITIC.png"
        imageHeroItem3="/images/projects_banner/FLASHI.png"
      />

      <div class="projects-section">

        <div class="projects-header">
          <h1> Projects </h1>
          <p> These are the projects I build in my free time. Most of them are written in Rust. They cover numerical optimization and automatic differentiation, graph theory and network analysis, and data infrastructure for large-scale analytics on healthcare, public government and crime data. I also build small cross-platform desktop tools that help with my own focus and productivity. </p>
        </div>

        <div class="projects-list">
          <ProjectCard
              v-for="(project, index) in projects"
              :key="index"
              :title="project.title"
              :description="project.description"
              :imageUrl="project.imageUrl"
              :projectLink="project.projectLink"
              :badges="project.badges"
          />
        </div>



      </div>

  </div>


</template>


<script setup>
import Hero from "../components/shared/Hero.vue";
import ProjectCard from "../components/portfolio/ProjectCard.vue"; 
import projects from "@/data/projects.json";
</script>


<style>


.projects-header {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 1rem;
  width: 50%;
}

.projects-header p {
  font-size: 16px;
  font-weight: normal;
  color: var(--app-color-text-muted);
}

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

  .projects-list,
  .projects-header {
    width: 75%; 
  }

}


/* tablet */ 
@media (max-width: 768px) {

  .projects-list,
  .projects-header {
    width: 75%; 
  }

}


@media (max-width: 660px) {

  .projects-list,
  .projects-header {
    width: 100%;
  }

}



</style>
