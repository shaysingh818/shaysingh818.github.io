<template>

  <div class="featured-project-card">

    <div class="featured-project-thumbnail" :style="{ backgroundImage: `url(${obj.thumbnail})` }">

    </div>

    <div class="featured-project-info">

      <div class="featured-project-title">
        <h1> {{ obj.title }} </h1>
      </div>

      <div class="featured-project-tags">
        <GnTag v-for="(tag, index) in obj.tags" :key="index" :label="tag" color="var(--app-color-accent)" />
      </div>

      <div class="featured-project-description">
        <p> {{ obj.description }} </p>
      </div>

    </div>

  </div>

</template>


<script setup>
import { GnTag } from "@graphyne/web-components";

defineProps({
  obj: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

.featured-project-card {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 225px;
  border: 1px solid var(--app-color-border);
  border-radius: 8px;
  background-color: var(--app-color-surface-raised);
  overflow: hidden;
}


.featured-project-thumbnail {
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.featured-project-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
}

.featured-project-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
}

h1 {
  font-size: 16px;
}

p {
  font-size: 13px;
  font-weight: normal;
  color: var(--app-color-text-muted);
}

</style>
