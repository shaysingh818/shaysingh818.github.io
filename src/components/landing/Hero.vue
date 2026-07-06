<template> 
    <div class="hero-section">
      <div class="image-hero-section">

      </div> 

      <div class="hero-section-profile">

        <div class="hero-profile-pic">

        </div>

        <div class="hero-profile-text">
          <h1> {{ title }} </h1> 
          <p> {{ description }}  </p> 
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
    imageHeroItem1: {
      type: String,
      required: true
    },
    imageHeroItem2: {
      type: String,
      required: true
    },
    imageHeroItem3: {
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
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: #1e1e24;
}

.hero-section-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 0.5rem;
  padding: 10px;
}

.hero-profile-pic {
  flex-shrink: 0;
  height: 300px;
  width: 300px;
  background: url("/images/pfp.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10%;
}

.hero-profile-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 10px;
}

h1 {
  color: white;
  font-size: 35px;
  font-weight: bold;
}

p {
  font-size: 15px;
  font-weight: normal;
}

/* laptop */
@media (max-width: 992px) {
  .hero-section-profile {
    width: 75%;
    border: 1px solid white; 
  }
  .hero-profile-pic {
    height: 175px;
    width: 175px;
  }
}

/* tablet */
@media (max-width: 768px) {
  .hero-section-profile {
    width: 75%;
  }
  .hero-profile-pic {
    height: 175px;
    width: 175px;
  }
}

@media (max-width: 660px) {
  .hero-section {
    height: 500px;
    background-color: #1e1e24;
    flex-direction: column;
  }
  .hero-section-profile {
    width: 100%;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }

  .hero-profile-text {
    align-items: center; 
    justify-content: center;
    text-align: center; 
  }


  .hero-profile-pic {
    height: 300px;
    width: 300px;
  }
}
</style>

