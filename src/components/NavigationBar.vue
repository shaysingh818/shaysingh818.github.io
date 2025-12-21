<template>

  <div class="navigation-bar">

    <div class="logo-section">
      <h1>Shay Singh</h1>
    </div>

    <div class="nav-items">

      <div @click="goToProjects">
        <p>Projects</p>
      </div>

      <div @click="goToBlog">
        <p>Blog</p>
      </div>

      <div @click="goToContact">
        <p>Work Experience</p>
      </div>

    </div>

    <div class="search-section">

      <input type="text" name="search" id="search" /> 

    </div>

  </div>

</template>


<script>
export default {
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
