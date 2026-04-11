<template>
  <div class="page-container">

      <Hero
        title="Blog Posts"
        description="Read blog posts about my perspectives on the tech and healthcare industry, learn about my muay thai & martial arts journey."
        imageHeroItem="/images/blog.jpeg"
      />

  </div>
</template>


<script setup>
import Hero from "../components/blog/Hero.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
