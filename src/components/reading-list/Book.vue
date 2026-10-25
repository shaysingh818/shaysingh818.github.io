<template>

  <div
    class="book-cover"
    role="img"
    :aria-label="`${obj.title} by ${obj.author}`"
    :style="{ backgroundImage: `url(${obj.cover})` }"
  >
  </div>

</template>

<script setup>
defineProps({
  obj: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

.book-cover {
  width: 100%;
  aspect-ratio: 2 / 3;
  border: 1px solid var(--app-color-border);
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>
