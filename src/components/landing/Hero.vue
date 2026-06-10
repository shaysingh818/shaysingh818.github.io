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
  flex-direction: column;
  gap: 1.0rem; 
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
  position: absolute; 
  justify-content: center;
  height: 75%;
  width: 50%;
  gap: 0.5rem;
  padding: 10px;
}


.hero-profile-container {
  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-direction: row;
  width: 50%;
}

.hero-profile-pic {
  display: flex;
  align-items: center; 
  height: 275px;
  width: 50%;
  background: url("/images/pfp.jpeg");
  border-radius: 10%;
  backround-repeat: no-repeat;
  background-size: cover; 
  justify-content: center;
}

.hero-profile-text {
  display: flex;
  flex-direction: column;
  text-align: left; 
  align-items: left; 
  height: auto;
  width:  75%;
  justify-content: center;
  padding: 10px; 
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
  color: white; 
}

p {
  font-weight: none; 
}


/* laptop */ 
@media (max-width: 992px) {

  .hero-section-profile {
    height: 65%;
    width: 50%;
  }


  .hero-profile-pic {
    display: flex;
    align-items: center; 
    height: 175px;
    width: 175px;
    background: url("/images/pfp.jpeg");
    border-radius: 10%;
    backround-repeat: no-repeat;
    background-size: cover; 
    justify-content: center; 
  }

}


/* tablet */ 
@media (max-width: 768px) {


  .hero-section-profile {
    height: 65%;
    width: 50%;
  }


  .hero-profile-pic {
    display: flex;
    align-items: center; 
    height: 175px;
    width: 175px;
    background: url("/images/pfp.jpeg");
    border-radius: 10%;
    backround-repeat: no-repeat;
    background-size: cover; 
    justify-content: center; 
  }


}


@media (max-width: 480px) {

  .hero-section {
    display: flex;
    position: relative; 
    flex-direction: column;
    gap: 1.0rem; 
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background-color: #0F0F0F;
    z-index: 1;
    top: 0;   
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
