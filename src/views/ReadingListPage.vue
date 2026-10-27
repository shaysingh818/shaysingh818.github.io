<template>

  <div class="page-container">

    <Hero
        title="Reading List"
        description="A collection of all the books I've read"
        imageHeroItem1="/images/reading_list_banner/FIREPLACE.jpg"
        imageHeroItem2="/images/reading_list_banner/KOBOLIBRA.webp"
        imageHeroItem3="/images/reading_list_banner/LIBRARY.jpeg"
      />

    <br /> 


    <div class="featured-books-container">

      <div class="featured-books">
        <div class="flex">
            <h1> Top Reading Picks </h1>
        </div>
        <p> These are my top picks for books I've read. Interested in the horror, mystery and thriller genre's. Favorite authors so far are Paige Dearth, Gregg Olson and Jodi Picoult. </p>  
        <div class="featured-books-grid">
          <Book v-for="(book, index) in books" :key="index" :obj="book" />
        </div>
      </div>

    </div>

  </div>

</template>


<script setup>
import Book from "../components/reading-list/Book.vue";
import Hero from "../components/shared/Hero.vue";
import books from "@/data/reading-list.json";
import { GnButton } from "@graphyne/web-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>

.view-books-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.featured-books-container {
  width: 100%;
  max-width: 1120px;
  padding: 0 4.5rem;
  justify-content: center;
}

.featured-books {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.featured-books-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}


p {
  font-size: 16px;
  font-weight: normal;
  color: var(--app-color-text-muted);
}

/* tablet: three books per row */
@media (max-width: 1024px) {
  .featured-books-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* mobile: two books per row */
@media (max-width: 480px) {
  .featured-books-container {
    padding: 0 16px;
  }

  .featured-books-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

</style>

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
  grid-template-columns: repeat(3, 1fr);
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
