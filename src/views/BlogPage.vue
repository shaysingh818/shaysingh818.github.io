<template>
  <div class="page-container">

      <Hero
        title="Blog Posts"
        description="Writing about my life, analysis of current events, interesting problems to solve and much more."
        imageHeroItem="/images/blog.jpeg"
      />

      <div class="blog-section">
        <h1> Latest Posts </h1> 
        <div class="blog-post-grid">
          <BlogCard v-for="post in posts" :key="post.title" :obj="post" /> 
          </div> 
      </div>

  </div>
</template>



<script>
import { ref } from 'vue';
import Hero from "../components/blog/Hero.vue";
import BlogCard from "../components/blog/BlogCard.vue";


export default {
  name: 'BlogPage',
  components: {
    Hero,
    BlogCard
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const metaFiles = import.meta.glob("../data/blog-posts/*/metadata.json");
    this.posts = await Promise.all(
      Object.entries(metaFiles).map(async ([_, load]) => {
        const meta = await load();
        return meta.default; 
      })
    ); 
  }
}


</script>

<style>

.blog-section {
  display: flex; 
  flex-direction: column; 
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center; 
  align-items: center;
  text-align: center;
}

.blog-post-grid {
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 75%;
  height: 100%; 
  padding: 10px; 
}

p {
  font-size: 15px; 
}


/* laptop */ 
@media (max-width: 992px) {

  .blog-post-grid {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }

}


/* tablet */ 
@media (max-width: 768px) {

  .blog-post-grid {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

}

/* mobile */ 
@media (max-width: 660px) {

  .blog-post-grid {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }

}

</style>
