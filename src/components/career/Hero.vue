<template> 
    <div class="hero-section">
      <div class="image-hero-section">

        <div class="image-hero-item" :style="{ backgroundImage: `url(${imageHeroItem})` }" >

        </div>

      </div> 

      <div class="hero-section-profile">

        <div class="hero-profile-text">
          <h1> {{ title }} </h1> 
        </div>

        <div class="hero-skills">

          <Skills
              title="Programming Languages"
              :badges="['Rust', 'Python', 'Typescript', 'C', 'SQL']"
           />

          <Skills
              title="Frameworks"
              :badges="['Tauri', 'VueJS', 'Django', 'Flask', 'Streamlit', 'CUDA', 'Numpy', 'Pandas', 'Polars', 'Snowpark', 'Schemachange', 'DBT', 'Flyway']"
           />

          <Skills
              title="Technologies"
              :badges="['AWS', 'Snowflake', 'Clickhouse', 'GitHub', 'Backstage', 'Figma', 'Draw.IO']"
           />

        </div>




      </div>
    </div>
    
</template>

<script setup>
import Skills from "./Skills.vue";
</script>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true
    },
    imageHeroItem: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

.hero-section {
  display: flex;
  position: relative; 
  flex-direction: column;
  gap: 1.0rem; 
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: #0F0F0F;
  z-index: 1; 
}


.hero-section-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; 
  justify-content: center;
  height: 75%;
  width: 60%;
}

.hero-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 
  justify-content: center;
  height: 75%;
  width: 100%;
  gap: 0.5rem;
}


.hero-profile-container {
  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  gap: 1.0rem;
  width: 50%;
}

.hero-profile-pic {
  display: flex;
  align-items: center; 
  height: 200px;
  width: 200px;
  background: url("/images/pfp.jpeg");
  border-radius: 10%;
  backround-repeat: no-repeat;
  background-size: cover; 
  justify-content: center; 
}

.hero-profile-text {
  display: flex;
  flex-direction: column;
  text-align: center; 
  align-items: center; 
  width: 100%;
  justify-content: center;
  gap: 0.5rem;
}

.image-hero-section {
  position: absolute; 
  display: flex; 
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.image-hero-item {
  position: relative; 
  display: flex; 
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.image-hero-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* increase 0.4 to make it darker */
}

h1 {
  font-size: 25px; 
  color: white; 
}

p {
  font-weight: normal; 
}

@media (max-width: 768px) {

  .hero-section-profile {
    height: 75%;
    width: 75%;
    gap: 0.5rem;
  }
}


@media (max-width: 660px) {

  .hero-section {
    height: 400px;
    width: 100%;
  }


  .hero-section-profile {
    height: 75%;
    width: 75%;
    gap: 0.5rem;
  }


  .image-hero-section {
    position: absolute; 
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

}

</style>
