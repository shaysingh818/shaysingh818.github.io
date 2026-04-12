
<template> 
    <div class="hero-section">
      <div class="image-hero-section">

        <div class="image-hero-item" :style="{ backgroundImage: `url(${imageHeroItem})` }" >

        </div>

      </div> 

      <div class="hero-section-profile">

        <div class="hero-profile-text">
          <h1> {{ title }} </h1>
          <p> {{ description }} </p>
        </div>

      </div>
    </div>
    
</template>


<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
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
  height: 250px;
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

p {
  font-weight: normal; 
}

</style>
