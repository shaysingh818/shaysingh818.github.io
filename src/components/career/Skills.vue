<template> 
    <div class="skills">

      <h1> {{ title }}: </h1>

      <div class="skill-badges">
        <GnTag v-for="(item, index) in badges" :key="index" :label="item" color="var(--app-color-accent)" />
      </div>

    </div>
</template>

<script>

export default {
  name: 'Skills',
  props: {
    title: {
      type: String,
      required: true
    },
    badges: {
      type: Array,
      required: false,
      default: () => []
    },
  }
}


</script>

<script setup>
import { GnTag } from "@graphyne/web-components";
</script>

<style scoped>

.skills {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
  align-items: center;
  gap: 0.5rem; 
}


.skill-badges {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap; 
}

h1 {
  font-size: 12px; 
}

</style>
