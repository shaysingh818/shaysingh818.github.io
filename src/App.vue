<script setup lang="ts">
import NavigationBar from "./components/shared/NavigationBar.vue";

</script>

<template>

   <div class="flex">
    <NavigationBar />
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style>

</style>
