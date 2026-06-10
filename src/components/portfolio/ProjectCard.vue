<template> 
  <div class="project-card" @click="openLink">

      <div class="project-thumbnail" :style="{ backgroundImage: `url(${imageUrl})` }" >        
      </div>

      <div class="project-detail-section">

        <h1> {{ title }} </h1>

        <div class="project-badge-section">
            <Badge v-for="(item, index) in badges" :key="index" :title="item" />
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
import Badge from "../shared/Badge.vue";
</script>

<style scoped>

.project-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem; 
  width: 100%;
  padding: 15px;
  height: 180px;
  background-color: #27272f;
  border-radius: 10px; 
}


.project-thumbnail {
  width: 150px;
  flex-shrink: 0;
  apsect-ratio: 16/9; 
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: auto;
  border-radius: 10%;
}


.project-detail-section {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 0.5rem; 
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
    align-items: center;
    gap: 1rem; 
    width: 100%;
    padding: 15px;
    height: auto;
    background-color: #403E3E;
    border-radius: 10px; 
  }

  .project-thumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: auto;
    border-radius: 10px;
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
