<template> 
  <div class="project-card" @click="openLink">

      <div class="project-thumbnail" :style="{ backgroundImage: `url(${imageUrl})` }" >        
      </div>

        <div class="project-info">

          <h1> {{ title }} </h1>
          <p> {{ description }} </p> 

        </div>

          <div class="project-badge-section">
              <Badge v-for="(item, index) in badges" :key="index" :title="item" />
          </div>




    </div>

</template>

<script setup>
import Badge from "../shared/Badge.vue";

const props = defineProps({
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
}); 

</script>


<style scoped>

.project-card {
  display: flex;
  width: 500px;
  height: 325px; /* pick your total card height */
  background-color: #27272f;
  border-radius: 10px;
  flex-direction: column;
}

.project-thumbnail {
  width: 100%;
  aspect-ratio: 3 / 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px 10px 0 0;
}

.project-info {
  display: flex;
  flex-direction: column;
  height: 125px; /* pick your text section height */
  width: 100%;
  background-color: #27272f;
  border-radius: 10px;
  padding: 5px;
  overflow: hidden; /* prevents overflow if description is long */
}

.project-badge-section {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-bottom: 10px; 
}

p {
  font-weight: normal; 
}


@media (max-width: 768px) {

  .project-card {
    width: 100%; 
    height: auto; 
    padding: 10px; 
  }

}


@media (max-width: 660px) {

  .project-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; 
    width: 100%;
    height: auto;
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

  .project-info {
    align-items: center; 
    justify-content: center; 
  }

}

</style>
