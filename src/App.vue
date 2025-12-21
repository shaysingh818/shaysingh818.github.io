<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import { audioStore } from "./api/AudioFile";

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
