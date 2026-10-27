<template>

  <div class="featured-books-container">

    <div class="featured-books">
      <div class="flex">
        <div class="flex-1">
          <h1> Top Reading Picks </h1>
        </div>
        <div class="flex shrink-0 sm:w-64">
           <GnButton :disabled="false" variant="ghost" color="var(--app-color-accent)" @gn-click="router.push('/reading-list')">
            <span class="view-books-label">
              View Reading List
              <FontAwesomeIcon :icon="faArrowRight" />
            </span>
          </GnButton>
        </div>
      </div>
      <p> These are my top picks for books I've read. Interested in the horror, mystery and thriller genre's. Favorite authors so far are Paige Dearth, Gregg Olson and Jodi Picoult. </p>  
      <div class="featured-books-grid">
        <Book v-for="(book, index) in books" :key="index" :obj="book" />
      </div>
    </div>

  </div>

</template>


<script setup>
import Book from "./Book.vue"
import books from "@/data/featured-books.json"
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

/* tablet */
@media (max-width: 768px) {
  .featured-books-container {
    padding: 0 24px;
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
