<template> 
  <div class="project-card" @click="openLink">

      <div class="project-thumbnail" :style="{ backgroundImage: `url(${imageUrl})` }" >        
      </div>

      <div class="project-detail-section">

        <h1> {{ title }} </h1>

        <div class="project-badge-section">
            <GnTag v-for="(item, index) in badges" :key="index" :label="item" color="var(--app-color-accent)" />
        </div>

        <p> {{ description }} </p> 

      </div> 

    </div>

    
</template>

<script>



export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    badges: {
      type: Array,
      required: false,
      default: () => []
    },
  },
  methods: {
    openLink() {
      window.open(this.projectLink, '_blank')
    }
  }
}


</script>

<script setup>
import { GnTag } from "@graphyne/web-components";
</script>

<style scoped>

.project-card {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 180px;
  border: 1px solid var(--app-color-border);
  background-color: var(--app-color-surface-raised);
  border-radius: 10px; 
  overflow: hidden;
}


.project-thumbnail {
  width: 220px;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}


.project-detail-section {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5rem; 
  padding: 15px;
}


.project-badge-section { 
  display: flex;
  flex-direction: row;
  gap: 0.5rem; 
}

p {
  font-weight: normal;
  font-size: 13px; 
}

/* tablet */ 
@media (max-width: 768px) {


  p {
    font-size: 10px; 
  }

}

@media (max-width: 660px) {

  .project-card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }

  .project-thumbnail {
    width: 100%;
    height: 200px;
  }


  .project-detail-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem; 
  }

}

</style>
