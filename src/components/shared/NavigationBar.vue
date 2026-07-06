<template>


  <button class="hamburger" @click="menuOpen = !menuOpen">☰</button> 

  <div class="navigation-bar" :class="{'navigation-bar--open': menuOpen}">

    <div class="logo-section">
      <h1 @click="goToHome">Shay Singh</h1>
    </div>

    <div class="nav-items">
      <div @click="goToProjects">
        <p>Projects</p>
      </div>

      <div @click="goToContact">
        <p>Career</p>
      </div>

      <div @click="goToContact">
        <p>Services</p>
      </div>

    </div>


    <div class="contact-section">
      <div>
        <a href="https://www.linkedin.com/in/shalin-singh-5b881a19a/">
          <LinkedinIcon class="linkedin-icon" />
        </a>
      </div>

      <div>
        <a href="https://github.com/shaysingh818">
          <GitHubIcon />
        </a>
      </div>

      <div>
        <a href="https://discord.com/users/730771068075114547">
          <DiscordIcon />
        </a>
      </div>
    </div>


  </div>


  <div class="overlay" v-if="menuOpen" @click="menuOpen = false" />

</template>

<style scoped>

.navigation-bar {
  display: flex;
  position: fixed; 
  flex-direction: row;
  gap: 0.5rem; 
  justify-content: left;
  align-items: center; 
  height: 60px;
  width: 100%; 
  padding: 10px;
  z-index: 100;
  background-color: #16161a;
}


.nav-items {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55px;
  gap: 2.0rem;
  width: 20%; 
}

.logo-section {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55px;
  gap: 0.5rem;
  padding: 20px;
  width: 15%;  
}


.contact-section {
  display: flex;
  flex-direction: row;
  margin-left: auto; 
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1.2rem;
  padding: 20px;
  width: 15%; 
}

.contact-section svg {
  width: 20px;
  height: 20px;
}

.linkedin-icon {
  fill: #0A66C2
}


h1 {
  color:  #7c6af7;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Inter', sans-serif; 
}


p {
  font-size: 11px;
  color: #e8e8f0 ;
  font-weight: bold; 
  font-family: 'Inter', sans-serif; 
}

.hamburger {
  display: none;
}


/* mobile */ 
@media (max-width: 480px) {

  .hamburger {
    position: fixed; 
    display: flex;
    margin-right: auto;
    color: white;
    padding: 10px;
    z-index: 997; 
  }

  .navigation-bar {
    display: flex; 
    flex-direction: column;
    position: fixed; 
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    transform: translateX(-100%); 
    transition: transform 0.3s ease; 
    z-index: 999;
    background-color: rgb(41 37 36);
  }

  .navigation-bar--open {
    transform: translateX(0);
  }

  .logo-section {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%; 
    gap: 0.5rem;
    padding: 20px;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto; 
    gap: 1.0rem;
    padding: 25px;
  }

  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55px;
    gap: 1.0rem;
    padding: 20px;
    width: 100%;
    margin-top: auto; 
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 998;
  }


  p {
    font-size: 15px;
  }

}


</style>

<script setup>

import { ref } from 'vue'; 
import GitHubIcon from '@/assets/icons/github.svg';
import DiscordIcon from '@/assets/icons/discord-icon.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

const menuOpen = ref(false);

</script>


<script>
export default {
  name: 'NavigationBar',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToProjects() {
      this.$router.push('/projects');
    },
    goToBlog() {
      this.$router.push('/blog');
    },
    goToContact() {
      this.$router.push('/contact');
    },
  },
};

</script>
